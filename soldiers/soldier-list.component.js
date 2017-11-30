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
		  imageUrl: 'img\\soldiers\\soldier_portrait.JPG'
        }, 
		{
		  surname: 'Jakub',
          name: 'Zając',
          age: '23',
		  imageUrl: 'img\\soldiers\\soldier_portrait.JPG'
        }, 
		{
		  surname: 'Marcin',
          name: 'Panek',
          age: '24',
		  imageUrl: 'img\\soldiers\\soldier_portrait.JPG'
        },
		{
		  surname: 'Leszek',
          name: 'Platek',
          age: '222',
		  imageUrl: 'img\\soldiers\\soldier_portrait.JPG'
        },
		{
		  surname: 'Maciej',
          name: 'Muras',
          age: '24',
		  imageUrl: 'img\\soldiers\\soldier_portrait.JPG'
        },
		{
		  surname: 'Godwin',
          name: 'Edwin',
          age: '28',
		  imageUrl: 'img\\soldiers\\soldier_portrait.JPG'
        },
		{
		  surname: 'Sebastian',
          name: 'E. Paciorek',
          age: '8',
		  imageUrl: 'img\\soldiers\\soldier_portrait.JPG'
        },
		{
		  surname: 'Witali',
          name: 'Klieczko',
          age: '45',
		  imageUrl: 'img\\soldiers\\soldier_portrait.JPG'
        },
		{
		  surname: 'Hokus',
          name: 'Maryba',
          age: '24',
		  imageUrl: 'img\\soldiers\\soldier_portrait.JPG'
        },
		{
		  surname: 'Edek',
          name: 'Zgredek',
          age: '25',
		  imageUrl: 'img\\soldiers\\soldier_portrait.JPG'
        },
		{
		  surname: 'Kapitan',
          name: 'Morgan',
          age: '999',
		  imageUrl: 'img\\soldiers\\soldier_portrait.JPG'
        }
		
      ];
    }
  });