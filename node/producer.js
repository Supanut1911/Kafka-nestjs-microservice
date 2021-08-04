const {Kafka} = require('kafkajs')
const msg = process.argv[2]
run()

async function run() {
    try {
        const kafka = new Kafka({
            'clientId': 'myApp',
            'brokers': ['localhost:9092'],
            ssl: true,
            sasl: {
                mechanism: 'plain', // scram-sha-256 or scram-sha-512
                username: 'test',
                password: '123456'
              },
        })

        const producer = kafka.producer()
        console.log('connecting..');
        await producer.connect()
        console.log('connected!');

        //A-M 0, N-Z 1
        const patition = msg[0] < 'M' ? 0 : 1
        const result = await producer.send({
            'topic': 'Users',
            'messages': [
                {
                    'value': msg,
                    'partition': patition 
                }
            ]
        })

        console.log(`send sucessfull => ${JSON.stringify(result)}`);
        await producer.disconnect()

    } catch (error) {
        console.log(`some thing error ${error}`);
    } finally {
        process.exit(0)
    }
}