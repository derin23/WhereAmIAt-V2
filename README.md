# WhereAmIAt-V2

A React-based web application that helps you find your current location and provides your address in case of emergencies. Perfect for situations where you need to quickly share your location with emergency services (911) or others.

## 🎯 Purpose

This app is designed to be a simple, reliable tool for finding your exact location when you're lost or in an emergency situation. It uses your device's GPS capabilities to determine your coordinates and converts them into a readable address format.

## ✨ Features

- **Real-time Location Detection**: Uses browser geolocation API to get your current coordinates
- **Address Conversion**: Converts GPS coordinates to human-readable addresses using OpenCage Geocoding API
- **Emergency-Ready**: Provides formatted address information perfect for emergency situations
- **Interactive Map Option**: Offers to open your location in an interactive map
- **Responsive Design**: Works on both desktop and mobile devices
- **Simple Interface**: Clean, intuitive design for quick access during emergencies

## 🚀 How It Works

1. **Click "Get My Address"** - The app requests permission to access your location
2. **GPS Detection** - Your device's GPS determines your exact coordinates
3. **Address Lookup** - Coordinates are sent to OpenCage Geocoding API for address conversion
4. **Display Results** - Your formatted address is displayed in an alert
5. **Optional Map View** - You can choose to view your location on an interactive map

## 🛠️ Technology Stack

- **Frontend**: React 16.8.6
- **Routing**: React Router DOM 5.0.1
- **Styling**: Bootstrap (via CDN)
- **Geolocation**: Browser Geolocation API
- **Geocoding**: OpenCage Data API
- **Hosting**: Firebase Hosting
- **Build Tool**: Create React App

## 📋 Prerequisites

- Node.js (version 12 or higher)
- npm or yarn package manager
- Modern web browser with geolocation support
- Internet connection (required for API calls)

## 🚀 Getting Started

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/WhereAmIAt-V2.git
   cd WhereAmIAt-V2
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 🌐 Deployment

This app is configured for Firebase Hosting deployment:

1. **Install Firebase CLI**

   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**

   ```bash
   firebase login
   ```

3. **Build the project**

   ```bash
   npm run build
   ```

4. **Deploy to Firebase**
   ```bash
   firebase deploy
   ```

## 🔧 Configuration

### API Keys

The app uses OpenCage Data API for geocoding. The current API key is embedded in the code, but for production use, consider:

1. Moving the API key to environment variables
2. Implementing rate limiting
3. Adding error handling for API failures

### Environment Variables

Create a `.env` file in the root directory:

```env
REACT_APP_OPENCAGE_API_KEY=your_api_key_here
```

## 📱 Browser Compatibility

- Chrome 50+
- Firefox 55+
- Safari 10+
- Edge 12+

**Note**: Geolocation requires HTTPS in production environments.

## 🚨 Emergency Use

This app is designed for emergency situations. When using:

1. **Allow location access** when prompted
2. **Share the displayed address** with emergency services
3. **Use the map option** for visual confirmation of your location
4. **Keep the app bookmarked** for quick access

## 🔒 Privacy & Security

- **Location Data**: Only processed locally and sent to OpenCage API for address conversion
- **No Storage**: Your location data is not stored or logged
- **HTTPS Required**: Geolocation API requires secure connection in production

## 🐛 Troubleshooting

### Common Issues

1. **"Geolocation not supported"**

   - Ensure you're using a modern browser
   - Check that HTTPS is enabled in production

2. **Location permission denied**

   - Allow location access in browser settings
   - Refresh the page and try again

3. **API errors**
   - Check internet connection
   - Verify API key is valid
   - Check OpenCage API status

## 📄 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (irreversible)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Derin Joseph**

- Portfolio: [derinjoseph.com](http://www.derinjoseph.com)
- GitHub: [@derin23](https://github.com/derin23)
- LinkedIn: [derin-k-joseph](https://www.linkedin.com/in/derin-k-joseph/)

## 🙏 Acknowledgments

- OpenCage Data for providing the geocoding API
- Create React App for the project scaffolding
- Firebase for hosting services
- Bootstrap for UI components

---

**⚠️ Emergency Notice**: This app is designed to assist in emergency situations but should not replace proper emergency preparedness. Always have backup methods for location sharing and emergency communication.
