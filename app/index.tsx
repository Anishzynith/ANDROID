// import React, { useState } from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
// } from 'react-native';

// export default function App() {
//   const [screen, setScreen] = useState('login');

//   return (
//     <SafeAreaView style={styles.container}>
//       {/* Title */}
//       <Text style={styles.title}>
//         {screen === 'login'
//           ? 'Login'
//           : screen === 'signup'
//           ? 'Sign Up'
//           : 'Forgot Password'}
//       </Text>

//       {/* Username - Signup Only */}
//       {screen === 'signup' && (
//         <TextInput
//           placeholder="Username"
//           style={styles.input}
//         />
//       )}

//       {/* Email */}
//       <TextInput
//         placeholder="Email"
//         keyboardType="email-address"
//         style={styles.input}
//       />

//       {/* Password - Not Needed in Forgot Password */}
//       {screen !== 'forgot' && (
//         <TextInput
//           placeholder="Password"
//           secureTextEntry
//           style={styles.input}
//         />
//       )}

//       {/* Forgot Password Link */}
//       {screen === 'login' && (
//         <TouchableOpacity
//           onPress={() => setScreen('forgot')}
//         >
//           <Text style={styles.forgotText}>
//             Forgot Password?
//           </Text>
//         </TouchableOpacity>
//       )}

//       {/* Main Button */}
//       <TouchableOpacity style={styles.button}>
//         <Text style={styles.buttonText}>
//           {screen === 'login'
//             ? 'Login'
//             : screen === 'signup'
//             ? 'Sign Up'
//             : 'Send Reset Link'}
//         </Text>
//       </TouchableOpacity>

//       {/* Navigation Links */}

//       {screen === 'login' && (
//         <TouchableOpacity
//           onPress={() => setScreen('signup')}
//         >
//           <Text style={styles.switchText}>
//             Don't have an account? Sign Up
//           </Text>
//         </TouchableOpacity>
//       )}

//       {screen === 'signup' && (
//         <TouchableOpacity
//           onPress={() => setScreen('login')}
//         >
//           <Text style={styles.switchText}>
//             Already have an account? Login
//           </Text>
//         </TouchableOpacity>
//       )}

//       {screen === 'forgot' && (
//         <TouchableOpacity
//           onPress={() => setScreen('login')}
//         >
//           <Text style={styles.switchText}>
//             Back to Login
//           </Text>
//         </TouchableOpacity>
//       )}
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F4F7FC',
//     justifyContent: 'center',
//     paddingHorizontal: 25,
//   },

//   title: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 35,
//   },

//   input: {
//     backgroundColor: '#FFFFFF',
//     borderWidth: 1,
//     borderColor: '#D9D9D9',
//     borderRadius: 12,
//     padding: 15,
//     marginBottom: 15,
//     fontSize: 16,
//   },

//   forgotText: {
//     color: '#007AFF',
//     textAlign: 'right',
//     marginBottom: 20,
//     fontWeight: '500',
//   },

//   button: {
//     backgroundColor: '#007AFF',
//     paddingVertical: 15,
//     borderRadius: 12,
//     marginTop: 10,
//   },

//   buttonText: {
//     color: '#FFFFFF',
//     textAlign: 'center',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },

//   switchText: {
//     textAlign: 'center',
//     marginTop: 20,
//     color: '#007AFF',
//     fontSize: 15,
//     fontWeight: '500',
//   },
// });

import { Redirect } from 'expo-router';

export default function Index() {
  return <Redirect href="/login" />;
}