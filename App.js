import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Arusuvai
 *  Header
 *    Logo
 *    Nav
 *  Body
 *    Search
 *    Restaurant Container
 *      Restaurant Card
 *  Footer
 *    copyright
 *    links
 *    Address
 *  */

const Header = () => {
  return (
    <header>
      <div className="container">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Food_for_the_Hungry_FH_logo.png"
        />

        <ul className="nav-items">
          <li>About</li>
          <li>Contact US</li>
          <li>Cart</li>
        </ul>
      </div>
    </header>
  );
};

const resList = [
  {
    info: {
      id: "353030",
      name: "Chowman",
      cloudinaryImageId: "06d12ec700e4118d159fab6c3a7256dd",
      locality: "1st Stage",
      areaName: "Indiranagar",
      costForTwo: "₹800 for two",
      cuisines: ["Chinese", "Asian", "Thai", "Oriental", "Burmese", "Tibetan"],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "353030",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 7200,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 7200,
      },
      parentId: "266",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 6.1,
        serviceability: "SERVICEABLE",
        slaString: "33 mins",
        lastMileTravelString: "6.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-17 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
        },
        freedelMessage: "FREE DELIVERY",
        badgeType: "BADGE_TYPE_ONE_LITE",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/chowman-1st-stage-indiranagar-bangalore-353030",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "3369",
      name: "Truffles",
      cloudinaryImageId: "cd832b6167eb9f88aeb1ccdebf38d942",
      locality: "St. Marks Road",
      areaName: "St. Marks Road",
      costForTwo: "₹450 for two",
      cuisines: ["American", "Desserts", "Continental", "Italian"],
      avgRating: 4.6,
      feeDetails: {
        restaurantId: "3369",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3400,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3400,
      },
      parentId: "218065",
      avgRatingString: "4.6",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 0.8,
        serviceability: "SERVICEABLE",
        slaString: "23 mins",
        lastMileTravelString: "0.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-17 23:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
        },
        freedelMessage: "FREE DELIVERY",
        badgeType: "BADGE_TYPE_ONE_LITE",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/truffles-st-marks-road-bangalore-3369",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "503961",
      name: "Istah - The Mediterranean Way",
      cloudinaryImageId: "9a01f2935fcb5ae05426db8264062102",
      locality: "Akkithimanahalli",
      areaName: "Santhi Nagar",
      costForTwo: "₹250 for two",
      cuisines: [
        "Mediterranean",
        "Snacks",
        "Biryani",
        "Grill",
        "Kebabs",
        "Arabian",
        "Lebanese",
        "Beverages",
        "Desserts",
        "Italian",
        "Turkish",
      ],
      avgRating: 4.5,
      feeDetails: {
        restaurantId: "503961",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4400,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4400,
      },
      parentId: "3518",
      avgRatingString: "4.5",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "29 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-18 00:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            description: "OnlyOnSwiggy",
          },
        ],
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "OnlyOnSwiggy",
                  imageId:
                    "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "EVERY ITEM",
        subHeader: "@ ₹139",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
        },
        freedelMessage: "FREE DELIVERY",
        badgeType: "BADGE_TYPE_ONE_LITE",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/istah-the-mediterranean-way-akkithimanahalli-santhi-nagar-bangalore-503961",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "65797",
      name: "Leon's - Burgers & Wings (Leon Grill)",
      cloudinaryImageId: "b2edbc28b7b8219d6e0a9c049ce06658",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹300 for two",
      cuisines: ["American", "Snacks", "Turkish", "Portuguese", "Continental"],
      avgRating: 4.4,
      feeDetails: {
        restaurantId: "65797",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 6700,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 6700,
      },
      parentId: "371281",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 6.4,
        serviceability: "SERVICEABLE",
        slaString: "33 mins",
        lastMileTravelString: "6.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-18 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹499",
        discountTag: "FLAT DEAL",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
        },
        freedelMessage: "FREE DELIVERY",
        badgeType: "BADGE_TYPE_ONE_LITE",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/leons-burgers-and-wings-leon-grill-koramangala-bangalore-65797",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "23847",
      name: "Domino's Pizza",
      cloudinaryImageId: "fjqcvqfgqlw6h0atques",
      locality: "Rest House Road",
      areaName: "Brigade Road",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "23847",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3400,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3400,
      },
      parentId: "2456",
      avgRatingString: "4.3",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 25,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-17 22:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/dominos-pizza-rest-house-road-brigade-road-bangalore-23847",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "10575",
      name: "Pizza Hut",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      locality: "Shanti Nagar",
      areaName: "Shanti Nagar",
      costForTwo: "₹600 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "10575",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3400,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3400,
      },
      parentId: "721",
      avgRatingString: "4.1",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 2.5,
        serviceability: "SERVICEABLE",
        slaString: "26 mins",
        lastMileTravelString: "2.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-18 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹179",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
        },
        freedelMessage: "FREE DELIVERY",
        badgeType: "BADGE_TYPE_ONE_LITE",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/pizza-hut-shanti-nagar-bangalore-10575",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "5938",
      name: "Burger King",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      locality: "Tasker Town",
      areaName: "Shivaji Nagar",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "5938",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3400,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3400,
      },
      parentId: "166",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 2.8,
        serviceability: "SERVICEABLE",
        slaString: "28 mins",
        lastMileTravelString: "2.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-18 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
        },
        freedelMessage: "FREE DELIVERY",
        badgeType: "BADGE_TYPE_ONE_LITE",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/burger-king-tasker-town-shivaji-nagar-bangalore-5938",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "347868",
      name: "KFC",
      cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
      locality: "Cunnigham road",
      areaName: "Vasanth Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      avgRating: 4,
      feeDetails: {
        restaurantId: "347868",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 5100,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 5100,
      },
      parentId: "547",
      avgRatingString: "4.0",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "24 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-18 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
        },
        freedelMessage: "FREE DELIVERY",
        badgeType: "BADGE_TYPE_ONE_LITE",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/kfc-cunnigham-road-vasanth-nagar-bangalore-347868",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "43836",
      name: "McDonald's",
      cloudinaryImageId: "bb7ae131544c7d37e10fc5faf76f09d6",
      locality: "MG Road",
      areaName: "Ashok Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "43836",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3400,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3400,
      },
      parentId: "630",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 1.7,
        serviceability: "SERVICEABLE",
        slaString: "22 mins",
        lastMileTravelString: "1.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-18 02:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
        },
        freedelMessage: "FREE DELIVERY",
        badgeType: "BADGE_TYPE_ONE_LITE",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/mcdonalds-mg-road-ashok-nagar-bangalore-43836",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "30531",
      name: "Hotel Empire",
      cloudinaryImageId: "qltgnkyywuo5gmnpqzbm",
      locality: "Brigade Road",
      areaName: "Church Street",
      costForTwo: "₹450 for two",
      cuisines: ["North Indian", "Kebabs", "Biryani"],
      avgRating: 4.4,
      feeDetails: {
        restaurantId: "30531",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3400,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3400,
      },
      parentId: "475",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 2.1,
        serviceability: "SERVICEABLE",
        slaString: "27 mins",
        lastMileTravelString: "2.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-18 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
        },
        freedelMessage: "FREE DELIVERY",
        badgeType: "BADGE_TYPE_ONE_LITE",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/hotel-empire-brigade-road-church-street-bangalore-30531",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "393107",
      name: "EatFit",
      cloudinaryImageId: "6126c9b45de2cb222405c1af8a321e74",
      locality: "Ali Asker Road",
      areaName: "Cunningham Road",
      costForTwo: "₹270 for two",
      cuisines: [
        "Chinese",
        "Healthy Food",
        "Tandoor",
        "Pizzas",
        "North Indian",
        "Thalis",
        "Biryani",
      ],
      avgRating: 4.4,
      feeDetails: {
        restaurantId: "393107",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4400,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4400,
      },
      parentId: "76139",
      avgRatingString: "4.4",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "23 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-17 23:59:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "brand",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "brand",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹159",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
        },
        freedelMessage: "FREE DELIVERY",
        badgeType: "BADGE_TYPE_ONE_LITE",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/eatfit-ali-asker-road-cunningham-road-bangalore-393107",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "8766",
      name: "Beijing Bites",
      cloudinaryImageId: "ca0eb08d0635fd6da2e5a480fec897d0",
      locality: "Richmond Town",
      areaName: "Richmond Town",
      costForTwo: "₹450 for two",
      cuisines: ["Chinese"],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "8766",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3900,
      },
      parentId: "103",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "24 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-18 00:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
        },
        freedelMessage: "FREE DELIVERY",
        badgeType: "BADGE_TYPE_ONE_LITE",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/beijing-bites-richmond-town-bangalore-8766",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "396746",
      name: "Sweet Truth - Cake and Desserts",
      cloudinaryImageId: "f548f6063ffb6f64adddc26875c2aff2",
      locality: "Residency Road",
      areaName: "Shantinagar",
      costForTwo: "₹450 for two",
      cuisines: ["Snacks", "Bakery", "Desserts", "Beverages"],
      avgRating: 4.5,
      feeDetails: {
        restaurantId: "396746",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3900,
      },
      parentId: "4444",
      avgRatingString: "4.5",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 2.5,
        serviceability: "SERVICEABLE",
        slaString: "24 mins",
        lastMileTravelString: "2.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-17 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹110",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
        },
        freedelMessage: "FREE DELIVERY",
        badgeType: "BADGE_TYPE_ONE_LITE",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/sweet-truth-cake-and-desserts-residency-road-shantinagar-bangalore-396746",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "292664",
      name: "Kwality Walls Frozen Dessert and Ice Cream Shop",
      cloudinaryImageId: "o9vbz7tdbkav0gzdv4yk",
      locality: "3rd block",
      areaName: "Rajajinagar",
      costForTwo: "₹300 for two",
      cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
      avgRating: 4.6,
      veg: true,
      feeDetails: {
        restaurantId: "292664",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 5400,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 5400,
      },
      parentId: "582",
      avgRatingString: "4.6",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 5.9,
        serviceability: "SERVICEABLE",
        slaString: "29 mins",
        lastMileTravelString: "5.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-17 22:06:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹399",
        discountTag: "FLAT DEAL",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
        },
        freedelMessage: "FREE DELIVERY",
        badgeType: "BADGE_TYPE_ONE_LITE",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-3rd-block-rajajinagar-bangalore-292664",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "25282",
      name: "Baskin Robbins - Ice Cream Desserts",
      cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
      locality: "Millars Road",
      areaName: "Vasanth Nagar",
      costForTwo: "₹263 for two",
      cuisines: ["Desserts"],
      avgRating: 4.5,
      veg: true,
      feeDetails: {
        restaurantId: "25282",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 5100,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 5100,
      },
      parentId: "5588",
      avgRatingString: "4.5",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "23 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-18 00:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
        },
        freedelMessage: "FREE DELIVERY",
        badgeType: "BADGE_TYPE_ONE_LITE",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-millars-road-vasanth-nagar-bangalore-25282",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "396748",
      name: "The Good Bowl",
      cloudinaryImageId: "6e04be27387483a7c00444f8e8241108",
      locality: "Residency Road",
      areaName: "Shantinagar",
      costForTwo: "₹400 for two",
      cuisines: [
        "Biryani",
        "North Indian",
        "Pastas",
        "Punjabi",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.4,
      feeDetails: {
        restaurantId: "396748",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3400,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3400,
      },
      parentId: "7918",
      avgRatingString: "4.4",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 2.5,
        serviceability: "SERVICEABLE",
        slaString: "26 mins",
        lastMileTravelString: "2.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-17 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
        },
        freedelMessage: "FREE DELIVERY",
        badgeType: "BADGE_TYPE_ONE_LITE",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/the-good-bowl-residency-road-shantinagar-bangalore-396748",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "218495",
      name: "Polar Bear",
      cloudinaryImageId: "57262fe3839f0bff174f3d7e7cc8a2b4",
      locality: "Pulakeshinagar",
      areaName: "Frazer Town",
      costForTwo: "₹350 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.6,
      veg: true,
      feeDetails: {
        restaurantId: "218495",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4400,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4400,
      },
      parentId: "726",
      avgRatingString: "4.6",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 4.7,
        serviceability: "SERVICEABLE",
        slaString: "27 mins",
        lastMileTravelString: "4.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-18 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
        },
        freedelMessage: "FREE DELIVERY",
        badgeType: "BADGE_TYPE_ONE_LITE",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/polar-bear-pulakeshinagar-frazer-town-bangalore-218495",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "29784",
      name: "CakeZone",
      cloudinaryImageId: "fc43011c7623957c8c4e3588a1e6ba21",
      locality: "Hoysala Nagar",
      areaName: "Indira Nagar",
      costForTwo: "₹200 for two",
      cuisines: ["Bakery", "Desserts", "Sweets", "Ice Cream"],
      avgRating: 4.4,
      feeDetails: {
        restaurantId: "29784",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 6100,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 6100,
      },
      parentId: "7003",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "32 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-17 23:59:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
        },
        freedelMessage: "FREE DELIVERY",
        badgeType: "BADGE_TYPE_ONE_LITE",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/cakezone-hoysala-nagar-indira-nagar-bangalore-29784",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "16073",
      name: "California Burrito",
      cloudinaryImageId: "27238ee4292d42c7b705f2ce8671ff80",
      locality: "Malleshwaram",
      areaName: "Malleshwaram",
      costForTwo: "₹250 for two",
      cuisines: [
        "Mexican",
        "American",
        "Salads",
        "Continental",
        "Keto",
        "Healthy Food",
      ],
      avgRating: 4.7,
      feeDetails: {
        restaurantId: "16073",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 5400,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 5400,
      },
      parentId: "1252",
      avgRatingString: "4.7",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 40,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "40 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-17 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
        },
        freedelMessage: "FREE DELIVERY",
        badgeType: "BADGE_TYPE_ONE_LITE",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/california-burrito-malleshwaram-bangalore-16073",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "102334",
      name: "Dindigul Thalappakatti",
      cloudinaryImageId: "ogidjgqgh5w4otvuiipj",
      locality: "Mg Road",
      areaName: "MG Road",
      costForTwo: "₹650 for two",
      cuisines: [
        "Biryani",
        "Barbecue",
        "South Indian",
        "Chinese",
        "North Indian",
      ],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "102334",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 5100,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 5100,
      },
      parentId: "332",
      avgRatingString: "4.2",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "26 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-17 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
        },
        freedelMessage: "FREE DELIVERY",
        badgeType: "BADGE_TYPE_ONE_LITE",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/dindigul-thalappakatti-mg-road-bangalore-102334",
      type: "WEBLINK",
    },
  },
];

