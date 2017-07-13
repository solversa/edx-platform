/* globals Logger, loadFixtures */

import { CourseHome } from '../CourseHome';

describe('Course Home factory', () => {
  let home;

  describe('Ensure course tool click logging', () => {
    beforeEach(() => {
      loadFixtures('course_experience/fixtures/course-home-fragment.html');
      home = new CourseHome({
        courseToolLink: '.course-tool-link',
      });
      spyOn(Logger, 'log');
    });

    it('sends an event when an course tool is clicked', () => {
      document.querySelector('.course-tool-link').dispatchEvent(new Event('click'));
      expect(Logger.log).toHaveBeenCalled();
    });
  });
});
