import Decorator from '@utils/Decorator';

class CalendarDecorator extends Decorator {
  parseDateToString(date: Date | null): string {
    const dateString = super.parseDateToString(date);

    if (!dateString) {
      return '';
    }

    const [day, month, year] = dateString.split('/');
    const newMonth = Number(month) > 9 ? month : `0${month}`;
    const newDay = Number(day) > 9 ? day : `0${day}`;

    return `${newDay}/${newMonth}/${year}`;
  }
}

export default CalendarDecorator;
