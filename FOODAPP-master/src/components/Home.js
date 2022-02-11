//import react from "react";
import '../../src/home.css';
import { Carousel } from 'react-carousel-minimal';
import React from "react";


function Home() {
 const data = [
    {
      image: "https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/17/pizza.jpg",
      caption: "Pizza"
    },
    {
      image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/1/07/0/FNK_Pani-Puri_s4x3.jpg.rend.hgtvcom.616.462.suffix/1546894450909.jpeg",
      caption: "Pani Puri"
    },
    {
      image: "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p.jpg",
      caption: "Burger"
    },
    {
      image: "https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__700_0_0_0_auto.jpg",
      caption: "Masala Dosa"
    },
    {
      image: "https://cdn3.tmbi.com/toh/GoogleImagesPostCard/exps21585_THCA153054D10_15_4b.jpg",
      caption: "Dessert"
    },
    {
      image: "https://b.zmtcdn.com/data/pictures/chains/8/51828/b7ba665418e783fcd017225f6719fb79.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      caption: "Tacos"
    },
    {
      image: "https://static.toiimg.com/thumb/54308405.cms?imgsize=510571&width=800&height=800",
      caption: "Biryani"
    },
    {
      image: "https://www.shoutmecrunch.com/wp-content/uploads/2020/04/cooked-chiken-masala.jpg",
      caption: "Chicken Roast"
    },
    {
      image: "https://www.thespruceeats.com/thmb/CiSSB0skeoUB66WT-dApsN6Oksc=/3800x2137/smart/filters:no_upscale()/fluffy-waffles-recipe-995798-hero3-95ef22073f8a44bc91fa33a40000f63a.jpg",
      caption: "Waffles"
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="container">
      <div style={{ textAlign: "center" }}>
        <h2 style={{color:"white"}}>something</h2>
        <p style={{color:"white"}}>something</p>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
      
      <h1 className="header">BRINGING THE BEST FOOD AT YOUR FINGERTIPS</h1>
      <h1 className="linebreak">diudwciuc BRINGING THE BEST FOOD AT YOUR FINGERTIPS jdcwickh</h1>
      <p>Where real food and serious flavour are served in abundace</p>
      <p>Where culinary boundaries know no box.</p>
      <p>Where whole-hearted hospitality brings to life the art of gathering.</p>
      <p>And where feel good and taste go hand in hand</p>
    </div>
  );
}
export default Home;