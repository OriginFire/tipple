import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import ContentBox from '../sitewideDisplayComponents/contentBox/ContentBox';
import s from './AboutPage.scss';

function AboutPage() {
  return (
    <ContentBox>
      <div className={s.content}>
        <div className={s.header}>
          Tipple is an app to find takeout cocktails
        </div>
        <div className={s.explainer}>
          It allows you to search for drinks in your area and filter options by
          flavor profile, price, and current availability.
        </div>
        <div className={s.question}>FAQ</div>
        <div className={s.question}>Can I use Tipple to order cocktails?</div>
        <div className={s.answer}>
          Yes and no. Tipple does not currently support purchasing cocktails
          directly on this site.
          <br />
          <br />
          To purchase cocktails you must follow the link provided on each
          listing and place your order on the vendor's online ordering platform.
        </div>

        <div className={s.question}>
          I don't see anything in my search results; is this a mistake?
        </div>
        <div className={s.answer}>
          Probably not. Tipple lists vendors who have created accounts on our
          site and uploaded a selection of cocktails. If no matches are found in
          your search, it's possible there are currently no nearby vendors on
          the site.
          <br />
          <br />
          Alternatively, consider adjusting the search filter settings
          (accessible via the settings icon on the top-left of the search page).
          Tipple matches vendors that both deliver to your address and offer
          pickup within a default area that you can adjust. Increasing your
          pickup area may return matches that do not meet the default search
          settings.
          <br />
          <br />
          There are additional filter settings to limit the results of your
          search. These can be helpful if you're looking for a particular kind
          of drink, options available immediately, below a certain price, etc.
        </div>

        <div className={s.question}>
          Can I list my bar or restaurant on Tipple?
        </div>
        <div className={s.answer}>
          Of course!
          <br />
          <br />
          We invite any vendor in any city to sign up free of charge. Be advised
          that Tipple is best suited to bars or restaurants that sell cocktails
          in some fashion for takeout.
        </div>

        <div className={s.question}>
          Is listing my business on Tipple in compliance with my jurisdiction's
          alcohol laws concerning takeout sales and third party facilitated
          transactions?
        </div>
        <div className={s.answer}>
          Yes, and for a very simple reason.
          <br />
          <br />
          Tipple doesn't currently support the sale of alcohol on this site. To
          list a business, you must also link to an existing online sales
          platform where customers can place their order. Keeping the
          fulfillment of such transactions compliant with local jurisdiction
          alcohol laws will remain your business' responsibility.
          <br />
          <br />
          For instance, Tipple could match a customer in a different
          jurisdiction to your venue, but such a customer would only be
          prevented from placing a cross-jurisdiction delivery order by whatever
          policies your business normally abides. Restrictions pertaining to
          legal drinking age, required food sales, hours of business, and any
          other matter regulated by beverage alcohol authorities is similarly
          the responsibility of the alcohol licensed business authorizing the
          transaction.
        </div>
        <div className={s.question}>As a vendor, what do I have to do?</div>
        <div className={s.answer}>
          Create an account, set the link to your online store, and upload your
          takeout cocktail selection. You'll need to include size and pricing
          information, cocktail ingredients, flavor profile and tasting notes,
          and an image for each drink.
          <br />
          <br />
          To appear in Tipple search results, you'll also need to add hours of
          operation for takeout and delivery sales.
          <br />
          <br />
          After that, nothing! When users search the app, if you provide pickup
          or delivery in their area your bar and cocktails will be listed.
        </div>
      </div>
    </ContentBox>
  );
}

export default withStyles(s)(AboutPage);
