import React from 'react';
import { View, Text, ScrollView, StyleSheet, Linking, TouchableOpacity, StatusBar } from 'react-native';
import Colors from '@/utils/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const Warranty = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={Colors.WHITE} />
            <SafeAreaView style={styles.safeArea}>
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                        <Ionicons name="arrow-back" size={24} color={Colors.PRIMARY} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Warranty Policy</Text>
                    <View style={styles.headerPlaceholder} />
                </View>

                {/* Content */}
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                    {/* Title Section */}
                    <View style={styles.titleContainer}>
                        <Ionicons name="shield-checkmark" size={32} color={Colors.PRIMARY} />
                        <View>
                            <Text style={styles.title}>Warranty Policy</Text>
                            <Text style={styles.subtitle}>Durable & Reliable Solar Products</Text>
                        </View>
                    </View>

                    {/* Introduction */}
                    <View style={styles.card}>
                        <Text style={styles.paragraph}>
                            At Youlite Pvt. Ltd., we are committed to providing durable and reliable solar products. This Warranty Policy explains when warranty applies, what it covers, and how customers can request support.
                        </Text>
                    </View>

                    {/* Warranty Availability */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="document-text" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>Warranty Availability</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            Warranty is applicable only on those products where warranty details are clearly mentioned on the product page. Each product may have a different warranty period, and the warranty will be valid strictly according to what is written on that specific product listing. Products that do not mention warranty are treated as non-warranty items.
                        </Text>
                    </View>

                    {/* Warranty Coverage */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="checkmark-circle" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>Warranty Coverage</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            The warranty covers manufacturing defects, internal technical issues, non-functional parts, or performance failures that occur during the warranty period. Customers must retain their invoice or order confirmation as proof of purchase to claim warranty.
                        </Text>
                    </View>

                    {/* Exclusions from Warranty */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="close-circle" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>Exclusions from Warranty</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            Warranty does not cover any form of physical damage, water damage (if product is not water-resistant), mishandling, burns, voltage fluctuations, unauthorized repairs, or damage caused by incorrect installation. Any issue created after delivery due to customer usage will not qualify for warranty service.
                        </Text>
                    </View>

                    {/* Warranty Duration */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="calendar" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>Warranty Duration</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            Most solar products come with 6–12 months warranty, depending on product type. The exact warranty duration will always be written on the product page, and all warranty services will follow the same details without exception.
                        </Text>
                    </View>

                    {/* Warranty Claim Process */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="build" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>Warranty Claim Process</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            To claim warranty, customers must contact our support team and provide their order ID, product photos or videos showing the issue, and the purchase invoice. Our team will verify the problem and guide the customer regarding repair, replacement, or further steps.
                        </Text>
                    </View>

                    {/* Replacement Under Warranty */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="swap-horizontal" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>Replacement Under Warranty</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            If a product has a valid warranty and the issue is confirmed as a manufacturing or technical fault, Youlite Pvt. Ltd. may provide a replacement unit. Replacement will only be offered after proper inspection and is not applicable for physical damage, misuse, or customer-caused problems.
                        </Text>
                    </View>

                    {/* Shipping for Warranty Claims */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="car" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>Shipping for Warranty Claims</Text>
                        </View>
                        <Text style={styles.paragraph}></Text>
                        For approved warranty claims, shipping charges for replacement may be covered by us depending on the situation. If the fault is not covered under warranty, the customer may need to bear inspection, return, or reshipping charges.
                    </View>

                    {/* Warranty Based on Product Page Information */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="information-circle" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>Warranty Based on Product Page Information</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            All warranty decisions will strictly follow what is written on the product page. If warranty is mentioned, the product will be covered for the stated duration; if warranty is not mentioned, the product will not have warranty. Warranty terms vary by product and must be followed exactly as listed.
                        </Text>
                    </View>

                    {/* Support for Warranty Claims */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="help-circle" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>Support for Warranty Claims</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            For any warranty questions or claim assistance, customers can contact us at:
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
                            Our team will help with verification and guide you through the entire warranty process.
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

export default Warranty;

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