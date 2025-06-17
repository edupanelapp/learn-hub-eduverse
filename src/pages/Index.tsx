
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { BookOpen, Users, Award, Clock, Star, Play, CheckCircle, Globe, Zap } from "lucide-react";

const Index = () => {
  const courses = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      description: "Learn HTML, CSS, and JavaScript from scratch",
      image: "/placeholder.svg",
      price: "$99",
      rating: 4.8,
      students: 2340,
      duration: "8 weeks",
      level: "Beginner"
    },
    {
      id: 2,
      title: "Data Science & Analytics",
      description: "Master Python, SQL, and machine learning",
      image: "/placeholder.svg",
      price: "$149",
      rating: 4.9,
      students: 1890,
      duration: "12 weeks",
      level: "Intermediate"
    },
    {
      id: 3,
      title: "Digital Marketing Mastery",
      description: "Complete guide to modern marketing strategies",
      image: "/placeholder.svg",
      price: "$79",
      rating: 4.7,
      students: 3200,
      duration: "6 weeks",
      level: "Beginner"
    }
  ];

  const features = [
    {
      icon: BookOpen,
      title: "Expert-Led Courses",
      description: "Learn from industry professionals with years of experience"
    },
    {
      icon: Globe,
      title: "Global Community",
      description: "Connect with learners from around the world"
    },
    {
      icon: Award,
      title: "Certified Learning",
      description: "Earn certificates upon successful course completion"
    },
    {
      icon: Zap,
      title: "Interactive Learning",
      description: "Hands-on projects and real-world applications"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Developer",
      content: "EduPanel transformed my career. The courses are practical and the instructors are amazing!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Data Analyst",
      content: "The best investment I've made in my professional development. Highly recommended!",
      rating: 5
    },
    {
      name: "Emma Davis",
      role: "Marketing Manager",
      content: "The quality of content and teaching methodology is exceptional. Worth every penny!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              EduPanel Learning Hub
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#courses" className="text-gray-600 hover:text-blue-600 transition-colors">Courses</a>
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">Reviews</a>
            <Button variant="outline">Sign In</Button>
            <Button>Get Started</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Transform Your Future with
              <span className="block">Expert-Led Learning</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands of learners advancing their careers with our comprehensive online courses. 
              Learn at your own pace with industry experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Play className="w-4 h-4 mr-2" />
                Start Learning Today
              </Button>
              <Button size="lg" variant="outline">
                Browse Courses
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-sm text-gray-600">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2 text-blue-600" />
                50,000+ Active Learners
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-2 text-yellow-500" />
                4.9/5 Average Rating
              </div>
              <div className="flex items-center">
                <Award className="w-4 h-4 mr-2 text-green-600" />
                Industry Recognized
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section id="courses" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Courses</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our most popular courses designed to help you achieve your career goals
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-t-lg"></div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{course.level}</Badge>
                    <span className="text-lg font-bold text-blue-600">{course.price}</span>
                  </div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      {course.rating}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {course.students.toLocaleString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {course.duration}
                    </div>
                  </div>
                  <Button className="w-full">Enroll Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose EduPanel?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide everything you need to succeed in your learning journey
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Students Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied learners who have transformed their careers
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated with Latest Courses
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get notified about new courses, special offers, and learning tips
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <Input 
              placeholder="Enter your email" 
              className="bg-white/90 border-0 focus:ring-2 focus:ring-white/50"
            />
            <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">EduPanel Learning Hub</span>
              </div>
              <p className="text-gray-400">
                Empowering learners worldwide with quality education and expert instruction.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Courses</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instructors</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Student Portal</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Certificates</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@edupanel.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Address: 123 Learning St, Education City</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EduPanel Learning Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
