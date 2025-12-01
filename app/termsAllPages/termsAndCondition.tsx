import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import Colors from '@/utils/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const TermsAndConditions = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={Colors.WHITE} />
            <SafeAreaView style={styles.safeArea}>
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                        <Ionicons name="arrow-back" size={24} color={Colors.PRIMARY} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Terms & Conditions</Text>
                    <View style={styles.headerPlaceholder} />
                </View>

                {/* Content */}
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                    {/* Title Section */}
                    <View style={styles.titleContainer}>
                        <Ionicons name="document-text" size={32} color={Colors.PRIMARY} />
                        <View>
                            <Text style={styles.title}>Terms & Conditions</Text>
                            <Text style={styles.effectiveDate}>Effective Date: 22-11-25</Text>
                        </View>
                    </View>

                    {/* Introduction */}
                    <View style={styles.card}>
                        <Text style={styles.paragraph}>
                            These Terms & Conditions outline the rules and guidelines for using our mobile application. By installing or using the app, you agree to all the terms mentioned in this document.
                        </Text>
                    </View>

                    {/* Original Content */}
                    <View style={styles.card}>
                        <Text style={styles.paragraph}>
                            Thank you for accessing/shopping at YOULITE ENERGY PRIVATE LIMITED. This site is owned and operated by YOULITE ENERGY PRIVATE LIMITED (hereinafter referred to as "the Company"). By accessing or shopping on this site, you indicate your unconditional acceptance of these Terms & Conditions. We reserve the right, at our sole discretion, to update or revise these Terms & Conditions at any time. Continued use of the site following the posting of any changes shall constitute your acceptance of those changes.
                        </Text>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.paragraph}>
                            At YOULITE ENERGY PRIVATE LIMITED, we strive to create a space where you can explore and shop for all your favorite products in a safe and secure environment. All products and information displayed on this website constitute an "invitation to offer." The Company reserves the right to accept or reject your offer. Your order for purchase constitutes your "offer," which shall be subject to the Terms & Conditions listed below.
                        </Text>
                    </View>

                    {/* New Content Sections */}
                    {/* 1. App Ownership */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="business" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>1. App Ownership</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            This application is owned and operated by Youlite Pvt. Ltd.
                            All content, features, designs, and services within the app are the exclusive property of the company. No part of the app may be copied, distributed, or misused in any form.
                        </Text>
                    </View>

                    {/* 2. Business & Legal Compliance */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="scale" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>2. Business & Legal Compliance</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            Youlite Pvt. Ltd. is a legally registered business in India and follows all applicable e-commerce, consumer protection, and tax regulations. All orders, payments, and services fall under Indian laws and jurisdiction.
                        </Text>
                    </View>

                    {/* 3. User Responsibilities */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="people" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>3. User Responsibilities</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            Users must provide accurate information such as name, phone number, and delivery address. You must use the app only for lawful shopping purposes.
                            You are responsible for maintaining the security of your login details. Any misuse, including fake orders or false information, may lead to account suspension or legal action by Youlite Pvt. Ltd.
                        </Text>
                    </View>

                    {/* 4. Fraud Monitoring & Protection */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="shield-checkmark" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>4. Fraud Monitoring & Protection</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            Youlite Pvt. Ltd. actively monitors all user activities to prevent fraud. Suspicious orders may be verified through calls or messages. Such orders may be held or cancelled without prior notice. Repeated fraudulent behavior can lead to permanent account blocking and legal action under Indian cyber laws.
                        </Text>
                    </View>

                    {/* 5. Fake Orders & COD Misuse Policy */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="warning" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>5. Fake Orders & COD Misuse Policy</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            For Cash-on-Delivery (COD) orders, users must ensure availability at the delivery location. Repeated refusal of COD orders, fake addresses, or non-collection of parcels is treated as misuse.
                            Youlite Pvt. Ltd. reserves the right to disable COD for such users, cancel their future orders, or permanently suspend their account.
                        </Text>
                    </View>

                    {/* 6. Order Acceptance Policy */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="cart" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>6. Order Acceptance Policy</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            An order is confirmed only after successful payment (for prepaid orders) or verification (for COD orders).
                            Youlite Pvt. Ltd. may cancel orders due to product unavailability, incorrect address details, payment issues, suspicious activity, or delivery limitations. Users will be informed in such cases.
                        </Text>
                    </View>

                    {/* 7. Cancellation Policy */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="close-circle" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>7. Cancellation Policy</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            Users may request order cancellation only before the product is packed or shipped. Once dispatched, cancellations cannot be processed.
                            Youlite Pvt. Ltd. also reserves the right to cancel any order due to out-of-stock items, quality issues, or suspected fraud. Refunds will be processed as per the refund policy.
                        </Text>
                    </View>

                    {/* 8. Platform Liability */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="alert-circle" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>8. Platform Liability</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            While Youlite Pvt. Ltd. strives to provide a smooth shopping experience, the company is not liable for delays caused by courier partners, logistics challenges, or user errors such as wrong addresses.
                            The company is also not responsible for temporary app downtime due to maintenance or technical updates. Certain circumstances like weather issues, strikes, or natural events are beyond our control.
                        </Text>
                    </View>

                    {/* 9. Updates to Terms & Conditions */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="refresh-circle" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>9. Updates to Terms & Conditions</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            Youlite Pvt. Ltd. may update these Terms & Conditions whenever required. Changes will be updated within the app. Continued use of the app after changes means you accept the revised terms.
                        </Text>
                    </View>

                    {/* 10. Contact Information */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="mail" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>10. Contact Information</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            For any support, queries, or legal concerns, you may contact us at:
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

                    {/* Original Sections */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="person-circle" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>Eligibility to Use Our Site</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            Use of the Site is available only to persons who can legally enter into contracts under applicable laws. Persons who are "incompetent to contract" within the meaning of the Indian Contract Act, 1872, including undischarged insolvents, etc., are not eligible to use the Site. The Company reserves the right to terminate your access if it is discovered that you are under the age of 18 years or otherwise disqualified under the Indian Contract Act, 1872.
                        </Text>
                    </View>

                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="person" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>Membership</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            It is not essential to create an account to shop with us; you may shop as a guest. However, if you choose to register, you agree to provide true, accurate, current, and complete information about yourself as prompted by the registration form. Registration where prohibited under law shall be void. YOULITE ENERGY PRIVATE LIMITED reserves the right to revoke or terminate your registration for any reason, at any time, without notice.
                        </Text>
                    </View>

                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="chatbubbles" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>Electronic Communications</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            When you use the site, send emails, or otherwise communicate with us electronically, you consent to receive communications from us electronically as well. We may communicate with you via email, SMS, or by posting notices on the site, as required.
                        </Text>
                    </View>

                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="chatbox" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>Reviews, Feedback, Submissions</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            All reviews, comments, feedback, suggestions, ideas, and other submissions disclosed, submitted, or offered to YOULITE ENERGY PRIVATE LIMITED in connection with your use of the site (collectively referred to as "Comments") shall remain the property of the Company.
                        </Text>
                        <Text style={styles.paragraph}>
                            Such disclosure or submission constitutes an assignment to the Company of all worldwide rights, titles, and interests in copyrights and other intellectual properties contained in the Comments. The Company will be entitled to use, reproduce, disclose, modify, adapt, create derivative works from, publish, display, and distribute any Comments you submit, for any purpose whatsoever, without restriction or compensation to you.
                        </Text>
                        <Text style={styles.paragraph}>
                            By submitting Comments, you agree that your submissions will not violate any third-party rights, including copyrights, trademarks, or privacy rights; will not contain defamatory, unlawful, abusive, obscene, or harmful material, or software viruses; will not use false information or impersonate another person/entity. You remain solely responsible for the content you submit and agree to indemnify YOULITE ENERGY PRIVATE LIMITED against all claims arising from such submissions.
                        </Text>
                    </View>

                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="information-circle" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>Accuracy of Content / Product Information</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            While YOULITE ENERGY PRIVATE LIMITED strives to provide accurate product and pricing information, typographical or technical errors may occur. If a product is listed at an incorrect price or with incorrect details due to an error, the Company reserves the right, at its sole discretion, to correct the price or product information, or to refuse/cancel any orders placed for such products (unless the product has already been dispatched).
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

export default TermsAndConditions;

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
    contactCard: {
        backgroundColor: '#FFFFFF',
        padding: 16,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#F0F0F0',
        marginTop: 8,
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