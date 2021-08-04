const {Kafka} = require('kafkajs')
run()

async function run() {
    try {
        const kafka = new Kafka({
            'clientId': 'myApp',
            'brokers': ['localhost:9092'],
            ssl: false,
            sasl: {
                mechanism: 'plain', // scram-sha-256 or scram-sha-512
                username: 'test',
                password: '123456'
              },
        })

        const consumer = kafka.consumer({
            groupId: 'test'
        })
        console.log('connecting..');
        await consumer.connect()
        console.log('connected!');

        consumer.subscribe({
            'topic':'Users',
            'fromBeginning': true
        })

        await consumer.run({
            'eachMessage': async result => {
                console.log(`recieve meg : ${result.message.value} on partition : ${result.partition}`);
            }
        })

    } catch (error) {
        console.log(`some thing error ${error}`);
    } finally {

    }
}