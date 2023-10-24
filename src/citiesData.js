const cities = [
    { name: 'Madrid', country: 'Spain', image: 'https://media.architecturaldigest.com/photos/57ad893acfc37bc171ad8082/1:1/w_3424,h_3424,c_limit/madrid-travel-guide.jpg' },
    { name: 'Barcelona', country: 'Spain', image: 'https://api.time.com/wp-content/uploads/2023/03/Worlds-Greatest-Places-Barcelona-Spain.jpg' },
    { name: 'Sevilia', country: 'Spain', image: 'https://www.spain.info/.content/imagenes/cabeceras-grandes/andalucia/vista-sevilla-s1035089014.jpg' },
    { name: 'Almirah', country: 'Spain', image: 'https://media.gettyimages.com/id/505306758/photo/white-houses-lubrin-almeria-andalucia-southern-spain.jpg?s=612x612&w=gi&k=20&c=W7d0zcWHheTgRVirmVkIsk7nBeepc4rrkHVr2wq32ZQ=' },
    { name: 'Espaniol', country: 'Spain', image: 'https://www.thisisdurham.com/imageresizer/?image=%2Fdmsimgs%2FSpanish-City_626167252.jpg&action=ProductDetail' },
    { name: 'Girona', country: 'Spain', image: 'https://cdn.britannica.com/35/190035-050-C44235DF/Girona-Spain-Onar-River.jpg' },
    { name: 'Osasona', country: 'Spain', image: 'https://www.visitnavarra.es/o/adaptive-media/image/24840073/turismo-navarra-1400xauto/cabecera%20(2).jpg' },
    { name: 'Majorca', country: 'Spain', image: 'https://www.iberian-escapes.com/images/majorca-spain.jpg' },
    { name: 'levante', country: 'Spain', image: 'https://assets.onthebeach.co.uk/m/4ca71069e11d645d/Small-destination_images-geoloc_destination-8485facf-aa58-4bfe-a4a2-40bf966124dd' },
    // { name: 'Bilbao', country: 'Spain', image: 'https://curatetrips.com/wp-content/uploads/2023/04/bilbao-modern-city-curatetrips.jpg' },

  
    { name: 'Roma', country: 'Italy', image: 'https://www.italia.it/content/dam/tdh/en/interests/lazio/roma/roma-in-48-ore/media/20220127150143-colosseo-roma-lazio-shutterstock-756032350.jpg' },
    { name: 'Milan', country: 'Italy', image: 'https://media.istockphoto.com/id/1059724614/photo/milan-cathedral-on-sunrise-italy.jpg?s=612x612&w=0&k=20&c=w7dD72xvRNz8SF1bwxNFkgBLzy6QNqXFzgry5WCWsXY='},
    { name: 'Atalanta', country: 'Italy', image: 'https://www.meganstarr.com/wp-content/uploads/2019/07/Stadio_Bergamo.jpg'},
    { name: 'Genoa', country: 'Italy', image: 'https://a.cdn-hotels.com/gdcs/production49/d1536/974d5bb2-79bb-44fb-94b5-95db4c37e207.jpg'},
    { name: 'Juventus', country: 'Italy', image: 'https://ds-images.bolavip.com/news/image/740/416/?src=https://images.worldsoccertalk.com/webp/WST_20210502_WST_332830_53c69e019df4f7681cb9e7d34279fecc064b4996.webp'},
    { name: 'Palermo', country: 'Italy', image: 'https://www.globalpsa.com/wp-content/uploads/190128-Palermo-Sicily-Italy-IMG00-1200x675.jpg'},
    { name: 'Bologna', country: 'Italy', image: 'https://assets.vogue.com/photos/633eefaf4f85bd18e8ffbc47/master/w_2560%2Cc_limit/GettyImages-690073036.jpg'},
    { name: 'Turin', country: 'Italy', image: 'https://media.cntraveler.com/photos/55db5f06c47ae13868aeea72/16:9/w_2560%2Cc_limit/turin-italy-cr-getty.jpg'},
    { name: 'Catania', country: 'Italy', image: 'https://www.italia.it/content/dam/tdh/en/interests/sicilia/catania/catania/media/20210624132554-cattedrale-di-sant-agata-catania-sicilia-gettyimages-467663396.jpg'},
    // { name: 'venice', country: 'Italy', image: 'https://media.istockphoto.com/id/1388018793/photo/grand-canal-in-venice.jpg?s=612x612&w=0&k=20&c=uDUrctquPNUPzlpNLwTkJIkc1Gig0aUWJknF6FrqxJE='},



        { name: 'Paris', country: 'France', image: 'https://media.cntraveler.com/photos/63e6b44a71cc5230e7788d4f/1:1/w_3571,h_3571,c_limit/Paris_GettyImages-601762971.jpg' },
        { name: 'Marseille', country: 'France', image: 'https://www.marseille-tourisme.com/app/uploads/marseille-tourisme/2020/07/thumbs/notre-dame-de-la-garde-fotolia-1920x960.jpg' },
        { name: 'Lyon', country: 'France', image: 'https://media.timeout.com/images/105740419/750/422/image.jpg' },
        { name: 'Toulouse', country: 'France', image: 'https://www.savoredjourneys.com/wp-content/uploads/2019/10/toulouse-view-water.jpg'},
        { name: 'Nice', country: 'France', image: 'https://lp-cms-production.imgix.net/2023-02/3cb45f6e59190e8213ce0a35394d0e11-nice.jpg?w=600&h=400'},
        { name: 'Montpellier', country: 'France', image: 'https://lp-cms-production.imgix.net/2023-04/GettyImages-978992870.jpg?auto=format&w=1440&h=810&fit=crop&q=75' },
        { name: 'Strasbourg', country: 'France', image: 'https://images.winalist.com/blog/wp-content/uploads/2021/11/26143925/AdobeStock_118000297.jpeg' },
        { name: 'Lille', country: 'France', image: 'https://lp-cms-production.imgix.net/2019-06/GettyImages-488983909_full.jpg' },
        { name: 'Nantes', country: 'France', image: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Panorama_depuis_Butte_Sainte-Anne.jpg' },
        // { name: 'Rennes', country: 'France', image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Place_de_la_Mairie%2C_Rennes%2C_France.jpg' },


      

      
  ];
  
  export default cities;
  