import SEMService from '@/services/SEMService';

class EventService {
  static getAllEvents() {
    return SEMService.get('events')
      .then((response) => response.data);
  }

  static createEvent(event) {
    return SEMService.post('events', event)
      .then((response) => response.data);
  }

  static getOne(id) {
    return SEMService.get(`events/${id}`)
      .then((response) => response.data);
  }

  static updateEvent(event) {
    return SEMService.put(`events/${event.id}`, event)
      .then((response) => response.data);
  }
}

export default EventService;
