import SEMService from '@/services/SEMService';

class PersonService {
  static getAllPersons() {
    return SEMService.get('persons')
      .then((response) => response.data);
  }
}

export default PersonService;
