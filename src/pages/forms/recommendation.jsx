import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../homePage/Footer";
import { UserIcon } from "lucide-react";
import { Link } from "react-router-dom";

// Function to calculate the zodiac sign based on the birthday
const getZodiacSign = (date) => {
  const zodiacSigns = [
    { sign: "Aries", endDate: new Date(date.getFullYear(), 2, 20) },
    { sign: "Taurus", endDate: new Date(date.getFullYear(), 3, 20) },
    { sign: "Gemini", endDate: new Date(date.getFullYear(), 4, 20) },
    { sign: "Cancer", endDate: new Date(date.getFullYear(), 5, 20) },
    { sign: "Leo", endDate: new Date(date.getFullYear(), 6, 22) },
    { sign: "Virgo", endDate: new Date(date.getFullYear(), 7, 22) },
    { sign: "Libra", endDate: new Date(date.getFullYear(), 8, 22) },
    { sign: "Scorpio", endDate: new Date(date.getFullYear(), 9, 22) },
    { sign: "Sagittarius", endDate: new Date(date.getFullYear(), 10, 21) },
    { sign: "Capricorn", endDate: new Date(date.getFullYear(), 11, 20) },
    { sign: "Aquarius", endDate: new Date(date.getFullYear(), 0, 19) },
    { sign: "Pisces", endDate: new Date(date.getFullYear(), 1, 19) },
  ];

  for (let i = 0; i < zodiacSigns.length; i++) {
    if (date <= zodiacSigns[i].endDate) {
      return zodiacSigns[i].sign;
    }
  }
  return "Capricorn"; // default if no match (for dates after December 22)
};

