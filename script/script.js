$(document).ready(function(){
    $('.js-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  });


  function carregarMelissa() {
    window.location.href = 'https://www.melissa.com.br/?gclid=CjwKCAjwvJyjBhApEiwAWz2nLRerUvTogDholUIO9SlYTLqU_iyOWS7ens1LsNmS5EpxEg-qAanqPhoCiKAQAvD_BwE';
  }

  function carregarDior() {
    window.location.href = 'https://www.dior.com/pt_br/beauty/maquiagem/novidades-maquiagem';
  }

  function carregarCarolinaHerrera() {
    window.location.href = 'https://www.carolinaherrera.com/br/pt/?utm_source=adwords&utm_medium=paid_search_brand&utm_content=conversion&utm_bu=fragrance&utm_mkbr=brd_bra&utm_campaign=CH_BRA_Brand_PRT_ALL_Global_CONV&utm_term=carolina%20herrera&utm_clicktype=main_ad&gclid=CjwKCAjwvJyjBhApEiwAWz2nLSWkwJoZnLhyKONfSCsiiMGuXuAmTOPdBOFpBO2NiOEc9AVO3YZgaBoCIJ0QAvD_BwE';
  }