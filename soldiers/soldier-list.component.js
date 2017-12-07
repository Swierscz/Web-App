angular.
  module('soldierList').
  component('soldierList', {
    templateUrl: 'soldiers/soldier-list.template.html',
	
    controller: function SoldierListController() {
      this.soldiers = [
          {
		  surname: 'Jakub',
          name: 'Sierżęga',
          age: '22',
          rank: 'st. szer.',
          function: 'działonowy-operator',
		  imageUrl: 'img\\soldiers\\soldier_portrait.JPG'
        }, 
		{
		  surname: 'Jakub',
          name: 'Zając',
          age: '23',
            rank: 'st. szer.',
            function: 'działonowy-operator',
		  imageUrl: 'img\\soldiers\\soldier_portrait.JPG'
        }, 
		{
		  surname: 'Marcin',
          name: 'Panek',
          age: '24',
            rank: 'st. szer.',
            function: 'działonowy-operator',
		  imageUrl: 'img\\soldiers\\soldier_portrait.JPG'
        },
		{
		  surname: 'Leszek',
          name: 'Platek',
            rank: 'st. szer.',
            function: 'działonowy-operator',
          age: '222',
		  imageUrl: 'img\\soldiers\\soldier_portrait.JPG'
        },
		{
		  surname: 'Maciej',
          name: 'Muras',
          age: '24',
            rank: 'st. szer.',
            function: 'działonowy-operator',
		  imageUrl: 'img\\soldiers\\soldier_portrait.JPG'
        },
		{
		  surname: 'Godwin',
          name: 'Edwin',
          age: '28',          rank: 'st. szer.',
            function: 'działonowy-operator',
		  imageUrl: 'img\\soldiers\\soldier_portrait.JPG'
        },
		{
		  surname: 'Sebastian',
          name: 'E. Paciorek',
          age: '8',          rank: 'st. szer.',
            function: 'działonowy-operator',
		  imageUrl: 'img\\soldiers\\soldier_portrait.JPG'
        },
		{
		  surname: 'Witali',
          name: 'Klieczko',
          age: '45',          rank: 'st. szer.',
            function: 'działonowy-operator',
		  imageUrl: 'img\\soldiers\\soldier_portrait.JPG'
        },
		{
		  surname: 'Hokus',
          name: 'Maryba',
          age: '24',          rank: 'st. szer.',
            function: 'działonowy-operator',
		  imageUrl: 'img\\soldiers\\soldier_portrait.JPG'
        },
		{
		  surname: 'Edek',
          name: 'Zgredek',
          age: '25',          rank: 'st. szer.',
            function: 'działonowy-operator',
		  imageUrl: 'img\\soldiers\\soldier_portrait.JPG'
        },
		{
		  surname: 'Kapitan',
          name: 'Morgan',
          age: '999',          rank: 'st. szer.',
            function: 'działonowy-operator',
		  imageUrl: 'img\\soldiers\\soldier_portrait.JPG'
        }
      ];

    }
  });