function Recommendation() {
  const { state } = useLocation();
  const { name, birthday } = state.formData;

  // Parse the birthday to a Date object
  const birthDate = new Date(birthday);

  // Get the zodiac sign based on the birthday
  const zodiacSign = getZodiacSign(birthDate);

  // Generate a personalized recommendation based on zodiac sign
  const generateRecommendation = (sign) => {
    switch (sign) {
      case "Aries":
        return `As an Aries, you are known for your boldness and enthusiasm. In health, focus on regular exercise to channel your abundant energy. For education, embrace your natural leadership abilities and take initiative in learning. Financially, it's important to be cautious with impulsive spending and focus on long-term goals. In love, you may face challenges with patience, but cherish your passionate connections and be open to compromise. Your assertiveness and drive will help you achieve success in all areas of life. Balance your eagerness with mindfulness, and you will unlock your true potential. Personal growth comes from embracing both your strengths and vulnerabilities. Continue seeking new experiences and challenges, and remember to prioritize your well-being while pursuing your ambitions. Aries, your adventurous spirit will lead you to explore new opportunities, but always remember to pause, reflect, and evaluate your decisions to ensure you're on the right path for long-term fulfillment.`;
      case "Taurus":
        return `Taurus, you're known for your determination and practicality. Health-wise, focus on creating a consistent routine, and avoid overindulgence in food or comfort. Your strong will and steady nature will help you achieve your goals in education and work. Financially, you excel at budgeting, and long-term investments are where you'll thrive. Love may take time, but once you commit, it's for life. Your loyalty and sense of stability make you a reliable partner. However, try to remain open to change and flexible in your approach, as being too rigid can sometimes hold you back. Focus on maintaining balance and finding joy in life's simple pleasures. Your path is one of stability, growth, and commitment. Trust your instincts and continue to build a solid foundation for the future. You will find peace and happiness by embracing what truly matters to you and working diligently to achieve your personal and professional goals.`;
      case "Gemini":
        return `Geminis are quick-witted and communicative. Health-wise, balancing mental and physical activities will keep you in harmony. Stay active with hobbies that stimulate your mind and body, such as sports or creative endeavors. In education, your curiosity will lead you to a wide range of knowledge. You're able to adapt and thrive in diverse environments, but ensure you take time to focus on your long-term goals. Financially, you may have a varied income stream, so managing your resources wisely will benefit you in the long run. In love, your adaptability will help you navigate relationships with ease. However, be mindful of your tendency to become restless or indecisive. Strive for consistency and grounding in your relationships. Embrace your dual nature while finding balance in your personal and professional life. Geminis, your ability to see both sides of a situation makes you a great problem solver. Use your gifts to connect with others and discover new opportunities for personal growth and success.`;
      case "Cancer":
        return `Cancer, you're sensitive and intuitive. Health-wise, maintaining a healthy emotional balance is key for your overall well-being. Take time to nurture yourself and stay connected to your feelings. In education, trust your intuition and focus on areas that bring you comfort and security. You excel in environments where you feel emotionally supported. Financially, prioritize savings and long-term security, as stability brings you peace of mind. In love, you form deep emotional bonds and seek meaningful connections. Your nurturing nature makes you an incredible partner. However, you may need to work on managing emotional highs and lows in relationships. Stay grounded, trust your instincts, and embrace the emotional depth that brings you fulfillment. Cancer, your ability to deeply understand and connect with others makes you a loyal friend and partner. Make sure to give yourself the same care and attention that you give others. Balance emotional sensitivity with practicality, and you will thrive in all aspects of life.`;
      case "Leo":
        return `Leos are confident and energetic. Health-wise, physical activities that bring joy, such as dancing or sports, will serve you best. Focus on boosting your stamina and energy levels through regular exercise. In education, your natural leadership skills will help you excel, but ensure you take the time to refine your knowledge and master your craft. Financially, take calculated risks and invest in ventures that match your passions. However, avoid overextending yourself financially in pursuits that don’t align with your long-term vision. In love, your charisma makes you an exciting partner, but be sure to nurture deeper emotional connections to find lasting happiness. Remember to balance your need for admiration with the importance of humility. Continue striving for greatness, but always remain grounded and true to yourself. Leo, your ability to inspire others is one of your greatest gifts. Lead with confidence and share your talents, knowing that your influence will help others achieve their goals.`;
      case "Virgo":
        return `Virgos are practical and detail-oriented. Focus on a balanced routine for health, incorporating both physical and mental activities. It's important to maintain a healthy balance of work and self-care. In education, your meticulous nature and attention to detail will lead you to success. You excel in environments where you can organize, analyze, and solve problems. Financially, you have a natural ability to budget, save, and make sound investments. In love, you'll find stability with someone who appreciates your dedication and ability to nurture. However, be cautious of perfectionism, as it can cause stress and hinder your personal growth. Trust yourself and embrace your ability to make steady progress, knowing that consistency and effort will bring lasting rewards. Virgo, your ability to offer practical solutions is your strength. Use this skill to guide others, and remember to give yourself credit for your hard work and achievements.`;
      case "Libra":
        return `Libras are known for their sense of balance and harmony. Health-wise, focus on maintaining mental and emotional well-being. Finding balance between work and relaxation will help you thrive. In education, your diplomatic nature will aid you in understanding diverse perspectives and working well with others. Financially, you may find success in fields that involve collaboration and teamwork. In love, you seek harmony and balance, and you may be drawn to relationships that reflect those values. However, make sure to prioritize your own needs and desires alongside those of others. Libra, your ability to see both sides of every situation is a gift that will help you navigate challenges with ease. Embrace your diplomatic skills and use them to create harmony in your life. Stay focused on your personal well-being and self-growth, knowing that balance is key to your happiness.`;
      case "Scorpio":
        return `Scorpios are passionate and determined. Health-wise, it's important to focus on emotional well-being and stress management. Physical activity can help release built-up tension. In education, your depth of focus will help you excel in any subject you pursue. Financially, Scorpios tend to be strategic and are capable of making calculated decisions that lead to long-term success. In love, you seek deep, transformative connections and can form intense bonds. However, be cautious of being overly possessive or jealous. Trust and vulnerability are essential for healthy relationships. Scorpio, your resilience and determination are unmatched. Stay true to yourself, embrace your emotional depth, and use your strength to face challenges head-on. When you embrace vulnerability, you open yourself to greater love and growth.`;
      case "Sagittarius":
        return `Sagittarius, you're adventurous and optimistic. Health-wise, embrace activities that allow you to explore new environments, such as hiking or traveling. In education, your thirst for knowledge and exploration will lead you to a variety of subjects, but be sure to follow through with your studies. Financially, you may find success in ventures that align with your passion for freedom and adventure. In love, your spontaneous nature makes you a fun partner, but it’s important to balance this with commitment. Sagittarius, your open-mindedness and desire to explore new horizons are your greatest strengths. Use these traits to embrace new experiences and learn from the world around you. Focus on creating a sense of stability in your personal life while remaining true to your adventurous spirit.`;
      case "Capricorn":
        return `Capricorns are practical, disciplined, and hardworking. Health-wise, focus on creating a structured routine that includes both work and rest. Your dedication and persistence will serve you well in education, where you thrive in environments that require focus and long-term planning. Financially, Capricorns excel in managing resources and making wise investments. In love, you seek a stable, reliable partner who shares your long-term vision. However, be cautious of becoming too focused on work and neglecting your emotional needs. Capricorn, your ability to stay focused and disciplined is key to your success. Stay grounded and patient as you pursue your long-term goals, and remember that work-life balance is essential for your overall well-being.`;
      case "Aquarius":
        return `Aquarians are independent and innovative. Health-wise, find ways to stay active while engaging in mental and intellectual challenges. In education, your unique approach to learning will help you excel in unconventional fields. Financially, you thrive when you can be creative and forward-thinking. In love, you seek intellectual connection and value freedom in relationships. However, be mindful of being overly detached and prioritize emotional intimacy. Aquarius, your ability to think outside the box and your progressive ideas are your greatest assets. Use your innovation to drive change in your life and in the world. Stay true to your vision while finding ways to stay connected with others.`;
      case "Pisces":
        return `Pisces, you're intuitive and compassionate. Health-wise, prioritize both mental and emotional well-being by engaging in creative and restorative practices. In education, your imagination and empathy will guide you toward fields that help others or inspire creativity. Financially, you may find success in areas related to the arts or helping professions. In love, you are deeply empathetic and seek a spiritual connection with your partner. However, be cautious of being overly idealistic or self-sacrificing. Pisces, your ability to connect with others on a deep level is your strength. Use this gift to bring healing and compassion to the world while ensuring that you nurture your own well-being. Follow your intuition and trust that it will lead you to your true path.`;
      default:
        return `Your personalized recommendation will depend on your unique birth sign!`;
    }
  };
  

  return (
    <div className="relative min-h-screen bg-gray-100">
      <header className="bg-white shadow-md fixed top-0 w-full">
        <div className="logoHead w-full h-16 flex items-center justify-between px-4 py-2 z-10 border-b-2">
          <button
            onClick={() => window.history.back()}
            aria-label="Go back to home"
            className="text-gray-600 hover:text-black transition"
          >
            <span className="text-3xl bg-white px-5 py-2 rounded-3xl hover:shadow transition">
              &larr; <strong className="text-xl">Back</strong>
            </span>
          </button>
          <h1 className="text-4xl font-bold">Subha Labh</h1>
          <div className="userProfileWrap">
            <Link to="/profile" aria-label="Go to user profile">
              <UserIcon className="w-[45px] h-[45px] bg-black text-white rounded-full p-2" />
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto">
        <div className="relative flex flex-col sm:flex-row items-center justify-center min-h-screen px-4 sm:pl-10 py-16 mt-8">
          <div className="textWrapper flex flex-col items-center">
            <h1 className="text-6xl font-bold text-center text-black mb-6">
              Personal Recommendation for {name}
            </h1>
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
              <p className="text-center text-gray-600">
                Your zodiac sign is {zodiacSign}.
              </p>
              <p className="mt-6 text-gray-700">
                {generateRecommendation(zodiacSign)}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Recommendation;
