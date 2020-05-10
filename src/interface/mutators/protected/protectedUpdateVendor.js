import jwt from 'jsonwebtoken';
import Vendor from '../../../data/models/Vendor';
import VendorType from '../../types/VendorType';
import VendorInputType from '../../types/VendorInputType';
import config from '../../../config';

const protectedUpdateVendor = {
  type: VendorType,
  args: {
    vendor: { type: VendorInputType },
  },
  async resolve(value, { vendor }) {
    const vendorInput = vendor;
    const JWT = jwt.verify(vendor.JWT, config.auth.jwt.secret);
    console.log(JWT);

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
        doesPickup: vendorInput.doesPickup,
      },
      { where: { slug: vendor.slug } },
    );
  },
};

export default protectedUpdateVendor;

/* include: [{ model: Cocktail, as: 'cocktails' }, User],
});
displayVendor.vendorImage = displayVendor.vendorImage.toString();
displayVendor.cocktails.forEach(c => {
  c.image = c.image.toString();
});
return displayVendor; */
