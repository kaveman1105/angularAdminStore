import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let videos = [
            { title: 'The Avengers', rating: 5, description: 'hulk smash', price: 5, id: 1 },
            { title: 'Inception', rating: 4, description: 'Dreaming about dreaming', price: 6, id: 2 },
            { title: 'Batman', rating: 5, description: 'I AM THE BATMAN!!', price: 4, id: 3 },
        ];

        let customers = [
            { name: 'kevin', id: 1, address: '1408 N. Westshore Tampa, Fl', payment: 2234 },
            { name: 'may', id: 2, address: 'somehere street', payment: 1234 },
            { name: 'john', id: 3, address: 'somehere street', payment: 3234 },
            { name: 'forrest gump', id: 4, address: 'somehere street', payment: 5234 },
            { name: 'bruce bannor', id: 5, address: 'somehere street', payment: 8734 },
        ];

        let admins = [
            { userName: 'admin', password: 'password' },
            { userName: 'otherAdmin', password: 'password' }
        ];
        return { videos, customers, admins };
    }
}
