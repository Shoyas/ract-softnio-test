export const products = [
    {
      id: 1,
      name: "Classy Modern Smart Watch",
      reviews: 2,
      rating: 3.5,
      type: "Watch",
      modelNumber: "Forerunner 290XT",
      details:
        "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teaching.",
      colors: [
        {
          id: 101,
          color: "Purple",
          image: "/images/Purple.jpg",
          default: true,
        },
        {
          id: 102,
          color: "Cyan",
          image: "/images/Cyan.jpg",
          default: false,
        },
        {
          id: 103,
          color: "Teal",
          image: "/images/Deep-Teal.jpg",
          default: false,
        },
        {
          id: 104,
          color: "Black",
          image: "/images/Black.jpg",
          default: false,
        },
      ],
      sizes: [
        {
          id: 201,
          size: "S",
          originalPrice: 89,
          salePrice: 69,
          default: true,
        },
        {
          id: 202,
          size: "M",
          originalPrice: 99,
          salePrice: 79,
          default: false,
        },
        {
          id: 203,
          size: "L",
          originalPrice: 109,
          salePrice: 89,
          default: false,
        },
        {
          id: 204,
          size: "XL",
          originalPrice: 119,
          salePrice: 99,
          default: false,
        },
      ],
    },
  ];
  