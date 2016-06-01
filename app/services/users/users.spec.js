describe('Users factory', function() {
  var Users;
  var userList = [
    {
      id: '1',
      name: 'Jane',
      role: 'Designer',
      location: 'New York',
      twitter: 'gijane'
    },
    {
      id: '2',
      name: 'Bob',
      role: 'Developer',
      location: 'New York',
      twitter: 'billybob'
    },
    {
      id: '3',
      name: 'Jim',
      role: 'Developer',
      location: 'Chicago',
      twitter: 'jimbo'
    },
    {
      id: '4',
      name: 'Bill',
      role: 'Designer',
      location: 'LA',
      twitter: 'dabill'
    }
  ];
  var singleUser = {
    id: '2',
    name: 'Bob',
    role: 'Developer',
    location: 'New York',
    twitter: 'billybob'
  };

  beforeEach(angular.mock.module('api.users'));

  beforeEach(inject(function(_Users_) {
    Users = _Users_;
  }));

  it('should exist', function() {
    expect(Users).toBeDefined();
  });

  describe('.all()', function() {
    it('should exist', function() {
      expect(Users.all).toBeDefined();
    });

    it('should return a hard-coded list of users', function() {
      expect(Users.all()).toEqual(userList);
    });
  });

  describe('.findById()', function() {
    it('should exist', function() {
      expect(Users.findById).toBeDefined();
    });

    it('should return one user object if it exists', function() {
      expect(Users.findById('2')).toEqual(singleUser);
    });

    it('should return undefined if the user cannot be found', function() {
      expect(Users.findById('ABC')).not.toBeDefined();
    });
  });
});
