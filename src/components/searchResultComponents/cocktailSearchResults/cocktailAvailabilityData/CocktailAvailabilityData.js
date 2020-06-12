class CocktailAvailabilityData {
  constructor(availability, filterSettings, vendor) {
    this.availability = availability;
    this.filterSettings = filterSettings;
    this.vendor = vendor;
    this.availabilityStatus = 'Not Available Today';
    this.availabilityTime = 0;
    this.currentDateTime = new Date();
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

  resolveAvailabilityStatus() {
    this.availability.map(availabilityType => {
      let fulfillmentMinimum;
      let showAvailabilityCheck;
      if (availabilityType.availabilityType === 'pickup') {
        showAvailabilityCheck = this.filterSettings.doesPickup;
        fulfillmentMinimum = this.vendor.minimumPickupFulfillment;
      } else {
        showAvailabilityCheck = this.filterSettings.doesDelivery;
        fulfillmentMinimum = this.vendor.minimumDeliveryFulfillment;
      }
      availabilityType.availabilitySchedules.map(daySchedule => {
        if (
          daySchedule.shifts.length !== 0 &&
          this.daysToNumbers(daySchedule.day) === this.currentDateTime.getDay()
        ) {
          let latestHourOfOperation = 0;
          daySchedule.shifts.map(shift => {
            if (shift.endHour > latestHourOfOperation) {
              latestHourOfOperation = shift.endHour;
            }
          });
          if (
            this.currentDateTime.getHours() + fulfillmentMinimum <
              latestHourOfOperation &&
            showAvailabilityCheck
          ) {
            this.availabilityStatus = 'Available Today';
            if (this.availabilityTime < latestHourOfOperation) {
              this.availabilityTime = latestHourOfOperation;
            }
          } else {
            // aggressive block finding the next availability day and rendering earliest available time
          }
        }
      });
    });
    return {
      status: this.availabilityStatus,
      time: this.availabilityTime,
    };
  }
}

export default CocktailAvailabilityData;
