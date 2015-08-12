export class TreeList {
  constructor() {
    this.network = 'Root';
    this.connection = [];
    
    let network1 = {
      network: 'Network 1',
      connection: [{
        network: 'Network 1.1',
        connection: [{
          network: 'Network 1.1.1',
          connection: [],
        }, {
          network: 'Network 1.1.2',
          connection: [{
            network: 'Network 1.1.2.1',
            connection: [],
          }],
        }]
      }, {
        network: 'Network 1.2',
        connection: [{
          network: 'Network 1.2.1',
          connection: [],
        }, {
          network: 'Network 1.2.2',
          connection: [{
            network: 'Network 1.2.2.1',
            connection: [],
          }],
        }]
      }]
    };
    
    let network2 = {
      network: 'Network 2',
      connection: [{
        network: 'Network 2.1',
        connection: [{
          network: 'Network 2.1.1',
          connection: []
        }, {
          network: 'Network 2.1.2',
          connection: []
        }]
      }, {
        network: 'Network 2.2',
        connection: [{
          network: 'Network 2.2.1',
          connection: [],
        }, {
          network: 'Network 2.2.2',
          connection: [],
        }]
      }]
    };
    
    
    this.connection.push(network1, network2);
  }
}