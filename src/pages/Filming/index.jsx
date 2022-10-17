import React, { useEffect } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import HeroSection from '../../components/HeroSection'
import MovieCard from '../../components/MovieCard'
import Button from '../../components/UI/Button'
import WeddingSection from '../../components/WeddingSection'
import Logo from '../../components/images/tvwhite.png'
// import MainVideo from '../../components/Videos&audios/THE FISHER MAN MAKING.mp4'
// import video from '../../components/Videos&audios/peace final mhd.mp4'
// import Video from '../../components/Video'
// import video1 from '../../components/Videos&audios/Na So - Wyllz master HD.mp4'
// import video2 from '../../components/Videos&audios/Utibe Ima - Wyllz master HD.mp4'
// import Movie1 from '../../components/Videos&audios/main montage new.mp4'
// import Movie2 from '../../components/Videos&audios/You are watching cor 1.mp4'
// import Movie3 from '../../components/Videos&audios/basumoh.mp4'
// import Movie4 from '../../components/Videos&audios/blow pos.mp4'
// import Movie5 from '../../components/Videos&audios/Ketiano.mp4'
// import Movie6 from '../../components/Videos&audios/LATONNE SIGNATURES.mp4'
// import Movie7 from '../../components/Videos&audios/Westgate fhd.mp4'
// import Movie8 from '../../components/Videos&audios/made in aks.mp4'
import Aos from "aos";

import "aos/dist/aos.css";
import './Filming.css'

