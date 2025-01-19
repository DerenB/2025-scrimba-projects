import CampImage from "../src/assets/camping.jpg";
import RenFairImage from "../src/assets/fair.jpg";
import GreenDayImage from "../src/assets/concert.jpg";
import OrchardImage from "../src/assets/pumpkin.jpg";

export default [
    {
        id: 1,
        image: {
            src: CampImage,
            alt: "Campground Tents"
        },
        mapUrl: "https://maps.app.goo.gl/kH8pH5BgiSu4vmU59",
        city: "Traverse City",
        title: "Campground",
        dates: "24 Aug, 2024 - 26 Aug, 2024",
        text: "Went camping in Traverse City, Michigan. Stayed two nights, slept in the truck the first night and in a tent the second night. The campground is called Keith J. Charters Traverse City State Park. Established in 1920, the part is named after Keith J. Charters, a local conservationist and hunter."
    },
    {
        id: 2,
        image: {
            src: RenFairImage,
            alt: "Ren Fair"
        },
        mapUrl: "https://maps.app.goo.gl/QP6Do3sSUbfUWsVy7",
        city: "Holly",
        title: "Renaissance Fair",
        dates: "02 Sept, 2024",
        text: "First time at the Renaissance Fair. It was a lot of fun. The fair is held in Holly, Michigan. The fair is a recreation of a 16th century English village. There are many activities to do, such as archery, jousting, and shopping for hand-made crafts."
    },
    {
        id: 3,
        image: {
            src: GreenDayImage,
            alt: "Green Day Concert"
        },
        mapUrl: "https://maps.app.goo.gl/p3cyDmpQatha4AVY8",
        city: "Detroit",
        title: "Green Day Concert",
        dates: "04 Sept, 2024",
        text: "Went to the Green Day concert in Detroit. The concert was held at the Comerica Park. The band played many of their hits, such as 'Basket Case', 'American Idiot', and 'Good Riddance'."
    },
    {
        id: 4,
        image: {
            src: OrchardImage,
            alt: "Orchard"
        },
        mapUrl: "https://maps.app.goo.gl/D7j2uBcUeRA8eapy8",
        city: "Plymouth",
        title: "Apple Orchard",
        date: "19 Oct, 2024",
        text: "Apple picking at the Plymouth Orchards. The orchard has been around since 1977. The orchard has many varieties of apples, such as Honeycrisp, Gala, and Macintosh. The orchard also has a cider mill that makes fresh cider."
    }
]
