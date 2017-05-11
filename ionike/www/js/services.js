angular.module('starter.services', [])

.factory('NikeSb', function() {
  // Might use a resource here that returns a JSON array

	var nikeSb = [
		{id:1, name:'Stefan Janoski Hyper',img:'img/sjhyper.png', price:89},
		{id:2, name:'Stafan Janoski iD', img:'img/sjid.png',price: 74},
		{id:3, name:'Stefan Janoski Max',img:'img/sjmax.png', price: 90},
		{id:4, name:'Stefan Janoski Slips', img:'img/sjslip.png', price: 120}
	];

  return {
    all: function() {
      return nikeSb;
    },

    get: function(nikeSbId) {
      for (var i = 0; i < nikeSb.length; i++) {
        if (nikeSb[i].id === parseInt(nikeSbId)) {
          return nikeSb[i];
        }
      }
      return null;
    }
  };
})

.factory('NikeMessage', function() {
  // Might use a resource here that returns a JSON array

	var nikeMessages = [
		{id:5, title:'Nike+',img:'img/nike+.png', messageTitle:'Welcome To Nike', messageP:'All You Need To Get Started',img2:'img/nikeicon.png'},
		{id:6, title:'Nike Sb', img:'img/nike+.png',messageTitle: 'NikeSb', messageP:'Check out our newest Sbs series shoes', img2:'http://images3.nike.com/is/image/DotCom/PDP_HERO/855922_800_C_PREM/sb-lunar-stefan-janoski-hyperfeel-xt-mens-skateboarding-shoe.jpg'},
		{id:7, title:'Nike Lifestyle',img:'img/nike+.png', messageTitle: 'Lifestyle', messageP: 'Newest lifestyle hurachis',img2:'http://www.solarforce.fr/solarforce/more/nike-air-huarache-low-air-huarache-noir-et-blanche-femme-nike-huarache-ultra-pas-cher-x1dhl_2.jpg'},
		{id: 8, title:'Nike Training', img:'img/nike+.png', messageTitle: 'Training + Gym', messageP: 'Nike Met Cons are in start training',img2:'http://img.wennermedia.com/article-leads-horizontal/mj-618_348_nike-just-released-the-ultimate-crossfit-shoe.jpg'}
	];

  return {
    all: function() {
      return nikeMessages;
    },
    remove: function(message) {
      nikeMessages.splice(nikeMessages.indexOf(message), 1);
    },
		get: function(messageId) {
      for (var i = 0; i < nikeMessages.length; i++) {
        if (nikeMessages[i].id === parseInt(messageId)) {
          return nikeMessages[i];
        }
      }
      return null;
    }
  };
});
