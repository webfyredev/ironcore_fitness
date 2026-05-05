
import { FaDumbbell, FaClipboardCheck, FaUserTie, FaUsers, FaWeight, FaBolt, FaAppleAlt, FaRunning, FaSeedling, FaFileContract, FaShieldAlt, FaPauseCircle, FaStar, FaCertificate, FaTrophy } from "react-icons/fa";
export const programs = [
    {
        icon : FaDumbbell,
        title : 'Strength Training',
        sub_text : 'Build muscle, increase power, and transform your physique with progressive overload programs designed for all levels.',
        activities : ['Muscle Growth', 'Increased Strength', 'Better Posture'],
    },
    {
        icon : FaUserTie,
        title : 'Personal Training',
        sub_text : 'One-on-one coaching tailored to your goals, schedule and fitness level. Get personalized attention and accountability.',
        activities : ['Custom Programs', 'Expert Guidance', 'Faster Results'],
    },
    {
        icon : FaUsers,
        title : 'Group Classes',
        sub_text : 'High energy group workouts that combine motivation, community and expert instructions for maximum results.',
        activities : ['Community Support', 'Variety', 'Fun & Engaging'],
    },
    {
        icon : FaWeight,
        title : 'Weight Loss Coaching',
        sub_text : 'Sustainable fat loss programs combining smart training, nutrition guidance, and lifestyle coaching for lasting results',
        activities : ['Fat Loss', 'Nutrition Support', 'Sustainable Habits'],
    },
    {
        icon : FaBolt,
        title : 'HIIT & Conditioning',
        sub_text : 'High intensity interval training to boost metabolism, burn fat, and improve cardiovascular fitness in less time.',
        activities : ['Burn More Calories', 'Improved Endurance', 'Time Efficient'],
    },
    {
        icon : FaAppleAlt,
        title : 'Nutrition Coaching',
        sub_text : 'Personalized meal plans and nutrition strategies to fuel your workouts and support your transformation goals.',
        activities : ['Custom Meal Plans', 'Macro Tracking', 'Lifestyle Integration'],
    },
    {
        icon : FaRunning,
        title : 'Athletic Performance',
        sub_text : 'Sport-Specific training to enhance speed, power, agility and overall athletic performance for competitive athletes',
        activities : ['Sport Specific', 'Injury Prevention', 'Peak Performance'],
    },
    {
        icon : FaSeedling,
        title : 'Beginner Programs',
        sub_text : 'Start your fitness journey with confidence. Learn proper form, build a foundation, and develop healthy habits',
        activities : ['Learn Basics', 'Build Confidence', 'Safe Progression'],
    },
];

export const membership_plans  = [
    {
        icon : FaFileContract,
        title : 'No contracts',
        sub_text : 'Month-to-month flexibility'
    },
    {
        icon : FaShieldAlt,
        title : '7-Day Guarantee',
        sub_text : 'Full refund if not satisfied'
    },
    {
        icon : FaPauseCircle,
        title : 'Freeze Option',
        sub_text : 'Pause up to 3 months/year'
    },
    {
        icon : FaUsers,
        title : 'Group Discounts',
        sub_text : 'Save 15% with family and friends '
    },
];

export const price_plans = [
    {
        title : 'BASIC',
        text : 'Perfect for self-motivated individuals',
        price : 49,
        benefits : ['Full gym access', '20+ group classes weekly', 'Locker room access', 'Mobile app tracking', 'Free fitness assessment'],
        type : 'Basic'
    },
    {
        title : 'STANDARD',
        text : 'Most popular choice for results',
        price : 89,
        benefits : ['Everything in Basic', '50+ group classes weekly', 'Monthly trainer check-in', 'Quarterly assessments', 'Nutrition guide', 'Guest passes (2/month)', '10% PT discount'],
        type : 'Standard'
    },
    {
        title : 'PREMIUM',
        text : 'Ultimate transformation package',
        price : 149,
        benefits : ['Everything in Standard', '4 PT sessions montly', 'Custom nutrition plan', 'Weekly progress tracking', '24/7 gym access', 'Unlimited guess passes', 'Recovery sessions', 'VIP parking'],
        type : 'Premium'
    },
];

