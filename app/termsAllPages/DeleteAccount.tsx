import React from 'react';
import { View, Text, ScrollView, StyleSheet, Linking, TouchableOpacity, StatusBar } from 'react-native';
import Colors from '@/utils/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const DeleteAccount = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={Colors.WHITE} />
            <SafeAreaView style={styles.safeArea}>
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                        <Ionicons name="arrow-back" size={24} color={Colors.PRIMARY} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Delete Account</Text>
                    <View style={styles.headerPlaceholder} />
                </View>

                {/* Content */}
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                    {/* Title Section */}
                    <View style={styles.titleContainer}>
                        <Ionicons name="trash" size={32} color={Colors.PRIMARY} />
                        <View>
                            <Text style={styles.title}>Delete My Account</Text>
                            <Text style={styles.subtitle}>Full Control Over Your Personal Information</Text>
                        </View>
                    </View>

                    {/* Introduction */}
                    <View style={styles.card}>
                        <Text style={styles.paragraph}>
                            At Youlite, we value your privacy and give you full control over your personal information.
                        </Text>
                        <Text style={styles.paragraph}>
                            If you wish to delete your Youlite account permanently, please follow the instructions below:
                        </Text>
                    </View>

                    {/* How to Request Account Deletion */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="mail" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>How to Request Account Deletion</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            Currently, account deletion can only be requested through our support team.
                        </Text>
                        <Text style={styles.paragraph}>
                            Please send an email to support@youlitestore.in from your registered email ID with the subject line "Delete My Youlite Account".
                        </Text>
                    </View>

                    {/* Process Steps */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="list" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>Process After Request</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            Once your request is received, our team will:
                        </Text>
                        <View style={styles.stepItem}>
                            <View style={styles.stepNumber}>
                                <Text style={styles.stepText}>1</Text>
                            </View>
                            <Text style={styles.stepContent}>Verify your account details</Text>
                        </View>
                        <View style={styles.stepItem}>
                            <View style={styles.stepNumber}>
                                <Text style={styles.stepText}>2</Text>
                            </View>
                            <Text style={styles.stepContent}>Permanently delete your account and related personal data from our system within 7 working days</Text>
                        </View>
                        <View style={styles.stepItem}>
                            <View style={styles.stepNumber}>
                                <Text style={styles.stepText}>3</Text>
                            </View>
                            <Text style={styles.stepContent}>Send you a confirmation email after successful deletion</Text>
                        </View>
                    </View>

                    {/* Important Notes */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="warning" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>Important Notes</Text>
                        </View>
                        <View style={styles.noteItem}>
                            <Ionicons name="remove-circle" size={16} color="#EF4444" />
                            <Text style={styles.noteText}>
                                After deletion, your previous orders and saved information will no longer be accessible.
                            </Text>
                        </View>
                        <View style={styles.noteItem}>
                            <Ionicons name="remove-circle" size={16} color="#EF4444" />
                            <Text style={styles.noteText}>
                                If you have pending refunds or active orders, please wait until they are completed before requesting account deletion.
                            </Text>
                        </View>
                    </View>

                    {/* Quick Action Card */}
                    <View style={styles.actionCard}>
                        <Ionicons name="mail-open" size={24} color={Colors.PRIMARY} />
                        <Text style={styles.actionTitle}>Ready to Delete Your Account?</Text>
                        <Text style={styles.actionText}>
                            Send your deletion request directly to our support team
                        </Text>
                        <TouchableOpacity
                            style={styles.emailButton}
                            onPress={() => Linking.openURL('mailto:support@youlitestore.in?subject=Delete My Youlite Account')}
                        >
                            <Ionicons name="mail" size={18} color={Colors.WHITE} />
                            <Text style={styles.emailButtonText}>Email Support Team</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Alternative Contact */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="call" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>Alternative Contact Method</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            You can also contact us via phone for account deletion assistance:
                        </Text>
                        <View style={styles.contactCard}>
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

export default DeleteAccount;

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
    stepItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 12,
    },
    stepNumber: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: Colors.PRIMARY || '#2563EB',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
        marginTop: 2,
    },
    stepText: {
        color: Colors.WHITE || '#FFFFFF',
        fontSize: 12,
        fontWeight: 'bold',
    },
    stepContent: {
        fontSize: 14,
        lineHeight: 20,
        color: '#4B5563',
        flex: 1,
    },
    noteItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 12,
    },
    noteText: {
        fontSize: 14,
        lineHeight: 20,
        color: '#4B5563',
        flex: 1,
        marginLeft: 8,
    },
    actionCard: {
        backgroundColor: '#F0F9FF',
        padding: 20,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#BAE6FD',
        alignItems: 'center',
        marginBottom: 24,
    },
    actionTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: Colors.PRIMARY || '#2563EB',
        marginTop: 12,
        marginBottom: 8,
        textAlign: 'center',
    },
    actionText: {
        fontSize: 14,
        color: '#4B5563',
        textAlign: 'center',
        marginBottom: 16,
        lineHeight: 20,
    },
    emailButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.PRIMARY || '#2563EB',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 8,
        gap: 8,
    },
    emailButtonText: {
        color: Colors.WHITE || '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
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