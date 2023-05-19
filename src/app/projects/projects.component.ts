import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects: any = [
    {
      name: 'The Coffee Shop',
      link: 'https://thecoffeeshopfs.netlify.app/',
      github: 'https://github.com/frknsprnl/coffee-shop',
      tech: ['ReactJS', 'NodeJS', 'Tailwind', 'MongoDB', 'Vite'],
      desc: 'A FullStack e-commerce app. You can register, login, add products to cart, simulate payment, edit your profile, read the blogs etc.',
      img: 'thecoffeeshop.png',
    },
    {
      name: 'GoldSol Türkiye',
      link: 'https://www.goldsol.com.tr/',
      tech: ['ReactJS', 'Tailwind', 'NextJS'],
      desc: 'Corporate website project for GoldSol Türkiye A.Ş, TR/ENG translate',
      img: 'goldsol.png',
    },
    {
      name: 'Eskişehir Nobetci Eczane',
      link: 'https://eskisehirnobetcieczane.netlify.app/',
      tech: ['ReactJS', 'Tailwind', 'Vite', 'Scraper API'],
      desc: 'An hourly updated and real-time data-based on-call pharmacy project for Eskisehir.',
      img: 'eskisehirnobetcieczane.png',
    },
    {
      name: 'SmartEdu',
      link: 'https://smartedu.glitch.me/',
      tech: ['NodeJS', 'Express', 'MVC', 'MongoDB', 'EJS'],
      desc: 'Edu Portal App project based on Node JS',
      img: 'smartedu.png',
    },
    {
      name: 'React Weather App',
      link: 'https://reactweatherappfs.netlify.app/',
      tech: ['React', 'Context API', 'Chakra UI'],
      desc: 'An Weather Forecast project',
      img: 'reactweatherapp.png',
    },
    {
      name: 'Instagram',
      link: 'https://instagramclonefs.netlify.app/',
      tech: ['HTML', 'CSS'],
      desc: 'Instagram Homepage Clone project',
      img: 'instagram.png',
    },
    {
      name: 'LinkedIn',
      link: 'https://linkedinclonefs.netlify.app/',
      tech: ['HTML', 'CSS'],
      desc: 'LinkedIn Homepage Clone project',
      img: 'linkedin.png',
    },
    {
      name: 'Kodluyoruz',
      link: 'https://kodluyoruzclone.netlify.app/',
      tech: ['HTML', 'CSS'],
      desc: 'Kodluyoruz Homepage Clone project',
      img: 'kodluyoruz.png',
    },
  ];
}
