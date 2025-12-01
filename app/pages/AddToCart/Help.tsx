import Colors from '@/utils/Colors';
import Dimenstion from '@/utils/Dimenstion';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

type HelpTopic = {
    id: number;
    title: string;
    icon: keyof typeof Ionicons.glyphMap;
    path: string;
};

type ExpandedSections = {
    [key: number]: boolean;
};

const Help = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedSections, setExpandedSections] = useState<ExpandedSections>({});

    const toggleFAQ = (faqId: number) => {
        setExpandedSections(prev => ({
            ...prev,
            [faqId]: !prev[faqId]
        }));
    };

    const popularTopics: HelpTopic[] = [
        { id: 1, title: 'Account Policy', icon: 'document-text', path: '/termsAllPages/AccountPolicy' },
        { id: 2, title: 'Shipping & Delivery Policy', icon: 'cube', path: '/termsAllPages/Shipping' },
        { id: 3, title: 'Refund, Return & Replacement Policy', icon: 'refresh-circle', path: '/termsAllPages/Return' },
        { id: 4, title: 'Privacy Policy', icon: 'shield-checkmark', path: '/termsAllPages/Privacy' },
        { id: 5, title: 'Payment Policy', icon: 'card', path: '/termsAllPages/Payment' },
        { id: 6, title: 'Warranty Policy', icon: 'build', path: '/termsAllPages/Warranty' },
        { id: 7, title: 'User Account Policy', icon: 'person-circle', path: '/termsAllPages/AccountPolicy' },
        { id: 8, title: 'Delete Account', icon: 'trash', path: '/termsAllPages/DeleteAccount' },
        { id: 9, title: '10% Discount Policy', icon: 'pricetag', path: '/termsAllPages/DiscountPolicy' },
    ];

    const faqs = [
        { id: 1, question: 'How does switching to solar lighting save money in the long run?', answer: 'While the initial cost might be slightly higher, solar lights pay for themselves within a few months because they require zero electricity to run. Once installed, your operational cost is free forever.' },
        { id: 2, question: 'Will my security lights work during a power outage or load shedding?', answer: 'Yes! This is one of the biggest advantages of solar energy. Since our lights operate independently of the main electrical grid, they will keep shining even if the entire neighborhood loses power.' },
        { id: 3, question: 'Why is solar lighting considered safer than traditional wired lighting?', answer: 'Solar lights operate on low-voltage DC power, which eliminates the risk of electric shocks, short circuits, or fire hazards associated with high-voltage AC wiring.' },
        { id: 4, question: 'How does using solar products contribute to a greener environment?', answer: 'By using solar lights, you are reducing the demand for fossil-fuel-based electricity. A single solar street light can save hundreds of kilograms of carbon emissions (CO2) over its lifespan. It is a simple yet powerful way to reduce your carbon footprint and combat climate change while lighting up your home.' },
    ];

    const handleTopicPress = (path: string) => {
        router.push(path as any);
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={24} color={Colors.WHITE} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Help Center</Text>
                <View />
            </View>

            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                {/* Search */}
                {/* <View style={styles.searchContainer}>
                    <Ionicons name="search" size={20} color="#777" style={styles.searchIcon} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search for help..."
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                </View> */}

                {/* Popular Topics */}
                <Text style={styles.sectionTitle}>Popular Topics</Text>
                {popularTopics.map(topic => (
                    <TouchableOpacity
                        key={topic.id}
                        style={styles.faqItem}
                        onPress={() => handleTopicPress(topic.path)}
                    >
                        <View style={styles.faqHeader}>
                            <View style={styles.topicContent}>
                                <Ionicons name={topic.icon} size={20} color={Colors.PRIMARY} style={styles.topicIcon} />
                                <Text style={styles.faqQuestion}>{topic.title}</Text>
                            </View>
                            <Ionicons name="chevron-forward" size={20} color="#4a6da7" />
                        </View>
                    </TouchableOpacity>
                ))}

                {/* FAQ Section */}
                <View style={styles.faqSection}>
                    <Text style={styles.sectionTitle}>FAQ</Text>
                    {faqs.map(faq => (
                        <View key={faq.id} style={styles.topicCard}>
                            <TouchableOpacity
                                style={styles.topicHeader}
                                onPress={() => toggleFAQ(faq.id)}
                            >
                                <Text style={styles.topicTitle}>{faq.question}</Text>
                                <Ionicons
                                    name={expandedSections[faq.id] ? 'chevron-up' : 'chevron-down'}
                                    size={22}
                                    color="#4a6da7"
                                />
                            </TouchableOpacity>
                            {expandedSections[faq.id] && (
                                <Text style={styles.faqAnswer}>{faq.answer}</Text>
                            )}
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
    header: {
        marginBottom: 6,
        backgroundColor: Colors.PRIMARY,
        paddingVertical: 20,
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        height: Dimenstion.headerHeight,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.WHITE,
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginVertical: 20,
        borderRadius: 10,
        paddingHorizontal: 15,
        height: 50,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#1a1a1a',
        marginTop: 10
    },
    // Popular Topics styled like old FAQ items
    faqItem: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
    },
    faqHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    topicContent: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    topicIcon: {
        marginRight: 12,
    },
    faqQuestion: {
        fontSize: 16,
        color: '#333',
        paddingRight: 10,
        flex: 1,
    },
    // FAQ section styled like old Popular Topics cards
    topicCard: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 15,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    topicHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    topicTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#1a1a1a',
        flex: 1,
        paddingRight: 10,
    },
    faqAnswer: {
        fontSize: 14,
        color: '#555',
        marginTop: 10,
        lineHeight: 20,
    },
    // Add this:
    faqSection: {
        marginBottom: 30,
    },
});

export default Help;