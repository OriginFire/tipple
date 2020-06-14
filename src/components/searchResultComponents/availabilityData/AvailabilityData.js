class AvailabilityData {
  // constructors
  constructor(availability, filterSettings, vendor) {
    this.availability = availability;
    this.filterSettings = filterSettings;
    this.vendor = vendor;
    this.currentDateTime = new Date();
    this.currentHour = this.currentDateTime.getHours();
    this.currentDay = this.currentDateTime.getDay();

    // consts
    this.availabilityStatus = this.resolveStatus();
    this.availabilityTime = this.resolveTime();
  }

  // public methods
  getAvailabilityStatus() {
    return this.availabilityStatus;
  }

  getAvailabilityTime() {
    return this.availabilityTime;
  }

  getNextAvailableTime() {
    return this.nextAvailableTime;
  }

  // private methods
  resolveStatus() {
    if (
      this.serviceToday() &&
      this.earliestFulfillment() < this.lastAvailabilityToday()
    ) {
      return 'Available Today';
    }
    const nextDay = this.nextAvailabilityDay();
    let status;
    if (
      nextDay.dayCount === this.currentDay + 1 ||
      nextDay.dayCount === this.currentDay - 6
    ) {
      status = 'Available Tomorrow';
    } else {
      status = `Available ${nextDay.day}`;
    }
    return status;
  }

  serviceToday() {
    let service = false;
    this.availability.forEach(availabilityType => {
      if (
        availabilityType.availabilityType === 'pickup' &&
        this.filterSettings.doesPickup
      ) {
        if (
          availabilityType.AvailabilitySchedules[this.currentDay].Shifts
            .length !== 0
        ) {
          service = true;
        }
      }
      if (
        availabilityType.availabilityType === 'delivery' &&
        this.filterSettings.doesDelivery
      ) {
        if (
          availabilityType.AvailabilitySchedules[this.currentDay].Shifts
            .length !== 0
        ) {
          service = true;
        }
      }
    });
    return service;
  }

  earliestFulfillment() {
    let nextTime = 30; // use 30 because all hours < 30
    this.availability.forEach(availabilityType => {
      if (
        availabilityType.availabilityType === 'pickup' &&
        this.filterSettings.doesPickup
      ) {
        if (nextTime > this.nextAvailabilePickup()) {
          nextTime = this.nextAvailabilePickup();
        }
      }
      if (
        availabilityType.availabilityType === 'delivery' &&
        this.filterSettings.doesDelivery
      ) {
        if (nextTime > this.nextAvailabileDelivery()) {
          nextTime = this.nextAvailabileDelivery();
        }
      }
    });
    return nextTime;
  }

  lastAvailabilityToday() {
    let lastAvailability = -1;
    this.availability.forEach(availabilityType => {
      if (
        availabilityType.availabilityType === 'pickup' &&
        this.filterSettings.doesPickup
      ) {
        availabilityType.AvailabilitySchedules[this.currentDay].Shifts.map(
          shift => {
            if (lastAvailability < shift.endHour) {
              lastAvailability = shift.endHour;
            }
          },
        );
      }
      if (
        availabilityType.availabilityType === 'delivery' &&
        this.filterSettings.doesDelivery
      ) {
        availabilityType.AvailabilitySchedules[this.currentDay].Shifts.map(
          shift => {
            if (lastAvailability < shift.endHour) {
              lastAvailability = shift.endHour;
            }
          },
        );
      }
    });
    return lastAvailability + 1;
  }

  nextAvailabilityDay() {
    let nextDay;
    let dayCount;
    this.availability.forEach(availabilityType => {
      if (
        availabilityType.availabilityType === 'pickup' &&
        this.filterSettings.doesPickup
      ) {
        availabilityType.AvailabilitySchedules.map(day => {
          if (
            this.daysToNumbers(day.day) !== this.currentDay &&
            day.Shifts.length !== 0
          ) {
            if (!Number.isInteger(dayCount)) {
              nextDay = day.day;
              dayCount = this.daysToNumbers(day.day);
            } else if (
              (this.daysToNumbers(day.day) < dayCount &&
                dayCount < this.currentDay) ||
              (this.daysToNumbers(day.day) > dayCount &&
                dayCount < this.currentDay &&
                this.daysToNumbers(day.day) > this.currentDay)
            ) {
              nextDay = day.day;
              dayCount = this.daysToNumbers(day.day);
            }
          }
        });
      }
      if (
        availabilityType.availabilityType === 'delivery' &&
        this.filterSettings.doesDelivery
      ) {
        availabilityType.AvailabilitySchedules.map(day => {
          if (
            this.daysToNumbers(day.day) !== this.currentDay &&
            day.Shifts.length !== 0
          ) {
            if (!Number.isInteger(dayCount)) {
              nextDay = day.day;
              dayCount = this.daysToNumbers(day.day);
            } else if (
              (this.daysToNumbers(day.day) < dayCount &&
                dayCount < this.currentDay) ||
              (this.daysToNumbers(day.day) > dayCount &&
                dayCount < this.currentDay &&
                this.daysToNumbers(day.day) > this.currentDay)
            ) {
              nextDay = day.day;
              dayCount = this.daysToNumbers(day.day);
            }
          }
        });
      }
    });
    return {
      dayCount,
      day: nextDay,
    };
  }

  nextAvailabilePickup() {
    return this.currentHour + this.vendor.minimumPickupFulfillment;
  }

  nextAvailabileDelivery() {
    return this.currentHour + this.vendor.minimumDeliveryFulfillment;
  }

  resolveTime() {
    let time;
    if (
      this.serviceToday() &&
      this.earliestFulfillment() < this.lastAvailabilityToday()
    ) {
      this.availability.forEach(availabilityType => {
        if (
          availabilityType.availabilityType === 'pickup' &&
          this.filterSettings.doesPickup
        ) {
          availabilityType.AvailabilitySchedules[
            this.currentDay
          ].Shifts.forEach(shift => {
            if (!Number.isInteger(time)) {
              time = shift.endHour;
            } else if (shift.endHour > time) {
              time = shift.endHour;
            }
          });
        }
        if (
          availabilityType.availabilityType === 'delivery' &&
          this.filterSettings.doesDelivery
        ) {
          availabilityType.AvailabilitySchedules[
            this.currentDay
          ].Shifts.forEach(shift => {
            if (!Number.isInteger(time)) {
              time = shift.endHour;
            } else if (shift.endHour > time) {
              time = shift.endHour;
            }
          });
        }
      });
    } else {
      const nextDay = this.nextAvailabilityDay();
      this.availability.forEach(availabilityType => {
        if (
          availabilityType.availabilityType === 'pickup' &&
          this.filterSettings.doesPickup
        ) {
          availabilityType.AvailabilitySchedules[
            nextDay.dayCount
          ].Shifts.forEach(shift => {
            if (!Number.isInteger(time)) {
              time = shift.startHour;
            } else if (shift.startHour < time) {
              time = shift.startHour;
            }
          });
        }
        if (
          availabilityType.availabilityType === 'delivery' &&
          this.filterSettings.doesDelivery
        ) {
          availabilityType.AvailabilitySchedules[
            nextDay.dayCount
          ].Shifts.forEach(shift => {
            if (!Number.isInteger(time)) {
              time = shift.startHour;
            } else if (shift.startHour < time) {
              time = shift.startHour;
            }
          });
        }
      });
    }
    return time;
  }

  isCurrentHourAvailable() {}

  isDeliveryPickupAvailable() {}

  isCurrentDayAvailable() {}

  // helpers

  getCurrentShiftStart() {
    if (!isNowInAvailable()) {
      return -1;
    }
    daySchedule.Shifts.map(shift => {
      shift.startHour < this.currentDateTime;
    });
  }

  getCurrentShiftEnd() {
    if (!isNowInAvailable()) {
      return -1;
    }
    daySchedule.Shifts.map(shift => {
      shift.endHour > this.currentDateTime;
    });
  }

  daysToNumbers(day) {
    switch (day) {
      case 'Sunday':
        return 0;
      case 'Monday':
        return 1;
      case 'Tuesday':
        return 2;
      case 'Wednesday':
        return 3;
      case 'Thursday':
        return 4;
      case 'Friday':
        return 5;
      case 'Saturday':
        return 6;
    }
  }

  // others
}

export default AvailabilityData;
