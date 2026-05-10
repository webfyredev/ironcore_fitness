import { FaDollarSign, FaPause, FaShieldAlt, FaUsers } from "react-icons/fa";

export const mem_plans = [
    {
        icon : FaShieldAlt,
        title : 'No Long-Term Contracts',
        text : 'Month-to-month membership with 30 day cancellation notice'
    },
    {
        icon : FaDollarSign,
        title : '7-Day Money Back Guarantee',
        text : 'Not satisfied? Get a full refund within the first week'
    },
    {
        icon : FaPause,
        title : 'Membership Freeze Option',
        text : 'Pause your membership up to 3 months per year'
    },
    {
        icon : FaUsers,
        title : 'Family & Corporate Discounts',
        text : 'Save 15% when you bring family or coworkers'
    }
];
export const mem_price_plans = [
    {
        id : 1,
        title : 'BASIC',
        text : 'Perfect for getting started',
        price : 49,
        audience : 'Self motivated individuals who want gym access and basic classes',
        benefits : ['Full gym access during all hours', 'Standard group classes (20+ per week)', 'Locker room and shower access', 'Mobile app with workout tracking', 'Free initial fitness assessment', 'Access to cardio and strength equipment'],
        type : 'Basic'
    },
    {
        id : 2,
        title : 'STANDARD',
        text : 'Most popular choice',
        price : 89,
        audience : 'Those who want variety, guidance, and community support',
        benefits : ['Everything in Basic', 'All group classes (50+ per week)', 'Monthly 30-min trainer check-in', 'Quarterly fitness assessment', 'Nutrition basics guide and resources', 'Guest passes (2 per month)', 'Priority class registration', 'Access to speciality equipment', '10% discount on personal training', 'Free body composition scan (quarterly)'],
        type : 'Standard'
    },
    {
        id : 3,
        title : 'PREMIUM',
        text : 'Ultimate transformation package',
        price : 149,
        audience : 'Serious individuals commited to maximum results with full support',
        benefits : ['Everything in Standard', '4 Personal Training sessions per month', 'Custom nutrition plan with monthly updates', 'Weekly progress tracking and adjustments', 'Priority class booking (reserve 7 days ahead)', 'Unlimited guest passes', '24/7 gym access with key card', 'Supliment discounts (15% off)', 'Free towel service', 'Complimentary recovery sessions (sauna, massage chair)', 'VIP parking slot', 'Exclusive member workshops and seminar'],
        type : 'Premium'
    },
];

export const mem_service = [
    {
        icon : '',
        title : 'Extra PT Session',
        text : 'Add more one-on-one coaching',
        price : 45
    },
    {
        icon : '',
        title : 'Nutrition Consultation',
        text : 'Personalized meal planning',
        price : 75
    },
    {
        icon : '',
        title : 'Body Composition Scan',
        text : 'Track your progress accurately',
        price : 35
    },
    {
        icon : '',
        title : 'Recovery Massage',
        text : 'Professional sports massage',
        price : 60   
    },
    {
        icon : '',
        title : 'Small Group Training',
        text : 'Semi-private sessions (3-5 people)',
        price : 30
    },
    {
        icon : '',
        title : 'Program Design',
        text : 'Custom 12-week training plan',
        price : 100
    }
];