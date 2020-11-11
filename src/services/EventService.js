import SEMService from '@/services/SEMService';

class EventService {
  static getAllEvents(eventCategories = []) {
    return SEMService.get('events', { params: { event_category_ids: eventCategories } })
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

  static deleteEvent(id) {
    return SEMService.delete(`events/${id}`)
      .then((response) => response.data);
  }
}

export default EventService;
