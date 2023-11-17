const mongoose = require("mongoose");
const User = require("./models/user");
const Donation = require("./models/donation");
const Campaign = require("./models/campaign");

mongoose.connect('mongodb+srv://Team5users:teamfiveacs@cluster1.qmk7wif.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.once('open', () => {
  console.log('Connected to MongoDB Atlas');
});

  // Seed Users
// const usersData = [
//   {
//     firstName: 'Jessica',
//     lastName: 'Brown',
//     address: '202 Maple Lane, Warrawong, NSW',
//     contactNo: '0401234571',
//     email: 'jessica.brown@email.com',
//     password: 'SecureWord789!',
//   },
//   {
//     firstName: 'Daniel',
//     lastName: 'Rodriguez',
//     address: '303 Willow Drive, Kiama, NSW',
//     contactNo: '0401234572',
//     email: 'daniel.rodriguez@email.com',
//     password: 'Passw0rd!',
//   },
//   {
//     firstName: 'Olivia',
//     lastName: 'Smith',
//     address: '404 Birch Street, Dapto, NSW',
//     contactNo: '0401234573',
//     email: 'olivia.smith@email.com',
//     password: 'SecretCode567!',
//   },
//   {
//     firstName: 'Ethan',
//     lastName: 'Turner',
//     address: '505 Elm Avenue, Oak Flats, NSW',
//     contactNo: '0401234574',
//     email: 'ethan.turner@email.com',
//     password: 'P@ssword789',
//   },
//   {
//     firstName: 'Sophia',
//     lastName: 'Walker',
//     address: '606 Oak Lane, Bombo, NSW',
//     contactNo: '0401234575',
//     email: 'sophia.walker@email.com',
//     password: 'HiddenPass12!',
//   },
//   {
//     firstName: 'Noah',
//     lastName: 'Martinez',
//     address: '707 Cedar Road, Shell Harbour, NSW',
//     contactNo: '0401234576',
//     email: 'noah.martinez@email.com',
//     password: 'Secure123!',
//   },
// ];

