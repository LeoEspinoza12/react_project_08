import UAParser from 'ua-parser-js'


// create log to the server
export const getUserData = () => {
  const uaParse = new UAParser()
  const date = new Date()
  const user = {
    data: moment(date).format('LLL'),
    browser: uaParse.getBrowser(),
    device: uaParse.getDevice(),
    processor: uaParse.getCPU(),
  }
  return user
}