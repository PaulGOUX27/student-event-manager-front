import SEMService from '@/services/SEMService';

class EventService {
  static getAllEvents() {
    return SEMService.get('events')
      .then((response) => response.data);
  }
}

export default EventService;
