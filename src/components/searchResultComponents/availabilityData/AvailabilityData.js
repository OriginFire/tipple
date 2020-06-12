class AvailabilityData {
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

  /*
    This function works in the following steps:

    1) Map the cocktail vendor's availability to distinguish between the vendor's pickup and delivery hours of operations

    2) Based on customer-user filter settings, determine whether delivery and/or pickup availability types are relevant to
       the scope of the user search

    3) Map each day of each availability type (pickup and delivery

    4) Determine if the current hour of the day is before latest hour of operation MINUS the vendor's minimum fulfillment period
       and if that screened availability type is relevant to the user

    5) If both conditions of 4 are satisfied, it changes the availability status to 'Available Today' and sets the availability time
       to the latest hour of operation for that type.


   */
  resolveAvailabilityStatus() {
    const currentDayofWeek = this.currentDateTime.getDay();

    this.availability.map(availabilityType => {
      // Step 1
      let fulfillmentMinimum;
      let showAvailabilityCheck;
      if (availabilityType.availabilityType === 'pickup') {
        // Step 2
        showAvailabilityCheck = this.filterSettings.doesPickup;
        fulfillmentMinimum = this.vendor.minimumPickupFulfillment;
      } else {
        showAvailabilityCheck = this.filterSettings.doesDelivery;
        fulfillmentMinimum = this.vendor.minimumDeliveryFulfillment;
      }

      let nextDayOfOperationCount;

      if (showAvailabilityCheck) {
        availabilityType.availabilitySchedules.map(daySchedule => {
          const currentAvailabilityDayCount = this.daysToNumbers(
            daySchedule.day,
          );

          // Step 3
          if (
            daySchedule.shifts.length !== 0 &&
            currentAvailabilityDayCount === currentDayofWeek
          ) {
            let latestHourOfOperation = 0;
            daySchedule.shifts.map(shift => {
              if (shift.endHour > latestHourOfOperation) {
                latestHourOfOperation = shift.endHour;
              }
            });
            if (
              this.currentDateTime.getHours() + fulfillmentMinimum <
              latestHourOfOperation + 1
            ) {
              this.availabilityStatus = 'Available Today';
              if (this.availabilityTime < latestHourOfOperation) {
                this.availabilityTime = latestHourOfOperation;
              }
            }
          } else if (this.availabilityStatus === 'Available Today') {
          } else if (daySchedule.shifts.length === 0) {
          } else {
            if (!Number.isInteger(nextDayOfOperationCount)) {
              let earliestTime = 23;
              nextDayOfOperationCount = currentAvailabilityDayCount;
              if (currentAvailabilityDayCount === currentDayofWeek + 1) {
                this.availabilityStatus = 'Available Tomorrow';
              } else {
                this.availabilityStatus = `Available ${daySchedule.day}`;
              }
              daySchedule.shifts.map(shift => {
                if (shift.startHour < earliestTime) {
                  earliestTime = shift.startHour;
                }
              });
              this.availabilityTime = earliestTime;
            }
            if (
              currentAvailabilityDayCount < nextDayOfOperationCount ||
              (currentAvailabilityDayCount > nextDayOfOperationCount &&
                nextDayOfOperationCount < currentDayofWeek)
            ) {
              let earliestTime = 23;
              nextDayOfOperationCount = currentAvailabilityDayCount;
              if (currentAvailabilityDayCount === currentDayofWeek + 1) {
                this.availabilityStatus = 'Available Tomorrow';
              } else {
                this.availabilityStatus = `Available ${daySchedule.day}`;
              }
              daySchedule.shifts.map(shift => {
                if (shift.startHour < earliestTime) {
                  earliestTime = shift.startHour;
                }
              });
              this.availabilityTime = earliestTime;
            }
          }
        });
      }
    });
    return {
      status: this.availabilityStatus,
      time: this.availabilityTime,
    };
  }
}

export default AvailabilityData;
