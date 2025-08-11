'use client'

import { 
  MicrophoneIcon, 
  MagnifyingGlassIcon, 
  UserGroupIcon, 
  ChartBarIcon,
  ShieldCheckIcon,
  DevicePhoneMobileIcon 
} from '@heroicons/react/24/outline'

export function FeaturesSection() {
  const features = [
    {
      icon: MicrophoneIcon,
      title: 'Voice-Powered Search',
      description: 'Search for properties using natural language and voice commands. Just say what you\'re looking for.'
    },
    {
      icon: MagnifyingGlassIcon,
      title: 'AI-Powered Recommendations',
      description: 'Get intelligent property suggestions based on your preferences, search history, and market trends.'
    },
    {
      icon: UserGroupIcon,
      title: 'Expert Agent Network',
      description: 'Connect with experienced real estate professionals who understand your local market.'
    },
    {
      icon: ChartBarIcon,
      title: 'Market Analytics',
      description: 'Access comprehensive market data, price trends, and neighborhood insights to make informed decisions.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Secure & Private',
      description: 'Your data is protected with enterprise-grade security and privacy controls.'
    },
    {
      icon: DevicePhoneMobileIcon,
      title: 'Mobile-First Design',
      description: 'Optimized for all devices with a responsive design that works seamlessly on mobile and desktop.'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose NestLink?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of real estate with cutting-edge technology and exceptional service.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}