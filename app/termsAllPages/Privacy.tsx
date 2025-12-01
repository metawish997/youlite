import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import Colors from '@/utils/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const Privacy = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.WHITE} />
      <SafeAreaView style={styles.safeArea}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color={Colors.PRIMARY} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Privacy Policy</Text>
          <View style={styles.headerPlaceholder} />
        </View>

        {/* Content */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.titleContainer}>
            <Ionicons name="shield-checkmark" size={32} color={Colors.PRIMARY} />
            <View>
              <Text style={styles.title}>Privacy Policy</Text>
              <Text style={styles.effectiveDate}>Effective Date: 22-11-25</Text>
            </View>
          </View>

          <View style={styles.card}>
            <Text style={styles.paragraph}>
              We are committed to protecting your privacy. This Privacy Policy explains what data we collect, how we use it, how it is shared, and how we keep it secure. By using our app, you agree to the practices described in this document.
            </Text>
          </View>

          {/* Information We Collect Section */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Ionicons name="information-circle" size={20} color={Colors.PRIMARY} />
              <Text style={styles.heading}>Information We Collect</Text>
            </View>
            <Text style={styles.paragraph}>
              We collect certain information to process orders, enable secure payments, and improve your overall app experience. This may include your name, phone number, shipping address, and other relevant details required for smooth functioning of the application.
            </Text>
            <Text style={styles.paragraph}>
              We do not collect or store any debit/credit card details. All payments are handled securely by Razorpay as per RBI and PCI-DSS guidelines.
              We may also collect device information such as IP address, operating system, and device type for security and performance purposes.
            </Text>
            <Text style={styles.paragraph}>
              Additionally, we use Google Firebase to gather crash reports and usage analytics. This information helps us fix issues, enhance performance, and understand how users interact with the app. Razorpay may collect transaction IDs and related payment verification details to ensure safe and successful payments.
            </Text>
          </View>

          {/* Why We Collect Your Information Section */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Ionicons name="help-circle" size={20} color={Colors.PRIMARY} />
              <Text style={styles.heading}>Why We Collect Your Information</Text>
            </View>
            <Text style={styles.paragraph}>
              Your information is collected solely to provide essential app services. This includes placing and delivering orders, verifying your identity, coordinating deliveries, processing payments, and communicating with you regarding updates or support.
            </Text>
            <Text style={styles.paragraph}>
              We also use your data to improve app stability, enhance features, and maintain compliance with legal, operational, and security requirements.
            </Text>
          </View>

          {/* How Your Information Is Shared Section */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Ionicons name="share-social" size={20} color={Colors.PRIMARY} />
              <Text style={styles.heading}>How Your Information Is Shared</Text>
            </View>
            <Text style={styles.paragraph}>
              We never sell or misuse your personal data. However, to operate smoothly, certain information may be shared with trusted service partners.
            </Text>

            <View style={styles.partnerCard}>
              <View style={[styles.partnerIcon, { backgroundColor: '#E3F2FD' }]}>
                <Ionicons name="logo-google" size={16} color={Colors.PRIMARY} />
              </View>
              <View style={styles.partnerContent}>
                <Text style={styles.partnerTitle}>Google Firebase</Text>
                <Text style={styles.partnerText}>may receive data related to analytics and crash reports</Text>
              </View>
            </View>

            <View style={styles.partnerCard}>
              <View style={[styles.partnerIcon, { backgroundColor: '#E8F5E8' }]}>
                <Ionicons name="card" size={16} color="#2E7D32" />
              </View>
              <View style={styles.partnerContent}>
                <Text style={styles.partnerTitle}>Razorpay</Text>
                <Text style={styles.partnerText}>receives information necessary to verify and process payments</Text>
              </View>
            </View>

            <View style={styles.partnerCard}>
              <View style={[styles.partnerIcon, { backgroundColor: '#FFF3E0' }]}>
                <Ionicons name="bicycle" size={16} color="#EF6C00" />
              </View>
              <View style={styles.partnerContent}>
                <Text style={styles.partnerTitle}>Delivery Partners</Text>
                <Text style={styles.partnerText}>receive your contact details and address to ensure accurate order delivery</Text>
              </View>
            </View>

            <View style={styles.partnerCard}>
              <View style={[styles.partnerIcon, { backgroundColor: '#FCE4EC' }]}>
                <Ionicons name="cloud" size={16} color="#C2185B" />
              </View>
              <View style={styles.partnerContent}>
                <Text style={styles.partnerTitle}>Cloud Hosting Providers</Text>
                <Text style={styles.partnerText}>may store app-related data securely on our behalf</Text>
              </View>
            </View>

            <Text style={styles.paragraph}>
              All service providers follow strict data protection standards and use your information only for the intended purpose.
            </Text>
          </View>

          {/* Data Protection & Security Section */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Ionicons name="lock-closed" size={20} color={Colors.PRIMARY} />
              <Text style={styles.heading}>Data Protection & Security</Text>
            </View>
            <Text style={styles.paragraph}>
              We take strong steps to keep your data secure. All communication between you and our servers is encrypted using HTTPS. Our systems follow secure server practices, firewalls, and encrypted databases to safeguard information.
            </Text>
            <Text style={styles.paragraph}>
              Payment processing is handled through Razorpay, which complies with all required security standards, including PCI-DSS. These measures help prevent unauthorized access, misuse, or loss of your data.
            </Text>
          </View>

          {/* Consent Section */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Ionicons name="checkmark-circle" size={20} color={Colors.PRIMARY} />
              <Text style={styles.heading}>Consent</Text>
            </View>
            <Text style={styles.paragraph}>
              By using our app, you consent to the collection and use of your information as detailed in this Privacy Policy. We may request permission for certain device-based features when needed, and granting such permissions allows the app to function smoothly.
            </Text>
          </View>

          {/* Data Retention Section */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Ionicons name="time" size={20} color={Colors.PRIMARY} />
              <Text style={styles.heading}>Data Retention</Text>
            </View>
            <Text style={styles.paragraph}>
              We keep your information only for as long as necessary to fulfil the purposes outlined in this Privacy Policy. Data related to orders and accounts is retained as required for legal, operational, and security reasons. After the retention period, your information is securely deleted or anonymized.
            </Text>
          </View>

          {/* Updates Section */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Ionicons name="refresh-circle" size={20} color={Colors.PRIMARY} />
              <Text style={styles.heading}>Updates to This Privacy Policy</Text>
            </View>
            <Text style={styles.paragraph}>
              We may update this Privacy Policy occasionally to reflect improvements in our processes or changes in legal requirements. Any updates will be posted within the app with a revised effective date.
            </Text>
          </View>

          {/* Contact Information Section */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Ionicons name="mail" size={20} color={Colors.PRIMARY} />
              <Text style={styles.heading}>Contact Information</Text>
            </View>
            <Text style={styles.paragraph}>
              For any queries, concerns, or support requests, you can reach us at:
            </Text>

            <View style={styles.contactCard}>
              <View style={styles.contactItem}>
                <Ionicons name="mail-outline" size={18} color={Colors.PRIMARY} />
                <Text style={styles.contactText}>Email: support@youlitestore.in</Text>
              </View>
              <View style={styles.contactItem}>
                <Ionicons name="call-outline" size={18} color={Colors.PRIMARY} />
                <Text style={styles.contactText}>Phone: +91 8269233078</Text>
              </View>
            </View>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Last updated: {new Date().toLocaleDateString()}
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Privacy;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE || '#FFFFFF',
  },
  safeArea: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: Colors.WHITE || '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  backButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#F8F9FA',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.PRIMARY || '#2563EB',
  },
  headerPlaceholder: {
    width: 40,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 24,
    padding: 16,
    backgroundColor: '#F8F9FA',
    borderRadius: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginLeft: 12,
    color: Colors.PRIMARY || '#2563EB',
    flex: 1,
  },
  effectiveDate: {
    fontSize: 14,
    color: '#6B7280',
    marginLeft: 12,
    marginTop: 4,
    fontStyle: 'italic',
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  heading: {
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 8,
    color: Colors.PRIMARY || '#2563EB',
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 22,
    color: '#4B5563',
    marginBottom: 12,
  },
  partnerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  partnerIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  partnerContent: {
    flex: 1,
  },
  partnerTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 2,
  },
  partnerText: {
    fontSize: 12,
    color: '#6B7280',
    lineHeight: 16,
  },
  contactCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  contactText: {
    fontSize: 14,
    color: '#4B5563',
    marginLeft: 12,
  },
  footer: {
    marginTop: 24,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#9CA3AF',
    fontStyle: 'italic',
  },
});