// const campaignsData = [
//   {
//     title: "Empower Tomorrow's Leaders",
//     description:
//       "Join us in empowering the next generation through quality education. This campaign aims to provide scholarships, enhance educational resources, and foster a love for learning. Your support can change a student's life, opening doors to a brighter future filled with opportunities and success.",
//     targetAudience: 'Students, Parents, Education Advocates',
//     issueCause: 'Education Equality',
//     expectedOutcomes: 'Distribution of 500 scholarships, Improved access to educational materials, Increased literacy rates',
//     donationGoals: 50000,
//   },
//   {
//     title: "Access to Education Initiative",
//     description:
//       "Every child deserves access to quality education. This campaign focuses on removing barriers to education by providing school supplies, supporting distance learning initiatives, and building inclusive learning spaces. Together, let's ensure that no child is left behind in their pursuit of knowledge.",
//     targetAudience: 'Teachers, Parents, Educational Organizations',
//     issueCause: 'Education Access',
//     expectedOutcomes: 'Distribution of 1,000 school supply kits, Implementation of 10 distance learning programs, Construction of 3 inclusive learning spaces',
//     donationGoals: 65000,
//   },
//   {
//     title: 'Tech for All',
//     description:
//       'In a digital age, technological literacy is crucial. This campaign focuses on promoting digital skills by providing computers, organizing coding workshops, and fostering innovation. Your contribution can bridge the digital divide and empower individuals with the tools needed for success in the modern world.',
//     targetAudience: 'Tech Enthusiasts, Students, Digital Inclusion Advocates',
//     issueCause: 'Technological Literacy',
//     expectedOutcomes: 'Distribution of 200 computers, Creation of 5 coding workshops, Increased digital literacy rates',
//     donationGoals: 40000,
//   },
//   {
//     title: 'Bright Minds Scholarship Fund',
//     description:
//       'Support the dreams of aspiring students through the Bright Minds Scholarship Fund. This campaign focuses on providing financial aid, mentorship programs, and career guidance to deserving students. Your donation can transform lives and pave the way for a brighter and educated future.',
//     targetAudience: 'Students, Academic Institutions, Mentorship Organizations',
//     issueCause: 'Scholarships and Education Support',
//     expectedOutcomes: 'Distribution of 300 scholarships, Implementation of mentorship programs, Increased access to career guidance',
//     donationGoals: 55000,
//   },
//   {
//     title: 'Healthcare for Every Community',
//     description:
//       'Access to healthcare is a basic human right. Join us in ensuring that every community has the healthcare resources it needs. This campaign focuses on building medical facilities, providing essential medical supplies, and supporting healthcare professionals. Your contribution can save lives and improve the well-being of communities.',
//     targetAudience: 'Healthcare Professionals, Community Leaders, Health Advocates',
//     issueCause: 'Healthcare Access',
//     expectedOutcomes: 'Construction of 2 medical facilities, Distribution of 5,000 medical supply kits, Support for 10 healthcare professionals',
//     donationGoals: 80000,
//   },
//   {
//     title: 'Mind Matters',
//     description:
//       "Let's break the stigma around mental health. Mind Matters is a campaign dedicated to raising awareness about mental health issues, providing counseling services, and supporting mental health initiatives. Your contribution can make a significant impact on destigmatizing mental health and offering support to those in need.",
//     targetAudience: 'Mental Health Advocates, Counselors, General Public',
//     issueCause: 'Mental Health Awareness',
//     expectedOutcomes: 'Conducting 20 mental health awareness events, Providing counseling services to 100 individuals, Supporting 5 mental health initiatives',
//     donationGoals: 45000,
//   },
//   {
//     title: 'Healthy Communities Initiative',
//     description:
//       'Prevention is key to a healthy community. This campaign focuses on disease prevention through vaccination drives, health education programs, and community health clinics. Your support can contribute to healthier communities and safeguard lives from preventable diseases.',
//     targetAudience: 'Public Health Advocates, Medical Professionals, Community Members',
//     issueCause: 'Disease Prevention',
//     expectedOutcomes: 'Conducting 15 vaccination drives, Implementing 10 health education programs, Establishing 3 community health clinics',
//     donationGoals: 70000,
//   },
//   {
//     title: 'Nurturing Beginnings',
//     description:
//       'Ensure a healthy start for every child and mother. Nurturing Beginnings focuses on maternal and child health, providing prenatal care, nutritional support, and parenting education. Your contribution can positively impact the well-being of mothers and set the foundation for a healthy future generation.',
//     targetAudience: 'Mothers, Parents, Maternal Health Advocates',
//     issueCause: 'Maternal and Child Health',
//     expectedOutcomes: 'Providing prenatal care to 50 mothers, Distributing nutritional support to 100 families, Conducting 10 parenting education sessions',
//     donationGoals: 60000,
//   },
//   {
//     title: 'Green Horizon Initiative',
//     description:
//       'Join us in creating a sustainable future for our planet. The Green Horizon Initiative aims to raise awareness about environmental conservation and fund projects that promote green living. As we face increasing challenges from climate change, your support can make a significant impact. Together, let\'s plant more trees, reduce carbon footprints, and create a healthier planet for generations to come.',
//     targetAudience: 'Environmental enthusiasts, Nature lovers, Climate activists',
//     issueCause: 'Environmental Conservation',
//     expectedOutcomes: 'Increased awareness, Plantation of 10,000 trees, Reduction in carbon emissions',
//     donationGoals: 50000,
//   },
//   {
//     title: 'Hunger-Free Communities',
//     description:
//       'No one should go to bed hungry. Join us in creating hunger-free communities. This campaign aims to provide nutritious meals, support food banks, and implement sustainable solutions to combat hunger. Your contribution can make a direct impact on alleviating hunger and ensuring that everyone has access to wholesome meals.',
//     targetAudience: 'Hunger relief advocates, Community organizers, Food security supporters',
//     issueCause: 'Hunger Alleviation',
//     expectedOutcomes: 'Distribution of 50,000 meals, Establishment of community gardens, Support for 5 local food banks',
//     donationGoals: 40000,
//   },
//   {
//     title: 'United Communities for Change',
//     description:
//       'Foster unity and empower communities for positive change. This campaign aims to address social issues such as poverty, inequality, and discrimination. By supporting community projects, organizing awareness campaigns, and fostering collaboration, we can create a more inclusive and compassionate society. Your contribution can be the catalyst for meaningful change in communities across the nation.',
//     targetAudience: 'Community Leaders, Activists, Social Change Advocates',
//     issueCause: 'Community Empowerment and Social Change',
//     expectedOutcomes: 'Implementation of 5 community projects, Organization of 15 awareness campaigns, Strengthening community bonds',
//     donationGoals: 55000,
//   },
//   {
//     title: 'Diverse Voices, Equal Rights',
//     description:
//       'Stand up for equality and inclusion. This campaign focuses on promoting equal rights, celebrating diversity, and advocating for inclusivity in all aspects of society. By supporting educational programs, awareness events, and fostering dialogue, we can create a society where every voice is heard and every individual is valued. Your contribution can contribute to building a more just and inclusive world.',
//     targetAudience: 'Diversity and Inclusion Advocates, Educators, Human Rights Activists',
//     issueCause: 'Equality and Inclusion',
//     expectedOutcomes: 'Implementation of 10 educational programs, Organization of 20 diversity awareness events, Promotion of inclusivity dialogue',
//     donationGoals: 50000,
//   }
// ];

// seedCampaign = async ()=>{
//   await Campaign.insertMany(campaignsData);
// }

// try {
//   seedCampaign();
//   console.log('Campaigns seeded successfully');
// } catch (err) {
//   console.error('Error seeding campaigns:', err);
// }

// seedUser = async ()=>{
//   await User.insertMany(usersData);

// }

// try {
//   seedUser()
//   console.log('Users seeded successfully');
// } catch (err) {
//   console.error('Error seeding users:', err);
// }