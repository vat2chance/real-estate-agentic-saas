'use client'

import Link from 'next/link'
import { MicrophoneIcon, MagnifyingGlassIcon, UserGroupIcon } from '@heroicons/react/24/outline'

export function HeroSection() {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Find Your Dream Home
            <span className="block text-blue-600">With AI-Powered Search</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover properties using voice commands, advanced filters, and intelligent recommendations. 
            The future of real estate search is here.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/buy"
              className="btn-primary text-lg px-8 py-4 flex items-center justify-center space-x-2"
            >
              <MagnifyingGlassIcon className="h-6 w-6" />
              <span>Start Searching</span>
            </Link>
            <Link
              href="/agent"
              className="btn-secondary text-lg px-8 py-4 flex items-center justify-center space-x-2"
            >
              <UserGroupIcon className="h-6 w-6" />
              <span>Agent Portal</span>
            </Link>
          </div>
          
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <MicrophoneIcon className="h-5 w-5" />
              <span>Voice Search</span>
            </div>
            <div className="flex items-center space-x-2">
              <MagnifyingGlassIcon className="h-5 w-5" />
              <span>AI Recommendations</span>
            </div>
            <div className="flex items-center space-x-2">
              <UserGroupIcon className="h-5 w-6" />
              <span>Expert Agents</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}