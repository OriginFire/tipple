import jwt from 'jsonwebtoken';
import Vendor from '../../../data/models/Vendor';
import VendorType from '../../types/VendorType';
import VendorInputType from '../../types/VendorInputType';
import config from '../../../config';
import AvailabilityScheduleType from "../../types/AvailabilityScheduleType";

const protectedUpdateVendor = {
  type: VendorType,
  args: {
    vendor: { type: VendorInputType },
  },
  async resolve(value, { vendor }) {
    const vendorInput = vendor;
    const JWT = jwt.verify(vendor.JWT, config.auth.jwt.secret);

    if (JWT.vendorSlug !== vendor.slug) {
      return 'nope';
    }
    await Vendor.update(
      {
        dbaName: vendorInput.dbaName,
        legalEntityName: vendorInput.legalEntityName,
        physicalAddress: vendorInput.physicalAddress,
        latitude: vendorInput.latitude,
        longitude: vendorInput.longitude,
        alcoholLicenseNumber: vendorInput.alcoholLicenseNumber,
        alcoholLicenseIssuingAgency: vendorInput.alcoholLicenseIssuingAgency,
        alcoholLicenseExpiration: vendorInput.alcoholLicenseExpiration,
        doesDelivery: vendorInput.doesDelivery,
        deliveryRadius: vendorInput.deliveryRadius,
        doesPickup: vendorInput.doesPickup,
        onlineStore: vendorInput.onlineStore,
        deliveryLngMax: vendorInput.longitude - vendor.deliveryRadius / 69,
        deliveryLngMin: vendorInput.longitude - vendor.deliveryRadius / 69,
        deliveryLatMax: vendorInput.latitude + vendor.deliveryRadius / 69,
        deliveryLatMin: vendorInput.latitude - vendor.deliveryRadius / 69,
      },
      { where: { slug: vendor.slug } },
    );
  },
};

export default protectedUpdateVendor;
