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
    this.earliestTime = 23;
    this.initialAvailabilityStatus = 'Not Available Today';

    this.availabilityStatus = this.resolveStatus();
    this.availabilityTime = 0;
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
    const status = `Available ${nextDay}`;
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
          availabilityType.availabilitySchedules[this.currentDay].shifts
            .length !== 0
        ) {
          service = true;
        }
        if (
          availabilityType.availabilityType === 'delivery' &&
          this.filterSettings.doesDelivery
        ) {
          if (
            availabilityType.availabilitySchedules[this.currentDay].shifts
              .length !== 0
          ) {
            service = true;
          }
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
    return 23;
  }

  nextAvailabilityDay() {
    let nextDay = 'Saturday';
    let dayCount;
    this.availability.forEach(availabilityType => {
      if (
        availabilityType.availabilityType === 'pickup' &&
        this.filterSettings.doesPickup
      ) {
        availabilityType.availabilitySchedules.map(day => {
          if (this.daysToNumbers(day.day) !== this.currentDay && day.shifts.length !== 0) {
            if (!Number.isInteger(dayCount)) {
              nextDay = day.day;
              dayCount = this.daysToNumbers(day.day);
            } else if (this.daysToNumbers(day.day) < dayCount || (this.daysToNumbers(day.day) > dayCount && dayCount < this.currentDay)) {
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
        availabilityType.availabilitySchedules.map(day => {
          if (this.daysToNumbers(day.day) !== this.currentDay && day.shifts.length !== 0) {
            if (!Number.isInteger(dayCount)) {
              nextDay = day.day;
              dayCount = this.daysToNumbers(day.day);
            } else if (this.daysToNumbers(day.day) < dayCount ||
              (this.daysToNumbers(day.day) > dayCount && dayCount < this.currentDay)) {
              nextDay = day.day;
              dayCount = this.daysToNumbers(day.day);
            }
          }
        });
      }
    });
    return nextDay;
  }

  nextAvailabilePickup() {
    return this.currentHour + this.vendor.minimumPickupFulfillment;
  }

  nextAvailabileDelivery() {
    return this.currentHour + this.vendor.minimumDeliveryFulfillment;
  }

  isCurrentHourAvailable() {
    if (!this.isAvailableToday()) {
      return false;
    }
    daySchedule.shifts.forEach(shift => {
      if (
        shift.startTime < this.currentHour &&
        shift.endTime > this.currentHour
      ) {
        return true;
      }
    });
    return false;
  }

  isDeliveryPickupAvailable() {}

  isCurrentDayAvailable() {}

  // helpers

  getCurrentShiftStart() {
    if (!isNowInAvailable()) {
      return -1;
    }
    daySchedule.shifts.map(shift => {
      shift.startHour < this.currentDateTime;
    });
  }

  getCurrentShiftEnd() {
    if (!isNowInAvailable()) {
      return -1;
    }
    daySchedule.shifts.map(shift => {
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
