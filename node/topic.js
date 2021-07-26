const {Kafka} = require('kafkajs')

run()

async function run() {
    try {
        const kafka = new Kafka({
            'clientId': 'myApp',
            'brokers': ['localhost:9092']
        })

        const admin = kafka.admin()
        console.log('connecting..');
        await admin.connect()
        console.log('connected!');

        //A-M 1 , N-Z 0
        await admin.createTopics({
            'topics': [{
                'topic': 'Users',
                'numPartitions': 2
            }]
        })

        console.log('create sucessfully');
        await admin.disconnect()

    } catch (error) {
        console.log(`some thing error ${error}`);
    } finally {
        process.exit(0)
    }
}