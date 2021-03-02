const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error();
  }

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];


  const monthIndex = date.getMonth();
  const monthName = months[monthIndex];

  if (monthName === 'March' || monthName === 'April' || monthName === 'May') {
    return 'spring';
  }

  if (monthName === 'June' || monthName === 'July' || monthName === 'August') {
    return 'summer';
  }

  if (monthName === 'September' || monthName === 'October' || monthName === 'November') {
    return 'autumn';
  }

  if (monthName === 'December' || monthName === 'January' || monthName === 'February') {
    return 'winter';
  }


};
