import React from 'react';
import { View, Text, ScrollView, StyleSheet, Linking, TouchableOpacity, StatusBar } from 'react-native';
import Colors from '@/utils/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const AccountPolicy = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={Colors.WHITE} />
            <SafeAreaView style={styles.safeArea}>
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                        <Ionicons name="arrow-back" size={24} color={Colors.PRIMARY} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>User Account Policy</Text>
                    <View style={styles.headerPlaceholder} />
                </View>

                {/* Content */}
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                    {/* Title Section */}
                    <View style={styles.titleContainer}>
                        <Ionicons name="person-circle" size={32} color={Colors.PRIMARY} />
                        <View>
                            <Text style={styles.title}>User Account Policy</Text>
                            <Text style={styles.subtitle}>Secure & Transparent Account Experience</Text>
                        </View>
                    </View>

                    {/* Introduction */}
                    <View style={styles.card}>
                        <Text style={styles.paragraph}>
                            At Youlite Pvt. Ltd., we are committed to providing a secure and transparent account experience. This policy explains how user accounts are created, secured, managed, and deleted within our app.
                        </Text>
                    </View>

                    {/* Account Creation & Login */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="person-add" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>Account Creation & Login</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            Users can create and access their accounts using a simple OTP-based login system. During signup or login, only essential details such as name, phone number, and address are collected for order processing and delivery. All information is securely stored and handled as outlined in our Privacy Policy.
                        </Text>
                    </View>

                    {/* OTP Login Security */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="lock-closed" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>OTP Login Security</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            We use secure OTP authentication to protect user accounts. OTPs are sent only to the registered mobile number, ensuring safe and private access. Youlite Pvt. Ltd. never asks for OTPs through calls, messages, or emails, and users must keep their registered number secure.
                        </Text>
                    </View>

                    {/* User Privacy & Data Use */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="eye-off" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>User Privacy & Data Use</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            All personal details shared during login or account creation are treated with strict confidentiality. The information is used only for identification, order processing, and delivery purposes. We do not sell, misuse, or collect unnecessary personal data from users.
                        </Text>
                    </View>

                    {/* Account Deletion Request */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="trash" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>Account Deletion Request</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            Users may request deletion of their account at any time, and the process is simple and transparent. To delete an account, users can contact our support team through email at support@youlitestore.in or by phone at +91 8269233078. After receiving a valid request, deletion will be initiated promptly.
                        </Text>
                    </View>

                    {/* Data Deletion Timeline */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="time" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>Data Deletion Timeline</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            Once an account deletion request is received, personal data is removed from our systems within 7–15 working days. However, certain order-related information may be retained temporarily for legal, tax, or compliance purposes as required by law.
                        </Text>
                    </View>

                    {/* Disabled or Suspended Accounts */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="warning" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>Disabled or Suspended Accounts</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            Youlite Pvt. Ltd. may disable or suspend an account if fraudulent activity, misuse of offers, COD abuse, harassment, or policy violations are detected. Suspended accounts may require identity verification or further review before reactivation.
                        </Text>
                    </View>

                    {/* User Responsibilities */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="checkmark-circle" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>User Responsibilities</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            Users are responsible for ensuring that the information provided in their account is accurate and updated. Any suspicious activity, unauthorized login, or security concern should be reported to our support team immediately for assistance.
                        </Text>
                    </View>

                    {/* Support for Account Issues */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="help-circle" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>Support for Account Issues</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            For any concerns related to login, account access, deletion requests, or security issues, users can reach out to our support team via:
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

                        <Text style={styles.paragraph}>
                            Our team is always ready to provide help and guidance.
                        </Text>
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

export default AccountPolicy;

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
    subtitle: {
        fontSize: 14,
        color: '#6B7280',
        marginLeft: 12,
        marginTop: 4,
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
    contactCard: {
        backgroundColor: '#FFFFFF',
        padding: 16,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#F0F0F0',
        marginVertical: 8,
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