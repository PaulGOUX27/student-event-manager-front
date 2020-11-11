import SEMService from '@/services/SEMService';

class EventCategoryService {
  static getAll() {
    return SEMService.get('event-categories')
      .then((response) => response.data);
  }

  static create(eventCategory) {
    return SEMService.post('event-categories', eventCategory)
      .then((response) => response.data);
  }

  static getOne(id) {
    return SEMService.get(`event-categories/${id}`)
      .then((response) => response.data);
  }
}

export default EventCategoryService;