export const trainers = [
    {
        image : '/home/trn1.jpg',
        years : 12,
        name : 'Marcus Johnson',
        title : 'Head Strength Coach',
        sub_text : 'Former competitive powerlifter with a passion for building strength and confidence',
        speciality : 'Strength & Powerlifting',
        skill : ['CSCS', 'NASM-CPT', 'USA Powerlifting']
    },
    {
        image : '/home/trn2.jpg',
        years : 10,
        name : 'Sarah Ollend',
        title : 'Nutrition & Wellness Coach',
        sub_text : 'Registered dietitian specializing in sustainable fat loss and performance nutrition',
        speciality : 'Nutrition & Weight Loss',
        skill : ['RD', 'NASM-CPT', 'Precision Nutrition L2']
    },
    {
        image : '/home/trn3.jpg',
        years : 8,
        name : 'Julian Benson',
        title : 'HIIT & Conditioning Specialist',
        sub_text : 'High-energy coach who makes every workout challenging fun, and results-driven',
        speciality : 'HIIT & Athletic Performance',
        skill : ['ACE-CPT', 'TRX', 'CrossFit L2']
    },
    {
        image : '/home/trn4.jpg',
        years : 15,
        name : 'Kimly Kotty',
        title : 'Personal Training Director ',
        sub_text : 'Transformation specialist with hundreds of success stories and a holistic approach',
        speciality : 'Body Transformation',
        skill : ['NASM-CPT', 'CES', 'FNS']
    },
];

export const trainer_stats = [
    {
        value : '15+',
        text : 'Expert Trainers'
    },
    {
        value : '100+',
        text : 'Certifications'
    },
    {
        value : '10K+',
        text : 'Clients Trained'
    },
    {
        value : '98%',
        text : 'Success Rate'
    }
];

export const testimonial_rate = [
    {
        value : '10,000+',
        text : 'Success Stories'
    },
    {
        value : '98%',
        text : 'Member Satisfaction'
    },
    {
        value : '4.9/5',
        text : 'Average rating'
    },
    {
        value : '500K+',
        text : 'Pounds Lost'
    }
]
export const testimonials = [
    {
        image : '/home/test01.jpg',
        result : 'Lost 45 lbs in 6 months',
        rating : 5,
        story : 'I lost 45 pounds in 6 months and gained so much more than just weight loss. IronCore gave me confidence, discipline, and a community that genuinely cares. The trainers personalized everything to my needs and celebrated every milestone with me',
        name : "Jennifer Martinez",
        process : 'Weight Loss Success'
    },
    {
        image : '/home/test02.jpg',
        result : 'Added 100 lbs to deadlift',
        rating : 5,
        story : 'As a former athlete, I thought I knew fitness. IroncCore showed me what real strength  training looks like. I added 100 pounds to my deadlift and completely transformed my physique. The coaching here is world-class',
        name : "Micheal James",
        process : 'Strength Transformation'
    },
    {
        image : '/home/test03.jpg',
        result : 'From beginner to competitor',
        rating : 5,
        story : 'I walked in never having touched a weight before. Now am competing in my first powerlift meet! The trainers at IronCore made me feel comfortable from day one and taught me everything I needed to know. This place changed my life.',
        name : "Sarah Kimdel",
        process : 'Complete Beginner to Athlete'
    },
    {
        image : '/home/test04.jpg',
        result : 'Lost 30 lbs fat, gained 15 lbs muscle',
        rating : 5,
        story : 'The nutrition coaching combined with the training programs gave me results I never thought possible. I lost fat, gained muscle, and feel better at 40 than I did at 25. IronCore holistic approach is what makes the difference',
        name : "David Brillton",
        process : 'Body Recomposition'
    },
    {
        image : '/home/test05.jpg',
        result : 'Postpartum strength restored',
        rating : 5,
        story : "After having two kids, I didn't think I'd ever feel strong again. IconCore's trainers understood my journey and created a safe, effective program that got me back to feeling myself actually better than befpre. Forever grateful",
        name : "Amanda Williams",
        process : 'Postpartum Transformation'
    },
    {
        image : '/home/test06.jpg',
        result : 'Increased vertical jump 8 inches',
        rating : 5,
        story : "Training at IronCore took my basketball game to the next level. The athletic performace program improved my speed, vertical jump, and overall conditioning. I'm playing better than ever and staying injury-free",
        name : "James Wilson",
        process : 'Athletic Performance'
    },

    

];

export const foot_data = [
    {
        icon : FaShieldAlt,
        title : '7-Day Money-Back Guarantee',
        text : 'Risk-free trial period'
    },
    {
        icon : FaFileContract,
        title : 'No Long-Term Contracts',
        text : 'Month-to-month flexibility'
    },
    {
        icon : FaClipboardCheck,
        title : 'Free Fitness Assessment',
        text : 'Personalized starting point'
    }
];

export const foot_stats = [
    {
        icon : FaStar,
        title : '5-Star Rated'
    },
    {
        icon : FaUsers,
        title : '2000+ Active Members'
    },
    {
        icon : FaTrophy,
        title : '10K Success Stories'
    },
    {
        icon : FaCertificate,
        title : 'Certified Trainers'
    }
]