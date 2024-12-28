import resourcesData from './../../data/resources';
import userData from './../../data/user';
import companies from './../../data/companies';
export default function seeds(server) {
    resourcesData.forEach((resource) => server.create('resource', resource));
    userData.forEach((user) => server.create('user', user));
    companies.forEach((company) => server.create('company', company));
  }
  