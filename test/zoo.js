var assert = require('assert');

var Animal = require('../javascript/animal.js'),
    Zoo    = require('../javascript/zoo.js');

describe('Zoo', function(){

  describe('properties', function(){

    var zoo = new Zoo('Tokyo', 'Ueno');
    
    describe('location', function(){
      it('should have a location', function(){
        assert.equal(zoo.location, 'Tokyo');
      });
    });

    describe('name', function(){
      it('should have a name', function(){
        assert.equal(zoo.name, 'Ueno');
      });
    });

    describe('status', function(){
      it('should have a default status of "closed"', function(){
        assert.equal(zoo.status, 'closed');
      });
    });

    describe('animals', function(){
      it('should have an array of animals', function(){
        assert.equal(zoo.animals.constructor, Array);
      });

      it('should have a default value of empty array', function(){
        assert.equal(zoo.animals.length, 0);
      });
    });

  }); // properties

  describe('methods', function(){

    beforeEach(function() {
      var zoo  = new Zoo('Tokyo', 'Ueno');
      var lion = new Animal('lion', 'roar', 'Simba', 3);
      var pig  = new Animal('pig', 'oink', 'Porky', 2);
    });

    afterEach(function() {
      zoo  = null;
      lion = null;
      pig  = null;
    });

    describe('#isOpen()', function(){
      it('should return status of being opened', function(){
        assert.equal(zoo.isOpen(), false);
      });
    });

    describe('#open()', function(){
      it('should change status to open', function(){
        assert.equal(zoo.open(), true);
      });
    });

    describe('#addAnimal(animal)', function(){
      it('should not add an animal to animals if zoo is closed', function(){
        zoo.addAnimal(lion);

        assert.equal(zoo.animals.length, 0);
      });

      it('should add an animal to animals if zoo is open', function(){
        zoo.open();
        zoo.addAnimal(lion);

        assert.equal(zoo.animals.length, 1);
        assert.equal(zoo.animals[0].kind, 'lion');
      });


      it('should add instances of animals', function(){
        zoo.open();
        zoo.addAnimal(lion);

        assert.equal(zoo.animals.length, 1);
      });

      it('should not add instances of non-animals', function(){
        zoo.open();
        zoo.addAnimal('pineapple');

        assert.equal(zoo.animals.length, 0);
      });

      it('should not add duplicates', function(){
        zoo.open();
        zoo.addAnimal(pig);
        zoo.addAnimal(pig);

        assert.equal(zoo.animals.length, 1);
      });
    });
    
    describe('#removeAnimal(animal)', function(){
      it('should not removed an animal in animals if zoo is closed', function(){
        zoo.open();
        zoo.addAnimal(lion);
        zoo.addAnimal(pig);
        zoo.close();

        assert.equal(zoo.remove('lion').length, 2);
      });
      
      it('should remove an animal in animals if zoo is open', function(){
        zoo.open();
        zoo.addAnimal(lion);
        zoo.addAnimal(pig);

        assert.equal(zoo.remove('lion').length, 1);
        assert.equal(zoo.animals[0].kind, 'pig');
      });
    });
    
    describe('#changeLocation(location)', function(){
      it('should change location of a zoo', function(){
        assert.equal(zoo.location, 'Berlin');
      });
    });
    
    describe('#close()', function(){
      it('should change status to open', function(){
        zoo.status = 'open';
        zoo.close();
        
        assert.equal(zoo.status, 'closed');
      });
    });

  }); // methods

});