const Filming = () => {

  useEffect(function () {
    Aos.init({ duration: 1000 });
    window.scrollTo(0,0);
  }, []);

  const movies = [
    {
      id: 1,
      img: 'https://c4.wallpaperflare.com/wallpaper/502/419/818/the-dark-knight-batman-movies-wallpaper-preview.jpg',
      name: 'Inside Women',
      rating: 4.8,
      date: 2018,
      duration: '1hr 21min',
      category: 'Action',
      desc: 'That is, until she plays her first game of chess. While working as a handyman in an old house, an ex-convict discovers countless horrors revolving around a town’s twisted secrets.'
    },
    {
      id: 2,
      img: 'http://digiflex.themezinho.net/wp-content/uploads/2020/12/slide03.jpg',
      name: 'Future Hell',
      rating: 8.6,
      date: 2020,
      duration: '1hr 33min',
      category: 'Action - Adventure - Comedy - Romance',
      desc: "Based on Edgar Allan Poe's classic bone-chilling tale, this bloody story will have you sleeping with the lights on for years to come. Nine year-old orphan"
    },
    {
      id: 3,
      img: 'http://digiflex.themezinho.net/wp-content/uploads/2020/12/slide02.jpg',
      name: 'Soviet : The Cold War',
      rating: 7.3,
      date: 2019,
      duration: '1hr 45min',
      category: 'War',
      desc: 'Her senses grow sharper, her thinking clearer, and for the first time in her life she feels herself fully in control. By the'
    },
  ];

  const music = [
    // {
    //   id: 1,
    //   src: video1,
    //   name: 'Na So - Wyllz master HD',
    //   rating: 7.1,
    //   type: 'Music Videos'
    // },
    // {
    //   id: 2,
    //   src: video2,
    //   name: 'Utibe Ima - Wyllz master HD',
    //   rating: 7.1,
    //   type: 'Music Videos'
    // },
    // {
    //   id: 3,
    //   src: video,
    //   name: 'peace final mhd',
    //   rating: 7.1,
    //   type: 'Music Videos'
    // }
  ];

  const allMovies = [
    // {
    //   id: 1,
    //   src: MainVideo,
    //   name: 'THE FISHER MAN MAKING',
    //   rating: 4.8,
    //   date: 2018,
    //   duration: '1hr 21min',
    //   category: 'The FisherMan - BTS',
    // },
    {
      id: 2,
      src: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-videos%2Fmain%20montage%20new.mp4?alt=media&token=04b268f9-98dc-4b30-ad3d-e6025b316aa6',
      name: 'Montage',
      rating: 4.8,
      date: 2018,
      duration: '1hr 21min',
      category: 'TV Shows',
    },
    {
      id: 3,
      src: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-videos%2FYou%20are%20watching%20cor%201.mp4?alt=media&token=7dacf2ef-9ef3-4f3f-956a-14bf69ebdf8b',
      name: 'UMO ENO TV',
      rating: 4.8,
      date: 2018,
      duration: '1hr 21min',
      category: 'TV Shows',
    },
    {
      id: 4,
      src: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-videos%2Fbasumoh.mp4?alt=media&token=a2ac3d05-b3ae-4aef-b00b-7fa24bfb9779',
      name: 'Basumoh',
      rating: 4.8,
      date: 2018,
      duration: '1hr 21min',
      category: 'Video Ads',
    },
    {
      id: 5,
      src: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-videos%2Fblow%20pos.mp4?alt=media&token=6fc51ba2-ac74-47ba-adc5-c22a6565dad4',
      name: 'Blow Pos',
      rating: 4.8,
      date: 2018,
      duration: '1hr 21min',
      category: 'Video Ads',
    },
    {
      id: 6,
      src: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-videos%2FKetiano.mp4?alt=media&token=fd57b22b-b64e-4f3d-9bb7-c03eb9bf1455',
      name: 'Ketiano',
      rating: 4.8,
      date: 2018,
      duration: '1hr 21min',
      category: 'Video Ads',
    },
    {
      id: 7,
      src: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-videos%2FLATONNE%20SIGNATURES.mp4?alt=media&token=aee320bb-a677-4722-9ea4-cb9e6986eb48',
      name: 'LATONNE SIGNATURES',
      rating: 4.8,
      date: 2018,
      duration: '1hr 21min',
      category: 'Video Ads',
    },
    // {
    //   id: 8,
    //   src: Movie7,
    //   name: 'Westgate fhd',
    //   rating: 4.8,
    //   date: 2018,
    //   duration: '1hr 21min',
    //   category: 'Video Ads',
    // },
    {
      id: 9,
      src: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-videos%2Fmade%20in%20aks.mp4?alt=media&token=4cedfc90-aea8-472b-a93b-af5ea0cda2eb',
      name: 'made in aks',
      rating: 4.8,
      date: 2018,
      duration: '1hr 21min',
      category: 'Video Ads',
    },
  ];

  const headerLinks = [
    {
      id: 1,
      text: 'Weddings',
      section: 'wedding' 
    },
    {
      id: 2,
      text: 'Music',
      section: 'music' 
    },
    {
      id: 3,
      text: 'Movies',
      section: 'movies' 
    }
  ];

  return (
    <div className='tv__page'>
      <Header page='tv' logo={Logo} links={headerLinks} />
      <HeroSection page='tv' data={movies} />
      <WeddingSection id='wedding' />
      <section className='filming__section movies' id='movies'>
        <div className="container">
          <h2 className='section__title tv'>Watch <span>Movies</span></h2>
          <div className="cards__container" data-aos="fade-up">
            {allMovies.map(m => (
              <MovieCard 
                key={m.id}
                video={m.src}
                name={m.name}
                rating={m.rating}
                date={m.date}
                category={m.category}
              />
            ))}
          </div>
          <Button page='tv'>Show All Movies</Button>
        </div>
      </section>  
      {/* <Video video={MainVideo} /> */}
      <section className='filming__section' id='music'>
        <div className="container">
          <h2 className='section__title tv'>Listen And Watch <span>Music</span></h2>
          <div className="cards__container" data-aos="fade-up">
            {music.map(m => (
              <MovieCard 
                key={m.id}
                video={m.src}
                name={m.name}
                rating={m.rating}
                type={m.type}
                music={true}
              />
            ))}
          </div>
          <Button page='tv'>Show All Music</Button>
        </div>
      </section>
      <Footer type='TV/FILM' links={headerLinks} />
    </div>
  )
}

export default Filming