// destructing on the fly
// const RestaurantCard = ({name,items}) => {
const RestaurantCard = (props) => {
  //destructing of objects
  const { resData } = props;
  const { deliveryTime } = resData?.info.sla;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } =
    resData?.info;
  return (
    <div className="res-card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <div className="res-content">
        <h3>{name}</h3>
        <h4>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            role="img"
            aria-hidden="true"
            strokecolor="rgba(2, 6, 12, 0.92)"
            fillcolor="rgba(2, 6, 12, 0.92)"
          >
            <circle cx="10" cy="10" r="9" fill="rgba(172,185,55,1)"></circle>
            <path
              d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
              fill="white"
            ></path>
            <defs>
              <linearGradient
                id="StoreRating20_svg__paint0_linear_32982_71567"
                x1="10"
                y1="1"
                x2="10"
                y2="19"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#21973B"></stop>
                <stop offset="1" stopColor="#128540"></stop>
              </linearGradient>
            </defs>
          </svg>
          {avgRating}
        </h4>
        <h4>{deliveryTime} mins</h4>
        <h4>{cuisines.join(", ")}</h4>
        <h4> {costForTwo}</h4>
      </div>
    </div>
  );
};

//no key(not acceptable) <<<<<<< index as key <<<<<<< unique key(best Practice)
const Body = () => {
  return (
    <div className="container main">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="container">
      <h1>Footer</h1>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

// const heading = React.createElement(
//   //React.createElement - creates js object not an element - render will convert object to element
//   "h1",
//   { id: "mainHeading" }, //props - attributes
//   "Hello World from React!" //children
// );

/** create
 * <div id="parent">
 *       <div id="child">
 *           <h1>Im an H1 tag</h1> // two siblings will go under array
 *           <h2>Im an H2 tag</h2>
 *       <div>
 *      <div id="child2">
 *           <h1>Im an H1 tag</h1> // two siblings will go under array
 *           <h2>Im an H2 tag</h2>
 *       <div>
 * </div>
 */

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "Im an H1 tag from React"),
//     React.createElement("h2", {}, "Im an H2 tag from React"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "Im an H1 tag"),
//     React.createElement("h2", {}, "Im an H2 tag"),
//   ]),
// ]);

//The above structure looks ugly that whys jsx came into picture

//console.log("Heading", parent); //object

// JSX - is not HTML inside JS
//     - Looks HTML/XML Like syntax
// const jsxHeading = (
//   <h1 className="heading" tabIndex="5" id="mainHeading">
//     This is from JSX
//   </h1>
// );
// console.log(jsxHeading);

// React Components - 2.Functional Component - always start with CaptialLetter - function returning ReactElement / JSX is functional component

//component with return
// const Title = () => {
//   return <h2>2. React Functional Component</h2>;
// };

// const title = <h2>Types of cmponent</h2>;
//component without return
//component composition - Composing two components within one another

// const number = 2;
// const Header = () => (
//   <div id="container">
//     <h1 className="heading">React</h1>
//     {title}
//     {/* {} - run any js code  */}
//     {number}
//     <Title></Title>
//     <Title />
//     {Title()}
//   </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// render ReactElement
//root.render(jsxHeading); // render - responsible for converting objects into html tags

// render Component
// root.render(<Header />);
