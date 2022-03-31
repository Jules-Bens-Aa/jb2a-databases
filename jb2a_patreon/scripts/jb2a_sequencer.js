const patreonDatabase = {};
export async function jb2aPatreonDatabase(prefix) {


    patreonDatabase._templates = {
        //default: [100, 0, 0],
        cone: [100, 0, 0],
        cone100: [100, 100, 100],
        cone100_02: [100, 50, 150],
        cone200: [200, 100, 100],
        large: [200, 0, 0],
        line100: [100, 50, 150],
        melee: [200, 300, 300],
        ranged: [200, 200, 200],
        ray: [100, 0, 0],
        side_impact: [200, 100, 0]
    },
        patreonDatabase.antilife_shell = {
            blue_no_circle: `${prefix}/jb2a_patreon/Library/5th_Level/Antilife_Shell/AntilifeShell_01_Blue_NoCircle_400x400.webm`,
            blue_with_circle: `${prefix}/jb2a_patreon/Library/5th_Level/Antilife_Shell/AntilifeShell_01_Blue_Circle_400x400.webm`
        },
        patreonDatabase.arcane_hand = {
            blue: `${prefix}/jb2a_patreon/Library/5th_Level/Arcane_Hand/ArcaneHand_Human_01_Idle_Blue_400x400.webm`,
            green: `${prefix}/jb2a_patreon/Library/5th_Level/Arcane_Hand/ArcaneHand_Human_01_Idle_Green_400x400.webm`,
            purple: `${prefix}/jb2a_patreon/Library/5th_Level/Arcane_Hand/ArcaneHand_Human_01_Idle_Purple_400x400.webm`,
            red: `${prefix}/jb2a_patreon/Library/5th_Level/Arcane_Hand/ArcaneHand_Human_01_Idle_Red_400x400.webm`,
            rock: `${prefix}/jb2a_patreon/Library/5th_Level/Arcane_Hand/ArcaneHand_Human_01_Idle_Rock01_400x400.webm`,
            rainbow: `${prefix}/jb2a_patreon/Library/5th_Level/Arcane_Hand/ArcaneHand_Human_01_Idle_Rainbow_400x400.webm`
        },
        patreonDatabase.arms_of_hadar = {
            dark_green: `${prefix}/jb2a_patreon/Library/1st_Level/Arms_Of_Hadar/ArmsOfHadar_01_Dark_Green_500x500.webm`,
            dark_purple: `${prefix}/jb2a_patreon/Library/1st_Level/Arms_Of_Hadar/ArmsOfHadar_01_Dark_Purple_500x500.webm`,
            dark_red: `${prefix}/jb2a_patreon/Library/1st_Level/Arms_Of_Hadar/ArmsOfHadar_01_Dark_Red_500x500.webm`
        },
        patreonDatabase.arrow = {
            _template: 'ranged',
            cold: {
                blue: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Cold_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Cold_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Cold_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Cold_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Cold_90ft_4000x400.webm`
                },
                green: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Green_Cold_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Green_Cold_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Green_Cold_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Green_Cold_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Green_Cold_90ft_4000x400.webm`
                },
                pink: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Pink_Cold_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Pink_Cold_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Pink_Cold_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Pink_Cold_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Pink_Cold_90ft_4000x400.webm`
                },
                purple: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Purple_Cold_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Purple_Cold_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Purple_Cold_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Purple_Cold_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Purple_Cold_90ft_4000x400.webm`
                },
                orange: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Orange_Cold_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Orange_Cold_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Orange_Cold_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Orange_Cold_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Orange_Cold_90ft_4000x400.webm`
                }
            },
            fire: {
                blue: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Fire_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Fire_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Fire_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Fire_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Fire_90ft_4000x400.webm`
                },
                green: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Green_Fire_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Green_Fire_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Green_Fire_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Green_Fire_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Green_Fire_90ft_4000x400.webm`
                },
                pink: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Pink_Fire_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Pink_Fire_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Pink_Fire_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Pink_Fire_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Pink_Fire_90ft_4000x400.webm`
                },
                purple: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Purple_Fire_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Purple_Fire_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Purple_Fire_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Purple_Fire_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Purple_Fire_90ft_4000x400.webm`
                },
                orange: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Orange_Fire_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Orange_Fire_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Orange_Fire_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Orange_Fire_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Orange_Fire_90ft_4000x400.webm`
                }
            },
            lightning: {
                blue: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Lightning_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Lightning_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Lightning_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Lightning_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Lightning_90ft_4000x400.webm`
                },
                green: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Green_Lightning_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Green_Lightning_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Green_Lightning_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Green_Lightning_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Green_Lightning_90ft_4000x400.webm`
                },
                pink: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Pink_Lightning_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Pink_Lightning_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Pink_Lightning_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Pink_Lightning_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Pink_Lightning_90ft_4000x400.webm`
                },
                purple: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Purple_Lightning_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Purple_Lightning_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Purple_Lightning_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Purple_Lightning_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Purple_Lightning_90ft_4000x400.webm`
                },
                orange: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Orange_Lightning_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Orange_Lightning_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Orange_Lightning_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Orange_Lightning_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Orange_Lightning_90ft_4000x400.webm`
                }
            },
            physical: {
                blue: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Physical_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Physical_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Physical_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Physical_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Physical_90ft_4000x400.webm`
                },
                green: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Green_Physical_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Green_Physical_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Green_Physical_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Green_Physical_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Green_Physical_90ft_4000x400.webm`
                },
                pink: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Pink_Physical_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Pink_Physical_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Pink_Physical_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Pink_Physical_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Pink_Physical_90ft_4000x400.webm`
                },
                purple: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Purple_Physical_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Purple_Physical_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Purple_Physical_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Purple_Physical_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Purple_Physical_90ft_4000x400.webm`
                },
                orange: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Orange_Physical_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Orange_Physical_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Orange_Physical_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Orange_Physical_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Orange_Physical_90ft_4000x400.webm`
                },
                white: {
                    '01': {
                        '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow01_01_Regular_White_05ft_600x400.webm`,
                        '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow01_01_Regular_White_15ft_1000x400.webm`,
                        '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow01_01_Regular_White_30ft_1600x400.webm`,
                        '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow01_01_Regular_White_60ft_2800x400.webm`,
                        '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow01_01_Regular_White_90ft_4000x400.webm`
                    },
                    '02': {
                        '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_White_Physical_05ft_600x400.webm`,
                        '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_White_Physical_15ft_1000x400.webm`,
                        '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_White_Physical_30ft_1600x400.webm`,
                        '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_White_Physical_60ft_2800x400.webm`,
                        '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_White_Physical_90ft_4000x400.webm`
                    }
                }
            },
            poison: {
                blue: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Poison_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Poison_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Poison_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Poison_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Poison_90ft_4000x400.webm`
                },
                green: {
                    '01': {
                        '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow01_01_Glowing_Green_05ft_600x400.webm`,
                        '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow01_01_Glowing_Green_15ft_1000x400.webm`,
                        '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow01_01_Glowing_Green_30ft_1600x400.webm`,
                        '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow01_01_Glowing_Green_60ft_2800x400.webm`,
                        '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow01_01_Glowing_Green_90ft_4000x400.webm`
                    },
                    '02': {
                        '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Green_Poison_05ft_600x400.webm`,
                        '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Green_Poison_15ft_1000x400.webm`,
                        '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Green_Poison_30ft_1600x400.webm`,
                        '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Green_Poison_60ft_2800x400.webm`,
                        '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Green_Poison_90ft_4000x400.webm`
                    }
                },
                pink: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Pink_Poison_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Pink_Poison_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Pink_Poison_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Pink_Poison_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Pink_Poison_90ft_4000x400.webm`
                },
                purple: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Purple_Poison_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Purple_Poison_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Purple_Poison_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Purple_Poison_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Purple_Poison_90ft_4000x400.webm`
                },
                orange: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Orange_Poison_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Orange_Poison_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Orange_Poison_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Orange_Poison_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Orange_Poison_90ft_4000x400.webm`
                }
            }
        },
        patreonDatabase.bardic_inspiration = {
            blueyellow: `${prefix}/jb2a_patreon/Library/1st_Level/Bardic_Inspiration/BardicInspiration_01_Regular_BlueYellow_400x400.webm`,
            dark_red: `${prefix}/jb2a_patreon/Library/1st_Level/Bardic_Inspiration/BardicInspiration_01_Dark_Red_400x400.webm`,
            greenorange: `${prefix}/jb2a_patreon/Library/1st_Level/Bardic_Inspiration/BardicInspiration_01_Regular_GreenOrange_400x400.webm`,
            purplepink: `${prefix}/jb2a_patreon/Library/1st_Level/Bardic_Inspiration/BardicInspiration_01_Regular_PurplePink_400x400.webm`,
            pink: `${prefix}/jb2a_patreon/Library/1st_Level/Bardic_Inspiration/BardicInspiration_01_Regular_Pink_400x400.webm`,
        },
        patreonDatabase.bite = {
            '200px': {
                blue: `${prefix}/jb2a_patreon/Library/Generic/Creature/Bite_01_Regular_Blue_200x200.webm`,
                green: `${prefix}/jb2a_patreon/Library/Generic/Creature/Bite_01_Regular_Green_200x200.webm`,
                grey: `${prefix}/jb2a_patreon/Library/Generic/Creature/Bite_01_Regular_Grey_200x200.webm`,
                orange: `${prefix}/jb2a_patreon/Library/Generic/Creature/Bite_01_Regular_Orange_200x200.webm`,
                purple: `${prefix}/jb2a_patreon/Library/Generic/Creature/Bite_01_Regular_Purple_200x200.webm`,
                red: `${prefix}/jb2a_patreon/Library/Generic/Creature/Bite_01_Regular_Red_200x200.webm`,
                yellow: `${prefix}/jb2a_patreon/Library/Generic/Creature/Bite_01_Regular_Yellow_200x200.webm`
            },
            '400px': {
                blue: `${prefix}/jb2a_patreon/Library/Generic/Creature/Bite_01_Regular_Blue_400x400.webm`,
                green: `${prefix}/jb2a_patreon/Library/Generic/Creature/Bite_01_Regular_Green_400x400.webm`,
                grey: `${prefix}/jb2a_patreon/Library/Generic/Creature/Bite_01_Regular_Grey_400x400.webm`,
                orange: `${prefix}/jb2a_patreon/Library/Generic/Creature/Bite_01_Regular_Orange_400x400.webm`,
                purple: `${prefix}/jb2a_patreon/Library/Generic/Creature/Bite_01_Regular_Purple_400x400.webm`,
                red: `${prefix}/jb2a_patreon/Library/Generic/Creature/Bite_01_Regular_Red_400x400.webm`,
                yellow: `${prefix}/jb2a_patreon/Library/Generic/Creature/Bite_01_Regular_Yellow_400x400.webm`
            }
        },
        patreonDatabase.black_tentacles = {
            dark_green: `${prefix}/jb2a_patreon/Library/4th_Level/Black_Tentacles/BlackTentacles_01_Dark_Green_600x600.webm`,
            dark_purple: `${prefix}/jb2a_patreon/Library/4th_Level/Black_Tentacles/BlackTentacles_01_Dark_Purple_600x600.webm`,
            dark_red: `${prefix}/jb2a_patreon/Library/4th_Level/Black_Tentacles/BlackTentacles_01_Dark_Red_600x600.webm`
        },
        patreonDatabase.bless = {
            '200px': {
                intro: {
                    blue: `${prefix}/jb2a_patreon/Library/1st_Level/Bless/Bless_01_Regular_Blue_Intro_200x200.webm`,
                    green: `${prefix}/jb2a_patreon/Library/1st_Level/Bless/Bless_01_Regular_Green_Intro_200x200.webm`,
                    purple: `${prefix}/jb2a_patreon/Library/1st_Level/Bless/Bless_01_Regular_Purple_Intro_200x200.webm`,
                    yellow: `${prefix}/jb2a_patreon/Library/1st_Level/Bless/Bless_01_Regular_Yellow_Intro_200x200.webm`
                },
                loop: {
                    blue: `${prefix}/jb2a_patreon/Library/1st_Level/Bless/Bless_01_Regular_Blue_Loop_200x200.webm`,
                    green: `${prefix}/jb2a_patreon/Library/1st_Level/Bless/Bless_01_Regular_Green_Loop_200x200.webm`,
                    purple: `${prefix}/jb2a_patreon/Library/1st_Level/Bless/Bless_01_Regular_Purple_Loop_200x200.webm`,
                    yellow: `${prefix}/jb2a_patreon/Library/1st_Level/Bless/Bless_01_Regular_Yellow_Loop_200x200.webm`
                }
            },
            '400px': {
                intro: {
                    blue: `${prefix}/jb2a_patreon/Library/1st_Level/Bless/Bless_01_Regular_Blue_Intro_400x400.webm`,
                    green: `${prefix}/jb2a_patreon/Library/1st_Level/Bless/Bless_01_Regular_Green_Intro_400x400.webm`,
                    purple: `${prefix}/jb2a_patreon/Library/1st_Level/Bless/Bless_01_Regular_Purple_Intro_400x400.webm`,
                    yellow: `${prefix}/jb2a_patreon/Library/1st_Level/Bless/Bless_01_Regular_Yellow_Intro_400x400.webm`
                },
                loop: {
                    blue: `${prefix}/jb2a_patreon/Library/1st_Level/Bless/Bless_01_Regular_Blue_Loop_400x400.webm`,
                    green: `${prefix}/jb2a_patreon/Library/1st_Level/Bless/Bless_01_Regular_Green_Loop_400x400.webm`,
                    purple: `${prefix}/jb2a_patreon/Library/1st_Level/Bless/Bless_01_Regular_Purple_Loop_400x400.webm`,
                    yellow: `${prefix}/jb2a_patreon/Library/1st_Level/Bless/Bless_01_Regular_Yellow_Loop_400x400.webm`
                }
            }
        },
        patreonDatabase.bolt = {
            _template: 'ranged',
            cold: {
                blue: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Blue_Cold_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Blue_Cold_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Blue_Cold_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Blue_Cold_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Blue_Cold_90ft_4000x400.webm`
                },
                green: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Green_Cold_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Green_Cold_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Green_Cold_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Green_Cold_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Green_Cold_90ft_4000x400.webm`
                },
                pink: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Pink_Cold_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Pink_Cold_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Pink_Cold_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Pink_Cold_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Pink_Cold_90ft_4000x400.webm`
                },
                purple: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Purple_Cold_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Purple_Cold_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Purple_Cold_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Purple_Cold_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Purple_Cold_90ft_4000x400.webm`
                },
                orange: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Cold_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Cold_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Cold_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Cold_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Cold_90ft_4000x400.webm`
                }
            },
            fire: {
                blue: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Blue_Fire_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Blue_Fire_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Blue_Fire_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Blue_Fire_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Blue_Fire_90ft_4000x400.webm`
                },
                green: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Green_Fire_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Green_Fire_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Green_Fire_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Green_Fire_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Green_Fire_90ft_4000x400.webm`
                },
                pink: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Pink_Fire_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Pink_Fire_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Pink_Fire_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Pink_Fire_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Pink_Fire_90ft_4000x400.webm`
                },
                purple: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Purple_Fire_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Purple_Fire_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Purple_Fire_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Purple_Fire_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Purple_Fire_90ft_4000x400.webm`
                },
                orange: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Fire_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Fire_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Fire_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Fire_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Fire_90ft_4000x400.webm`
                }
            },
            lightning: {
                blue: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Blue_Lightning_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Blue_Lightning_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Blue_Lightning_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Blue_Lightning_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Blue_Lightning_90ft_4000x400.webm`
                },
                green: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Green_Lightning_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Green_Lightning_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Green_Lightning_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Green_Lightning_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Green_Lightning_90ft_4000x400.webm`
                },
                pink: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Pink_Lightning_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Pink_Lightning_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Pink_Lightning_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Pink_Lightning_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Pink_Lightning_90ft_4000x400.webm`
                },
                purple: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Purple_Lightning_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Purple_Lightning_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Purple_Lightning_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Purple_Lightning_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Purple_Lightning_90ft_4000x400.webm`
                },
                orange: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Lightning_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Lightning_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Lightning_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Lightning_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Lightning_90ft_4000x400.webm`
                }
            },
            physical: {
                blue: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Blue_Physical_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Blue_Physical_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Blue_Physical_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Blue_Physical_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Blue_Physical_90ft_4000x400.webm`
                },
                green: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Green_Physical_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Green_Physical_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Green_Physical_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Green_Physical_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Green_Physical_90ft_4000x400.webm`
                },
                pink: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Pink_Physical_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Pink_Physical_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Pink_Physical_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Pink_Physical_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Pink_Physical_90ft_4000x400.webm`
                },
                purple: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Purple_Physical_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Purple_Physical_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Purple_Physical_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Purple_Physical_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Purple_Physical_90ft_4000x400.webm`
                },
                orange: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Physical_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Physical_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Physical_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Physical_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Physical_90ft_4000x400.webm`
                },
                white: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_White_Physical_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_White_Physical_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_White_Physical_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_White_Physical_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_White_Physical_90ft_4000x400.webm`
                },
                white02: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_02_Regular_White_Physical_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_02_Regular_White_Physical_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_02_Regular_White_Physical_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_02_Regular_White_Physical_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_02_Regular_White_Physical_90ft_4000x400.webm`
                }
            },
            poison: {
                blue: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Blue_Poison_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Blue_Poison_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Blue_Poison_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Blue_Poison_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Blue_Poison_90ft_4000x400.webm`
                },
                green: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Green_Poison_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Green_Poison_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Green_Poison_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Green_Poison_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Green_Poison_90ft_4000x400.webm`
                },
                pink: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Pink_Poison_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Pink_Poison_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Pink_Poison_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Pink_Poison_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Pink_Poison_90ft_4000x400.webm`
                },
                purple: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Purple_Poison_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Purple_Poison_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Purple_Poison_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Purple_Poison_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Purple_Poison_90ft_4000x400.webm`
                },
                orange: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Poison_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Poison_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Poison_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Poison_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Poison_90ft_4000x400.webm`
                }
            }
        },
        patreonDatabase.bonfire = {
            '01': {
                blue: `${prefix}/jb2a_patreon/Library/Generic/Fire/Campfire/Bonfire_01_Regular_Blue_400x400.webm`,
                green: `${prefix}/jb2a_patreon/Library/Generic/Fire/Campfire/Bonfire_01_Regular_Green_400x400.webm`,
                orange: `${prefix}/jb2a_patreon/Library/Generic/Fire/Campfire/Bonfire_01_Regular_Orange_400x400.webm`,
                purple: `${prefix}/jb2a_patreon/Library/Generic/Fire/Campfire/Bonfire_01_Regular_Purple_400x400.webm`
            },
            '02': {
                blue: `${prefix}/jb2a_patreon/Library/Generic/Fire/Campfire/Bonfire_02_Regular_Blue_400x400.webm`,
                green: `${prefix}/jb2a_patreon/Library/Generic/Fire/Campfire/Bonfire_02_Regular_Green_400x400.webm`,
                orange: `${prefix}/jb2a_patreon/Library/Generic/Fire/Campfire/Bonfire_02_Regular_Orange_400x400.webm`,
                purple: `${prefix}/jb2a_patreon/Library/Generic/Fire/Campfire/Bonfire_02_Regular_Purple_400x400.webm`
            }
        },
        patreonDatabase.boulder = {
            _template: 'ranged',
            siege: {
                '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/SiegeBoulder01_01_Regular_White_05ft_600x500.webm`,
                '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/SiegeBoulder01_01_Regular_White_15ft_1000x500.webm`,
                '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/SiegeBoulder01_01_Regular_White_30ft_1600x500.webm`,
                '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/SiegeBoulder01_01_Regular_White_60ft_2800x500.webm`,
                '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/SiegeBoulder01_01_Regular_White_90ft_4000x500.webm`
            },
            toss: {
                '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/BoulderToss01_01_Regular_White_05ft_600x500.webm`,
                '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/BoulderToss01_01_Regular_White_15ft_1000x500.webm`,
                '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/BoulderToss01_01_Regular_White_30ft_1600x500.webm`,
                '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/BoulderToss01_01_Regular_White_60ft_2800x500.webm`,
                '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/BoulderToss01_01_Regular_White_90ft_4000x500.webm`
            }
        },
        patreonDatabase.braziers = {
            blue: {
                bordered: {
                    '01': {
                        '05x05ft': `${prefix}/jb2a_patreon/Library/Generic/Fire/Brazier/Brazier_01_Wall_Blue_05x05ft_200x200.webm`,
                        '10x05ft': `${prefix}/jb2a_patreon/Library/Generic/Fire/Brazier/Brazier_01_Wall_Blue_10x05ft_400x200.webm`,
                        '10x10ft': `${prefix}/jb2a_patreon/Library/Generic/Fire/Brazier/Brazier_01_Wall_Blue_10x10ft_400x400.webm`
                    },
                    '02': {
                        '05x05ft': `${prefix}/jb2a_patreon/Library/Generic/Fire/Brazier/Brazier_02_Wall_Blue_05x05ft_200x200.webm`,
                        '10x05ft': `${prefix}/jb2a_patreon/Library/Generic/Fire/Brazier/Brazier_02_Wall_Blue_10x05ft_400x200.webm`,
                        '10x10ft': `${prefix}/jb2a_patreon/Library/Generic/Fire/Brazier/Brazier_02_Wall_Blue_10x10ft_400x400.webm`
                    },
                    '03': {
                        '05x05ft': `${prefix}/jb2a_patreon/Library/Generic/Fire/Brazier/Brazier_03_Wall_Blue_05x05ft_200x200.webm`,
                        '10x05ft': `${prefix}/jb2a_patreon/Library/Generic/Fire/Brazier/Brazier_03_Wall_Blue_10x05ft_400x200.webm`,
                        '10x10ft': `${prefix}/jb2a_patreon/Library/Generic/Fire/Brazier/Brazier_03_Wall_Blue_10x10ft_400x400.webm`
                    }
                },
                hard_edge: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Fire/Brazier/Coal_01_HardEdge_Blue_10x10_500x500.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Fire/Brazier/Coal_02_HardEdge_Blue_10x10_500x500.webm`
                },
                soft_edge: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Fire/Brazier/Coal_01_SoftEdge_Blue_10x10_500x500.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Fire/Brazier/Coal_02_SoftEdge_Blue_10x10_500x500.webm`
                }
            },
            green: {
                bordered: {
                    '01': {
                        '05x05ft': `${prefix}/jb2a_patreon/Library/Generic/Fire/Brazier/Brazier_01_Wall_Green_05x05ft_200x200.webm`,
                        '10x05ft': `${prefix}/jb2a_patreon/Library/Generic/Fire/Brazier/Brazier_01_Wall_Green_10x05ft_400x200.webm`,
                        '10x10ft': `${prefix}/jb2a_patreon/Library/Generic/Fire/Brazier/Brazier_01_Wall_Green_10x10ft_400x400.webm`
                    },
                    '02': {
                        '05x05ft': `${prefix}/jb2a_patreon/Library/Generic/Fire/Brazier/Brazier_02_Wall_Green_05x05ft_200x200.webm`,
                        '10x05ft': `${prefix}/jb2a_patreon/Library/Generic/Fire/Brazier/Brazier_02_Wall_Green_10x05ft_400x200.webm`,
                        '10x10ft': `${prefix}/jb2a_patreon/Library/Generic/Fire/Brazier/Brazier_02_Wall_Green_10x10ft_400x400.webm`
                    },
                    '03': {
                        '05x05ft': `${prefix}/jb2a_patreon/Library/Generic/Fire/Brazier/Brazier_03_Wall_Green_05x05ft_200x200.webm`,
                        '10x05ft': `${prefix}/jb2a_patreon/Library/Generic/Fire/Brazier/Brazier_03_Wall_Green_10x05ft_400x200.webm`,
                        '10x10ft': `${prefix}/jb2a_patreon/Library/Generic/Fire/Brazier/Brazier_03_Wall_Green_10x10ft_400x400.webm`
                    }
                },
                hard_edge: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Fire/Brazier/Coal_01_HardEdge_Green_10x10_500x500.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Fire/Brazier/Coal_02_HardEdge_Green_10x10_500x500.webm`
                },
                soft_edge: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Fire/Brazier/Coal_01_SoftEdge_Green_10x10_500x500.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Fire/Brazier/Coal_02_SoftEdge_Green_10x10_500x500.webm`
                }
            },
            orange: {
                bordered: {
                    '01': {
                        '05x05ft': `${prefix}/jb2a_patreon/Library/Generic/Fire/Brazier/Brazier_01_Wall_Orange_05x05ft_200x200.webm`,
                        '10x05ft': `${prefix}/jb2a_patreon/Library/Generic/Fire/Brazier/Brazier_01_Wall_Orange_10x05ft_400x200.webm`,
                        '10x10ft': `${prefix}/jb2a_patreon/Library/Generic/Fire/Brazier/Brazier_01_Wall_Orange_10x10ft_400x400.webm`
                    },
                    '02': {
                        '05x05ft': `${prefix}/jb2a_patreon/Library/Generic/Fire/Brazier/Brazier_02_Wall_Orange_05x05ft_200x200.webm`,
                        '10x05ft': `${prefix}/jb2a_patreon/Library/Generic/Fire/Brazier/Brazier_02_Wall_Orange_10x05ft_400x200.webm`,
                        '10x10ft': `${prefix}/jb2a_patreon/Library/Generic/Fire/Brazier/Brazier_02_Wall_Orange_10x10ft_400x400.webm`
                    },
                    '03': {
                        '05x05ft': `${prefix}/jb2a_patreon/Library/Generic/Fire/Brazier/Brazier_03_Wall_Orange_05x05ft_200x200.webm`,
                        '10x05ft': `${prefix}/jb2a_patreon/Library/Generic/Fire/Brazier/Brazier_03_Wall_Orange_10x05ft_400x200.webm`,
                        '10x10ft': `${prefix}/jb2a_patreon/Library/Generic/Fire/Brazier/Brazier_03_Wall_Orange_10x10ft_400x400.webm`
                    }
                },
                hard_edge: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Fire/Brazier/Coal_01_HardEdge_Orange_10x10_500x500.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Fire/Brazier/Coal_02_HardEdge_Orange_10x10_500x500.webm`
                },
                soft_edge: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Fire/Brazier/Coal_01_SoftEdge_Orange_10x10_500x500.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Fire/Brazier/Coal_02_SoftEdge_Orange_10x10_500x500.webm`
                }
            },
            unlit: {
                bordered: {
                    '01': {
                        '05x05ft': `${prefix}/jb2a_patreon/Library/Generic/Fire/Brazier/Brazier_01_Wall_Black_05x05ft.webp`,
                        '10x05ft': `${prefix}/jb2a_patreon/Library/Generic/Fire/Brazier/Brazier_01_Wall_Black_10x05ft.webp`,
                        '10x10ft': `${prefix}/jb2a_patreon/Library/Generic/Fire/Brazier/Brazier_01_Wall_Black_10x10ft.webp`
                    },
                    '02': {
                        '05x05ft': `${prefix}/jb2a_patreon/Library/Generic/Fire/Brazier/Brazier_02_Wall_Black_05x05ft.webp`,
                        '10x05ft': `${prefix}/jb2a_patreon/Library/Generic/Fire/Brazier/Brazier_02_Wall_Black_10x05ft.webp`,
                        '10x10ft': `${prefix}/jb2a_patreon/Library/Generic/Fire/Brazier/Brazier_02_Wall_Black_10x10ft.webp`
                    },
                    '03': {
                        '05x05ft': `${prefix}/jb2a_patreon/Library/Generic/Fire/Brazier/Brazier_03_Wall_Black_05x05ft.webp`,
                        '10x05ft': `${prefix}/jb2a_patreon/Library/Generic/Fire/Brazier/Brazier_03_Wall_Black_10x05ft.webp`,
                        '10x10ft': `${prefix}/jb2a_patreon/Library/Generic/Fire/Brazier/Brazier_03_Wall_Black_10x10ft.webp`
                    }
                },
                hard_edge: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Fire/Brazier/Coal_01_HardEdge_Black_10x10ft.webp`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Fire/Brazier/Coal_02_HardEdge_Black_10x10ft.webp`
                },
                soft_edge: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Fire/Brazier/Coal_01_SoftEdge_Black_10x10ft.webp`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Fire/Brazier/Coal_02_SoftEdge_Black_10x10ft.webp`
                }


            }
        },
        patreonDatabase.breath_weapons = {
            acid: {
                line: {
                    _template: "ray",
                    blue: `${prefix}/jb2a_patreon/Library/Generic/Template/Line/Breath_Weapon/BreathWeapon_Acid01_Regular_Blue_30ft_Line_Burst_1200x200.webm`,
                    green: `${prefix}/jb2a_patreon/Library/Generic/Template/Line/Breath_Weapon/BreathWeapon_Acid01_Regular_Green_30ft_Line_Burst_1200x200.webm`,
                    orange: `${prefix}/jb2a_patreon/Library/Generic/Template/Line/Breath_Weapon/BreathWeapon_Acid01_Regular_Orange_30ft_Line_Burst_1200x200.webm`,
                    purple: `${prefix}/jb2a_patreon/Library/Generic/Template/Line/Breath_Weapon/BreathWeapon_Acid01_Regular_Purple_30ft_Line_Burst_1200x200.webm`
                }
            },
            cold: {
                cone: {
                    _template: "cone",
                    blue: `${prefix}/jb2a_patreon/Library/Generic/Template/Cone/Breath_Weapon/BreathWeapon_Cold01_Regular_Blue_30ft_Cone_Burst_600x600.webm`,
                    green: `${prefix}/jb2a_patreon/Library/Generic/Template/Cone/Breath_Weapon/BreathWeapon_Cold01_Regular_Green_30ft_Cone_Burst_600x600.webm`,
                    orange: `${prefix}/jb2a_patreon/Library/Generic/Template/Cone/Breath_Weapon/BreathWeapon_Cold01_Regular_Orange_30ft_Cone_Burst_600x600.webm`,
                    purple: `${prefix}/jb2a_patreon/Library/Generic/Template/Cone/Breath_Weapon/BreathWeapon_Cold01_Regular_Purple_30ft_Cone_Burst_600x600.webm`
                }
            },
            fire: {
                cone: {
                    _template: "cone",
                    blue: {
                        '01': `${prefix}/jb2a_patreon/Library/Generic/Template/Cone/Breath_Weapon/BreathWeapon_Fire01_Regular_Blue_30ft_Cone_Burst_600x600.webm`,
                        '02': `${prefix}/jb2a_patreon/Library/Generic/Template/Cone/Breath_Weapon/BreathWeapon_Fire02_Regular_Blue_30ft_Cone_Burst_600x600.webm`
                    },
                    green: {
                        '01': `${prefix}/jb2a_patreon/Library/Generic/Template/Cone/Breath_Weapon/BreathWeapon_Fire01_Regular_Green_30ft_Cone_Burst_600x600.webm`,
                        '02': `${prefix}/jb2a_patreon/Library/Generic/Template/Cone/Breath_Weapon/BreathWeapon_Fire02_Regular_Green_30ft_Cone_Burst_600x600.webm`
                    },
                    orange: {
                        '01': `${prefix}/jb2a_patreon/Library/Generic/Template/Cone/Breath_Weapon/BreathWeapon_Fire01_Regular_Orange_30ft_Cone_Burst_600x600.webm`,
                        '02': `${prefix}/jb2a_patreon/Library/Generic/Template/Cone/Breath_Weapon/BreathWeapon_Fire02_Regular_Orange_30ft_Cone_Burst_600x600.webm`
                    },
                    purple: {
                        '01': `${prefix}/jb2a_patreon/Library/Generic/Template/Cone/Breath_Weapon/BreathWeapon_Fire01_Regular_Purple_30ft_Cone_Burst_600x600.webm`,
                        '02': `${prefix}/jb2a_patreon/Library/Generic/Template/Cone/Breath_Weapon/BreathWeapon_Fire02_Regular_Purple_30ft_Cone_Burst_600x600.webm`
                    },
                    yellow: {
                        '01': `${prefix}/jb2a_patreon/Library/Generic/Template/Cone/Breath_Weapon/BreathWeapon_Fire01_Regular_Yellow_30ft_Cone_Burst_600x600.webm`,
                        '02': `${prefix}/jb2a_patreon/Library/Generic/Template/Cone/Breath_Weapon/BreathWeapon_Fire02_Regular_Yellow_30ft_Cone_Burst_600x600.webm`
                    }
                },
                line: {
                    _template: "line",
                    blue: `${prefix}/jb2a_patreon/Library/Generic/Template/Line/Breath_Weapon/BreathWeapon_Fire01_Regular_Blue_30ft_Line_Burst_1200x200.webm`,
                    green: `${prefix}/jb2a_patreon/Library/Generic/Template/Line/Breath_Weapon/BreathWeapon_Fire01_Regular_Green_30ft_Line_Burst_1200x200.webm`,
                    orange: `${prefix}/jb2a_patreon/Library/Generic/Template/Line/Breath_Weapon/BreathWeapon_Fire01_Regular_Orange_30ft_Line_Burst_1200x200.webm`,
                    purple: `${prefix}/jb2a_patreon/Library/Generic/Template/Line/Breath_Weapon/BreathWeapon_Fire01_Regular_Purple_30ft_Line_Burst_1200x200.webm`
                }
            },
            lightning: {
                line: {
                    _template: "line",
                    blue: `${prefix}/jb2a_patreon/Library/Generic/Template/Line/Breath_Weapon/BreathWeapon_Lightning01_Regular_Blue_30ft_Line_Burst_1200x200.webm`,
                    green: `${prefix}/jb2a_patreon/Library/Generic/Template/Line/Breath_Weapon/BreathWeapon_Lightning01_Regular_Green_30ft_Line_Burst_1200x200.webm`,
                    orange: `${prefix}/jb2a_patreon/Library/Generic/Template/Line/Breath_Weapon/BreathWeapon_Lightning01_Regular_Orange_30ft_Line_Burst_1200x200.webm`,
                    purple: `${prefix}/jb2a_patreon/Library/Generic/Template/Line/Breath_Weapon/BreathWeapon_Lightning01_Regular_Purple_30ft_Line_Burst_1200x200.webm`
                }
            },
            poison: {
                cone: {
                    _template: "cone",
                    dark_black: `${prefix}/jb2a_patreon/Library/Generic/Template/Cone/Breath_Weapon/BreathWeapon_Poison01_Dark_Black_30ft_Cone_Burst_600x600.webm`,
                    dark_red: `${prefix}/jb2a_patreon/Library/Generic/Template/Cone/Breath_Weapon/BreathWeapon_Poison01_Dark_Red_30ft_Cone_Burst_600x600.webm`,
                    blue: `${prefix}/jb2a_patreon/Library/Generic/Template/Cone/Breath_Weapon/BreathWeapon_Poison01_Regular_Blue_30ft_Cone_Burst_600x600.webm`,
                    green: `${prefix}/jb2a_patreon/Library/Generic/Template/Cone/Breath_Weapon/BreathWeapon_Poison01_Regular_Green_30ft_Cone_Burst_600x600.webm`,
                    orange: `${prefix}/jb2a_patreon/Library/Generic/Template/Cone/Breath_Weapon/BreathWeapon_Poison01_Regular_Orange_30ft_Cone_Burst_600x600.webm`,
                    purple: `${prefix}/jb2a_patreon/Library/Generic/Template/Cone/Breath_Weapon/BreathWeapon_Poison01_Regular_Purple_30ft_Cone_Burst_600x600.webm`,
                    red: `${prefix}/jb2a_patreon/Library/Generic/Template/Cone/Breath_Weapon/BreathWeapon_Poison01_Regular_Red_30ft_Cone_Burst_600x600.webm`
                }
            }
        },
        patreonDatabase.breath_weapons02 = {
            burst: {
                cone: {
                    _template: "cone100_02",
                    arcana: {
                        purple: {
                            '01': `${prefix}/jb2a_patreon/Library/Generic/Template/Cone/Breath_Weapon/Breathweapon02_Arcana01_Regular_Purple_Cone_Burst_800x800.webm`,
                            '02': `${prefix}/jb2a_patreon/Library/Generic/Template/Cone/Breath_Weapon/Breathweapon02_Arcana02_Regular_Purple_Cone_Burst_800x800.webm`
                        }
                    },
                    fire: {
                        green: {
                            '01': `${prefix}/jb2a_patreon/Library/Generic/Template/Cone/Breath_Weapon/Breathweapon02_Fire01_Regular_Green_Cone_Burst_800x800.webm`,
                            '02': `${prefix}/jb2a_patreon/Library/Generic/Template/Cone/Breath_Weapon/Breathweapon02_Fire02_Regular_Green_Cone_Burst_800x800.webm`
                        },
                        orange: {
                            '01': `${prefix}/jb2a_patreon/Library/Generic/Template/Cone/Breath_Weapon/Breathweapon02_Fire01_Regular_Orange_Cone_Burst_800x800.webm`,
                            '02': `${prefix}/jb2a_patreon/Library/Generic/Template/Cone/Breath_Weapon/Breathweapon02_Fire02_Regular_Orange_Cone_Burst_800x800.webm`
                        }
                    },
                    holy: {
                        yellow: {
                            '01': `${prefix}/jb2a_patreon/Library/Generic/Template/Cone/Breath_Weapon/Breathweapon02_Holy01_Regular_Yellow_Cone_Burst_800x800.webm`,
                            '02': `${prefix}/jb2a_patreon/Library/Generic/Template/Cone/Breath_Weapon/Breathweapon02_Holy02_Regular_Yellow_Cone_Burst_800x800.webm`
                        }
                    }
                },
                line: {
                    _template: "line100",
                    arcana: {
                        purple: {
                            '01': `${prefix}/jb2a_patreon/Library/Generic/Template/Line/Breath_Weapon/Breathweapon02_Arcana01_Regular_Purple_Line_Burst_1200x400.webm`
                        }
                    },
                    fire: {
                        green: {
                            '01': `${prefix}/jb2a_patreon/Library/Generic/Template/Line/Breath_Weapon/Breathweapon02_Fire01_Regular_Green_Line_Burst_1200x400.webm`
                        },
                        orange: {
                            '01': `${prefix}/jb2a_patreon/Library/Generic/Template/Line/Breath_Weapon/Breathweapon02_Fire01_Regular_Orange_Line_Burst_1200x400.webm`
                        }
                    },
                    holy: {
                        yellow: {
                            '01': `${prefix}/jb2a_patreon/Library/Generic/Template/Line/Breath_Weapon/Breathweapon02_Holy01_Regular_Yellow_Line_Burst_1200x400.webm`
                        }
                    }
                }
            },
            loop: {
                cone: {
                    arcana: {
                        purple: {
                            '01': `${prefix}/jb2a_patreon/Library/Generic/Template/Cone/Breath_Weapon/Breathweapon02_Arcana01_Regular_Purple_Cone_Loop_800x800.webm`,
                            '02': `${prefix}/jb2a_patreon/Library/Generic/Template/Cone/Breath_Weapon/Breathweapon02_Arcana02_Regular_Purple_Cone_Loop_800x800.webm`
                        }
                    },
                    fire: {
                        green: {
                            '01': `${prefix}/jb2a_patreon/Library/Generic/Template/Cone/Breath_Weapon/Breathweapon02_Fire01_Regular_Green_Cone_Loop_800x800.webm`,
                            '02': `${prefix}/jb2a_patreon/Library/Generic/Template/Cone/Breath_Weapon/Breathweapon02_Fire02_Regular_Green_Cone_Loop_800x800.webm`
                        },
                        orange: {
                            '01': `${prefix}/jb2a_patreon/Library/Generic/Template/Cone/Breath_Weapon/Breathweapon02_Fire01_Regular_Orange_Cone_Loop_800x800.webm`,
                            '02': `${prefix}/jb2a_patreon/Library/Generic/Template/Cone/Breath_Weapon/Breathweapon02_Fire02_Regular_Orange_Cone_Loop_800x800.webm`
                        }
                    },
                    holy: {
                        yellow: {
                            '01': `${prefix}/jb2a_patreon/Library/Generic/Template/Cone/Breath_Weapon/Breathweapon02_Holy01_Regular_Yellow_Cone_Loop_800x800.webm`,
                            '02': `${prefix}/jb2a_patreon/Library/Generic/Template/Cone/Breath_Weapon/Breathweapon02_Holy02_Regular_Yellow_Cone_Loop_800x800.webm`
                        }
                    }
                },
                line: {
                    arcana: {
                        purple: {
                            '01': `${prefix}/jb2a_patreon/Library/Generic/Template/Line/Breath_Weapon/Breathweapon02_Arcana01_Regular_Purple_Line_Loop_1200x400.webm`
                        }
                    },
                    fire: {
                        green: {
                            '01': `${prefix}/jb2a_patreon/Library/Generic/Template/Line/Breath_Weapon/Breathweapon02_Fire01_Regular_Green_Line_Loop_1200x400.webm`
                        },
                        orange: {
                            '01': `${prefix}/jb2a_patreon/Library/Generic/Template/Line/Breath_Weapon/Breathweapon02_Fire01_Regular_Orange_Line_Loop_1200x400.webm`
                        }
                    },
                    holy: {
                        yellow: {
                            '01': `${prefix}/jb2a_patreon/Library/Generic/Template/Line/Breath_Weapon/Breathweapon02_Holy01_Regular_Yellow_Line_Loop_1200x400.webm`
                        }
                    }
                }
            }
        },
        patreonDatabase.bullet = {
            _template: 'ranged',
            '01': {
                blue: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bullet_01_Regular_Blue_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bullet_01_Regular_Blue_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bullet_01_Regular_Blue_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bullet_01_Regular_Blue_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bullet_01_Regular_Blue_90ft_4000x400.webm`
                },
                green: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bullet_01_Regular_Green_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bullet_01_Regular_Green_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bullet_01_Regular_Green_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bullet_01_Regular_Green_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bullet_01_Regular_Green_90ft_4000x400.webm`
                },
                orange: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bullet_01_Regular_Orange_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bullet_01_Regular_Orange_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bullet_01_Regular_Orange_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bullet_01_Regular_Orange_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bullet_01_Regular_Orange_90ft_4000x400.webm`
                },
                red: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bullet_01_Regular_Red_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bullet_01_Regular_Red_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bullet_01_Regular_Red_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bullet_01_Regular_Red_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bullet_01_Regular_Red_90ft_4000x400.webm`
                }
            },
            '02': {
                blue: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bullet_02_Regular_Blue_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bullet_02_Regular_Blue_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bullet_02_Regular_Blue_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bullet_02_Regular_Blue_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bullet_02_Regular_Blue_90ft_4000x400.webm`
                },
                green: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bullet_02_Regular_Green_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bullet_02_Regular_Green_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bullet_02_Regular_Green_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bullet_02_Regular_Green_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bullet_02_Regular_Green_90ft_4000x400.webm`
                },
                orange: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bullet_02_Regular_Orange_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bullet_02_Regular_Orange_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bullet_02_Regular_Orange_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bullet_02_Regular_Orange_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bullet_02_Regular_Orange_90ft_4000x400.webm`
                },
                red: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bullet_02_Regular_Red_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bullet_02_Regular_Red_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bullet_02_Regular_Red_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bullet_02_Regular_Red_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bullet_02_Regular_Red_90ft_4000x400.webm`
                }
            },
            '03': {
                blue: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bullet_03_Regular_Blue_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bullet_03_Regular_Blue_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bullet_03_Regular_Blue_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bullet_03_Regular_Blue_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bullet_03_Regular_Blue_90ft_4000x400.webm`
                },
                green: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bullet_03_Regular_Green_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bullet_03_Regular_Green_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bullet_03_Regular_Green_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bullet_03_Regular_Green_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bullet_03_Regular_Green_90ft_4000x400.webm`
                },
                orange: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bullet_03_Regular_Orange_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bullet_03_Regular_Orange_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bullet_03_Regular_Orange_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bullet_03_Regular_Orange_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bullet_03_Regular_Orange_90ft_4000x400.webm`
                },
                red: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bullet_03_Regular_Red_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bullet_03_Regular_Red_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bullet_03_Regular_Red_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bullet_03_Regular_Red_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Bullet_03_Regular_Red_90ft_4000x400.webm`
                }
            },
            Snipe: {
                blue: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Snipe_01_Regular_Blue_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Snipe_01_Regular_Blue_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Snipe_01_Regular_Blue_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Snipe_01_Regular_Blue_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Snipe_01_Regular_Blue_90ft_4000x400.webm`
                },
                green: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Snipe_01_Regular_Green_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Snipe_01_Regular_Green_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Snipe_01_Regular_Green_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Snipe_01_Regular_Green_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Snipe_01_Regular_Green_90ft_4000x400.webm`
                },
                orange: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Snipe_01_Regular_Orange_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Snipe_01_Regular_Orange_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Snipe_01_Regular_Orange_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Snipe_01_Regular_Orange_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Snipe_01_Regular_Orange_90ft_4000x400.webm`
                },
                red: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Snipe_01_Regular_Red_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Snipe_01_Regular_Red_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Snipe_01_Regular_Red_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Snipe_01_Regular_Red_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Snipe_01_Regular_Red_90ft_4000x400.webm`
                }
            }
        },
        patreonDatabase.burning_hands = {
            _template: 'cone',
            '01': {
                blue: `${prefix}/jb2a_patreon/Library/1st_Level/Burning_Hands/BurningHands_01_Regular_Blue_600x600.webm`,
                green: `${prefix}/jb2a_patreon/Library/1st_Level/Burning_Hands/BurningHands_01_Regular_Green_600x600.webm`,
                orange: `${prefix}/jb2a_patreon/Library/1st_Level/Burning_Hands/BurningHands_01_Regular_Orange_600x600.webm`,
                purple: `${prefix}/jb2a_patreon/Library/1st_Level/Burning_Hands/BurningHands_01_Regular_Purple_600x600.webm`
            },
            '02': {
                blue: `${prefix}/jb2a_patreon/Library/1st_Level/Burning_Hands/BurningHands_02_Regular_Blue_600x600.webm`,
                green: `${prefix}/jb2a_patreon/Library/1st_Level/Burning_Hands/BurningHands_02_Regular_Green_600x600.webm`,
                orange: `${prefix}/jb2a_patreon/Library/1st_Level/Burning_Hands/BurningHands_02_Regular_Orange_600x600.webm`,
                purple: `${prefix}/jb2a_patreon/Library/1st_Level/Burning_Hands/BurningHands_02_Regular_Purple_600x600.webm`
            }
        },
        patreonDatabase.butterflies = {
            few: {
                blue: `${prefix}/jb2a_patreon/Library/Generic/Butterflies/Butterflies_01_Bright_Blue_Few_400x400.webm`,
                bright_orange: `${prefix}/jb2a_patreon/Library/Generic/Butterflies/Butterflies_01_Bright_Orange_Few_400x400.webm`,
                green: `${prefix}/jb2a_patreon/Library/Generic/Butterflies/Butterflies_01_Bright_Green_Few_400x400.webm`,
                orange: `${prefix}/jb2a_patreon/Library/Generic/Butterflies/Butterflies_01_Regular_Orange_Few_400x400.webm`,
                purple: `${prefix}/jb2a_patreon/Library/Generic/Butterflies/Butterflies_01_Bright_Purple_Few_400x400.webm`,
                red: `${prefix}/jb2a_patreon/Library/Generic/Butterflies/Butterflies_01_Dark_Red_Few_400x400.webm`,
                yellow: `${prefix}/jb2a_patreon/Library/Generic/Butterflies/Butterflies_01_Bright_Yellow_Few_400x400.webm`
            },
            many: {
                blue: `${prefix}/jb2a_patreon/Library/Generic/Butterflies/Butterflies_01_Bright_Blue_Many_400x400.webm`,
                bright_orange: `${prefix}/jb2a_patreon/Library/Generic/Butterflies/Butterflies_01_Bright_Orange_Many_400x400.webm`,
                green: `${prefix}/jb2a_patreon/Library/Generic/Butterflies/Butterflies_01_Bright_Green_Many_400x400.webm`,
                orange: `${prefix}/jb2a_patreon/Library/Generic/Butterflies/Butterflies_01_Regular_Orange_Many_400x400.webm`,
                purple: `${prefix}/jb2a_patreon/Library/Generic/Butterflies/Butterflies_01_Bright_Purple_Many_400x400.webm`,
                red: `${prefix}/jb2a_patreon/Library/Generic/Butterflies/Butterflies_01_Dark_Red_Many_400x400.webm`,
                yellow: `${prefix}/jb2a_patreon/Library/Generic/Butterflies/Butterflies_01_Bright_Yellow_Many_400x400.webm`
            },
            single: {
                blue: `${prefix}/jb2a_patreon/Library/Generic/Butterflies/Butterflies_01_Bright_Blue_Single_400x400.webm`,
                bright_orange: `${prefix}/jb2a_patreon/Library/Generic/Butterflies/Butterflies_01_Bright_Orange_Single_400x400.webm`,
                green: `${prefix}/jb2a_patreon/Library/Generic/Butterflies/Butterflies_01_Bright_Green_Single_400x400.webm`,
                orange: `${prefix}/jb2a_patreon/Library/Generic/Butterflies/Butterflies_01_Regular_Orange_Single_400x400.webm`,
                purple: `${prefix}/jb2a_patreon/Library/Generic/Butterflies/Butterflies_01_Bright_Purple_Single_400x400.webm`,
                red: `${prefix}/jb2a_patreon/Library/Generic/Butterflies/Butterflies_01_Dark_Red_Single_400x400.webm`,
                yellow: `${prefix}/jb2a_patreon/Library/Generic/Butterflies/Butterflies_01_Bright_Yellow_Single_400x400.webm`
            }
        },
        patreonDatabase.call_lightning = {
            low_res: {
                blue: `${prefix}/jb2a_patreon/Library/3rd_Level/Call_Lightning/CallLightning_01_Blue_1000x1000.webm`,
                blueorange: `${prefix}/jb2a_patreon/Library/3rd_Level/Call_Lightning/CallLightning_01_BlueOrange_1000x1000.webm`,
                green: `${prefix}/jb2a_patreon/Library/3rd_Level/Call_Lightning/CallLightning_01_Green_1000x1000.webm`,
                pinkyellow: `${prefix}/jb2a_patreon/Library/3rd_Level/Call_Lightning/CallLightning_01_PinkYellow_1000x1000.webm`,
                purple: `${prefix}/jb2a_patreon/Library/3rd_Level/Call_Lightning/CallLightning_01_Purple_1000x1000.webm`,
                red: `${prefix}/jb2a_patreon/Library/3rd_Level/Call_Lightning/CallLightning_01_Red_1000x1000.webm`,
                yellow: `${prefix}/jb2a_patreon/Library/3rd_Level/Call_Lightning/CallLightning_01_Yellow_1000x1000.webm`
            },
            high_res: {
                blue: `${prefix}/jb2a_patreon/Library/3rd_Level/Call_Lightning/High_Res/CallLightning_01_Blue_2400x2400.webm`,
                blueorange: `${prefix}/jb2a_patreon/Library/3rd_Level/Call_Lightning/High_Res/CallLightning_01_BlueOrange_2400x2400.webm`,
                purple: `${prefix}/jb2a_patreon/Library/3rd_Level/Call_Lightning/High_Res/CallLightning_01_Purple_2400x2400.webm`,
                red: `${prefix}/jb2a_patreon/Library/3rd_Level/Call_Lightning/High_Res/CallLightning_01_Red_2400x2400.webm`,
                yellow: `${prefix}/jb2a_patreon/Library/3rd_Level/Call_Lightning/High_Res/CallLightning_01_Yellow_2400x2400.webm`,
            }
        },
        patreonDatabase.campfire = {
            '01': {
                blue: `${prefix}/jb2a_patreon/Library/Generic/Fire/Campfire/Campfire_01_Regular_Blue_200x200.webm`,
                green: `${prefix}/jb2a_patreon/Library/Generic/Fire/Campfire/Campfire_01_Regular_Green_200x200.webm`,
                orange: `${prefix}/jb2a_patreon/Library/Generic/Fire/Campfire/Campfire_01_Regular_Orange_200x200.webm`,
                purple: `${prefix}/jb2a_patreon/Library/Generic/Fire/Campfire/Campfire_01_Regular_Purple_200x200.webm`
            },
            '02': {
                blue: `${prefix}/jb2a_patreon/Library/Generic/Fire/Campfire/Campfire_02_Regular_Blue_200x200.webm`,
                green: `${prefix}/jb2a_patreon/Library/Generic/Fire/Campfire/Campfire_02_Regular_Green_200x200.webm`,
                orange: `${prefix}/jb2a_patreon/Library/Generic/Fire/Campfire/Campfire_02_Regular_Orange_200x200.webm`,
                purple: `${prefix}/jb2a_patreon/Library/Generic/Fire/Campfire/Campfire_02_Regular_Purple_200x200.webm`
            }
        },
        patreonDatabase.chain_lightning = {
            _template: 'ranged',
            primary: {
                blue: {
                    '05ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Blue_05ft_Primary_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Blue_15ft_Primary_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Blue_30ft_Primary_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Blue_60ft_Primary_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Blue_90ft_Primary_4000x400.webm`
                },
                dark_purple: {
                    '05ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Dark_Purple_05ft_Primary_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Dark_Purple_15ft_Primary_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Dark_Purple_30ft_Primary_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Dark_Purple_60ft_Primary_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Dark_Purple_90ft_Primary_4000x400.webm`
                },
                dark_red: {
                    '05ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Dark_Red_05ft_Primary_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Dark_Red_15ft_Primary_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Dark_Red_30ft_Primary_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Dark_Red_60ft_Primary_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Dark_Red_90ft_Primary_4000x400.webm`
                },
                green: {
                    '05ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Green_05ft_Primary_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Green_15ft_Primary_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Green_30ft_Primary_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Green_60ft_Primary_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Green_90ft_Primary_4000x400.webm`
                },
                green02: {
                    '05ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Green02_05ft_Primary_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Green02_15ft_Primary_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Green02_30ft_Primary_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Green02_60ft_Primary_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Green02_90ft_Primary_4000x400.webm`
                },
                orange: {
                    '05ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Orange_05ft_Primary_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Orange_15ft_Primary_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Orange_30ft_Primary_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Orange_60ft_Primary_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Orange_90ft_Primary_4000x400.webm`
                },
                purple: {
                    '05ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Purple_05ft_Primary_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Purple_15ft_Primary_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Purple_30ft_Primary_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Purple_60ft_Primary_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Purple_90ft_Primary_4000x400.webm`
                },
                red: {
                    '05ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Red_05ft_Primary_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Red_15ft_Primary_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Red_30ft_Primary_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Red_60ft_Primary_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Red_90ft_Primary_4000x400.webm`
                },
                yellow: {
                    '05ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Yellow_05ft_Primary_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Yellow_15ft_Primary_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Yellow_30ft_Primary_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Yellow_60ft_Primary_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Yellow_90ft_Primary_4000x400.webm`
                }
            },
            secondary: {
                blue: {
                    '05ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Blue_05ft_Secondary_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Blue_15ft_Secondary_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Blue_30ft_Secondary_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Blue_60ft_Secondary_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Blue_90ft_Secondary_4000x400.webm`
                },
                dark_purple: {
                    '05ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Dark_Purple_05ft_Secondary_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Dark_Purple_15ft_Secondary_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Dark_Purple_30ft_Secondary_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Dark_Purple_60ft_Secondary_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Dark_Purple_90ft_Secondary_4000x400.webm`
                },
                dark_red: {
                    '05ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Dark_Red_05ft_Secondary_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Dark_Red_15ft_Secondary_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Dark_Red_30ft_Secondary_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Dark_Red_60ft_Secondary_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Dark_Red_90ft_Secondary_4000x400.webm`
                },
                green: {
                    '05ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Green_05ft_Secondary_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Green_15ft_Secondary_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Green_30ft_Secondary_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Green_60ft_Secondary_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Green_90ft_Secondary_4000x400.webm`
                },
                green02: {
                    '05ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Green02_05ft_Secondary_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Green02_15ft_Secondary_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Green02_30ft_Secondary_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Green02_60ft_Secondary_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Green02_90ft_Secondary_4000x400.webm`
                },
                orange: {
                    '05ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Orange_05ft_Secondary_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Orange_15ft_Secondary_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Orange_30ft_Secondary_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Orange_60ft_Secondary_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Orange_90ft_Secondary_4000x400.webm`
                },
                purple: {
                    '05ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Purple_05ft_Secondary_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Purple_15ft_Secondary_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Purple_30ft_Secondary_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Purple_60ft_Secondary_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Purple_90ft_Secondary_4000x400.webm`
                },
                red: {
                    '05ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Red_05ft_Secondary_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Red_15ft_Secondary_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Red_30ft_Secondary_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Red_60ft_Secondary_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Red_90ft_Secondary_4000x400.webm`
                },
                yellow: {
                    '05ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Yellow_05ft_Secondary_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Yellow_15ft_Secondary_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Yellow_30ft_Secondary_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Yellow_60ft_Secondary_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Yellow_90ft_Secondary_4000x400.webm`
                }
            }
        },
        patreonDatabase.chakram = {
            _template: 'ranged',
            '01': {
                return: {
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Chakram01_01_Regular_White_Return_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Chakram01_01_Regular_White_Return_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Chakram01_01_Regular_White_Return_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Chakram01_01_Regular_White_Return_90ft_4000x400.webm`
                },
                throw: {
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Chakram01_01_Regular_White_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Chakram01_01_Regular_White_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Chakram01_01_Regular_White_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Chakram01_01_Regular_White_90ft_4000x400.webm`
                }
            },
            '02': {
                '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Chakram01_02_Regular_White_15ft_1000x400.webm`,
                '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Chakram01_02_Regular_White_30ft_1600x400.webm`,
                '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Chakram01_02_Regular_White_60ft_2800x400.webm`,
                '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Chakram01_02_Regular_White_90ft_4000x400.webm`
            }
        },
        patreonDatabase.claws = {
            '200px': {
                bright_blue: `${prefix}/jb2a_patreon/Library/Generic/Creature/Claws_01_Bright_Blue_200x200.webm`,
                bright_green: `${prefix}/jb2a_patreon/Library/Generic/Creature/Claws_01_Bright_Green_200x200.webm`,
                bright_orange: `${prefix}/jb2a_patreon/Library/Generic/Creature/Claws_01_Bright_Orange_200x200.webm`,
                bright_purple: `${prefix}/jb2a_patreon/Library/Generic/Creature/Claws_01_Bright_Purple_200x200.webm`,
                bright_yellow: `${prefix}/jb2a_patreon/Library/Generic/Creature/Claws_01_Bright_Yellow_200x200.webm`,
                brown: `${prefix}/jb2a_patreon/Library/Generic/Creature/Claws_01_Regular_Brown_200x200.webm`,
                dark_red: `${prefix}/jb2a_patreon/Library/Generic/Creature/Claws_01_Dark_Red_200x200.webm`,
                red: `${prefix}/jb2a_patreon/Library/Generic/Creature/Claws_01_Regular_Red_200x200.webm`
            },
            '400px': {
                bright_blue: `${prefix}/jb2a_patreon/Library/Generic/Creature/Claws_01_Bright_Blue_400x400.webm`,
                bright_green: `${prefix}/jb2a_patreon/Library/Generic/Creature/Claws_01_Bright_Green_400x400.webm`,
                bright_orange: `${prefix}/jb2a_patreon/Library/Generic/Creature/Claws_01_Bright_Orange_400x400.webm`,
                bright_purple: `${prefix}/jb2a_patreon/Library/Generic/Creature/Claws_01_Bright_Purple_400x400.webm`,
                bright_yellow: `${prefix}/jb2a_patreon/Library/Generic/Creature/Claws_01_Bright_Yellow_400x400.webm`,
                brown: `${prefix}/jb2a_patreon/Library/Generic/Creature/Claws_01_Regular_Brown_400x400.webm`,
                dark_red: `${prefix}/jb2a_patreon/Library/Generic/Creature/Claws_01_Dark_Red_400x400.webm`,
                red: `${prefix}/jb2a_patreon/Library/Generic/Creature/Claws_01_Regular_Red_400x400.webm`
            }
        },
        patreonDatabase.cloud_of_daggers = {
            daggers: {
                blue: `${prefix}/jb2a_patreon/Library/2nd_Level/Cloud_Of_Daggers/CloudOfDaggers_01_Light_Blue_400x400.webm`,
                dark_purple: `${prefix}/jb2a_patreon/Library/2nd_Level/Cloud_Of_Daggers/CloudOfDaggers_01_Dark_Purple_400x400.webm`,
                dark_red: `${prefix}/jb2a_patreon/Library/2nd_Level/Cloud_Of_Daggers/CloudOfDaggers_01_Dark_Red_400x400.webm`,
                green: `${prefix}/jb2a_patreon/Library/2nd_Level/Cloud_Of_Daggers/CloudOfDaggers_01_Light_Green_400x400.webm`,
                orange: `${prefix}/jb2a_patreon/Library/2nd_Level/Cloud_Of_Daggers/CloudOfDaggers_01_Light_Orange_400x400.webm`,
                purple: `${prefix}/jb2a_patreon/Library/2nd_Level/Cloud_Of_Daggers/CloudOfDaggers_01_Light_Purple_400x400.webm`,
                red: `${prefix}/jb2a_patreon/Library/2nd_Level/Cloud_Of_Daggers/CloudOfDaggers_01_Light_Red_400x400.webm`,
                yellow: `${prefix}/jb2a_patreon/Library/2nd_Level/Cloud_Of_Daggers/CloudOfDaggers_01_Light_Yellow_400x400.webm`
            },
            kunai: {
                blue: `${prefix}/jb2a_patreon/Library/2nd_Level/Cloud_Of_Daggers/CloudOfDaggers_Kunai_01_Light_Blue_400x400.webm`,
                dark_purple: `${prefix}/jb2a_patreon/Library/2nd_Level/Cloud_Of_Daggers/CloudOfDaggers_Kunai_01_Dark_Purple_400x400.webm`,
                dark_red: `${prefix}/jb2a_patreon/Library/2nd_Level/Cloud_Of_Daggers/CloudOfDaggers_Kunai_01_Dark_Red_400x400.webm`,
                green: `${prefix}/jb2a_patreon/Library/2nd_Level/Cloud_Of_Daggers/CloudOfDaggers_Kunai_01_Light_Green_400x400.webm`,
                orange: `${prefix}/jb2a_patreon/Library/2nd_Level/Cloud_Of_Daggers/CloudOfDaggers_Kunai_01_Light_Orange_400x400.webm`,
                purple: `${prefix}/jb2a_patreon/Library/2nd_Level/Cloud_Of_Daggers/CloudOfDaggers_Kunai_01_Light_Purple_400x400.webm`,
                red: `${prefix}/jb2a_patreon/Library/2nd_Level/Cloud_Of_Daggers/CloudOfDaggers_Kunai_01_Light_Red_400x400.webm`,
                yellow: `${prefix}/jb2a_patreon/Library/2nd_Level/Cloud_Of_Daggers/CloudOfDaggers_Kunai_01_Light_Yellow_400x400.webm`
            }
        },
        patreonDatabase.club = {
            melee: {
                _template: 'melee',
                '01': {
                    dark_orangepurple: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Club01_01_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Club01_02_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Club01_03_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Club01_04_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Club01_05_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Club01_06_Dark_OrangePurple_800x600.webm`
                    ],
                    blue: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Club01_01_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Club01_02_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Club01_03_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Club01_04_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Club01_05_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Club01_06_Regular_Blue_800x600.webm`
                    ],
                    orange: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Club01_01_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Club01_02_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Club01_03_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Club01_04_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Club01_05_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Club01_06_Regular_Orange_800x600.webm`
                    ],
                    purple: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Club01_01_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Club01_02_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Club01_03_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Club01_04_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Club01_05_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Club01_06_Regular_Purple_800x600.webm`
                    ],
                    white: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Club01_01_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Club01_02_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Club01_03_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Club01_04_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Club01_05_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Club01_06_Regular_White_800x600.webm`
                    ]
                }
            }
        },
        patreonDatabase.cone_of_cold = {
            _template: "cone",
            blue: `${prefix}/jb2a_patreon/Library/5th_Level/Cone_Of_Cold/ConeOfCold_01_Regular_Blue_600x600.webm`,
            green: `${prefix}/jb2a_patreon/Library/5th_Level/Cone_Of_Cold/ConeOfCold_01_Regular_Green_600x600.webm`,
            orange: `${prefix}/jb2a_patreon/Library/5th_Level/Cone_Of_Cold/ConeOfCold_01_Regular_Orange_600x600.webm`,
            purple: `${prefix}/jb2a_patreon/Library/5th_Level/Cone_Of_Cold/ConeOfCold_01_Regular_Purple_600x600.webm`
        },
        patreonDatabase.cure_wounds = {
            '200px': {
                blue: `${prefix}/jb2a_patreon/Library/1st_Level/Cure_Wounds/CureWounds_01_Blue_200x200.webm`,
                green: `${prefix}/jb2a_patreon/Library/1st_Level/Cure_Wounds/CureWounds_01_Green_200x200.webm`,
                pink: `${prefix}/jb2a_patreon/Library/1st_Level/Cure_Wounds/CureWounds_01_Pink_200x200.webm`,
                purple: `${prefix}/jb2a_patreon/Library/1st_Level/Cure_Wounds/CureWounds_01_Purple_200x200.webm`,
                red: `${prefix}/jb2a_patreon/Library/1st_Level/Cure_Wounds/CureWounds_01_Red_200x200.webm`
            },
            '400px': {
                blue: `${prefix}/jb2a_patreon/Library/1st_Level/Cure_Wounds/CureWounds_01_Blue_400x400.webm`,
                green: `${prefix}/jb2a_patreon/Library/1st_Level/Cure_Wounds/CureWounds_01_Green_400x400.webm`,
                pink: `${prefix}/jb2a_patreon/Library/1st_Level/Cure_Wounds/CureWounds_01_Pink_400x400.webm`,
                purple: `${prefix}/jb2a_patreon/Library/1st_Level/Cure_Wounds/CureWounds_01_Purple_400x400.webm`,
                red: `${prefix}/jb2a_patreon/Library/1st_Level/Cure_Wounds/CureWounds_01_Red_400x400.webm`
            }
        },
        patreonDatabase.dagger = {
            melee: {
                _template: 'melee',
                fire: {
                    dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Dagger02_Fire_Dark_Purple_800x600.webm`,
                    blue: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Dagger02_Fire_Regular_Blue_800x600.webm`,
                    green: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Dagger02_Fire_Regular_Green_800x600.webm`,
                    orange: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Dagger02_Fire_Regular_Orange_800x600.webm`,
                    pink: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Dagger02_Fire_Regular_Pink_800x600.webm`,
                    red: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Dagger02_Fire_Regular_Red_800x600.webm`,
                    white: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Dagger02_01_Regular_White_800x600.webm`,
                    yellow: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Dagger02_Fire_Regular_Yellow_800x600.webm`
                },
            },
            return: {
                _template: 'ranged',
                '01': {
                    blue: {
                        '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger01_01_Regular_Blue_Return_15ft_1000x400.webm`,
                        '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger01_01_Regular_Blue_Return_30ft_1600x400.webm`,
                        '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger01_01_Regular_Blue_Return_60ft_2800x400.webm`,
                        '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger01_01_Regular_Blue_Return_90ft_4000x400.webm`
                    },
                    dark_purple: {
                        '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger01_01_Dark_Purple_Return_15ft_1000x400.webm`,
                        '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger01_01_Dark_Purple_Return_30ft_1600x400.webm`,
                        '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger01_01_Dark_Purple_Return_60ft_2800x400.webm`,
                        '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger01_01_Dark_Purple_Return_90ft_4000x400.webm`
                    },
                    pink: {
                        '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger01_01_Regular_Pink_Return_15ft_1000x400.webm`,
                        '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger01_01_Regular_Pink_Return_30ft_1600x400.webm`,
                        '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger01_01_Regular_Pink_Return_60ft_2800x400.webm`,
                        '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger01_01_Regular_Pink_Return_90ft_4000x400.webm`
                    },
                    red: {
                        '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger01_01_Regular_Red_Return_15ft_1000x400.webm`,
                        '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger01_01_Regular_Red_Return_30ft_1600x400.webm`,
                        '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger01_01_Regular_Red_Return_60ft_2800x400.webm`,
                        '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger01_01_Regular_Red_Return_90ft_4000x400.webm`
                    },
                    white: {
                        '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger01_01_Regular_White_Return_15ft_1000x400.webm`,
                        '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger01_01_Regular_White_Return_30ft_1600x400.webm`,
                        '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger01_01_Regular_White_Return_60ft_2800x400.webm`,
                        '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger01_01_Regular_White_Return_90ft_4000x400.webm`
                    }
                },
                '02': {
                    blue: {
                        '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger02_01_Regular_Blue_Return_15ft_1000x400.webm`,
                        '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger02_01_Regular_Blue_Return_30ft_1600x400.webm`,
                        '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger02_01_Regular_Blue_Return_60ft_2800x400.webm`,
                        '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger02_01_Regular_Blue_Return_90ft_4000x400.webm`
                    },
                    dark_purple: {
                        '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger02_01_Dark_Purple_Return_15ft_1000x400.webm`,
                        '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger02_01_Dark_Purple_Return_30ft_1600x400.webm`,
                        '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger02_01_Dark_Purple_Return_60ft_2800x400.webm`,
                        '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger02_01_Dark_Purple_Return_90ft_4000x400.webm`
                    },
                    pink: {
                        '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger02_01_Regular_Pink_Return_15ft_1000x400.webm`,
                        '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger02_01_Regular_Pink_Return_30ft_1600x400.webm`,
                        '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger02_01_Regular_Pink_Return_60ft_2800x400.webm`,
                        '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger02_01_Regular_Pink_Return_90ft_4000x400.webm`
                    },
                    red: {
                        '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger02_01_Regular_Red_Return_15ft_1000x400.webm`,
                        '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger02_01_Regular_Red_Return_30ft_1600x400.webm`,
                        '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger02_01_Regular_Red_Return_60ft_2800x400.webm`,
                        '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger02_01_Regular_Red_Return_90ft_4000x400.webm`
                    },
                    white: {
                        '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger02_01_Regular_White_Return_15ft_1000x400.webm`,
                        '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger02_01_Regular_White_Return_30ft_1600x400.webm`,
                        '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger02_01_Regular_White_Return_60ft_2800x400.webm`,
                        '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger02_01_Regular_White_Return_90ft_4000x400.webm`
                    }
                }
            },
            throw: {
                _template: 'ranged',
                '01': {
                    blue: {
                        '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger01_01_Regular_Blue_15ft_1000x400.webm`,
                        '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger01_01_Regular_Blue_30ft_1600x400.webm`,
                        '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger01_01_Regular_Blue_60ft_2800x400.webm`,
                        '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger01_01_Regular_Blue_90ft_4000x400.webm`
                    },
                    dark_purple: {
                        '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger01_01_Dark_Purple_15ft_1000x400.webm`,
                        '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger01_01_Dark_Purple_30ft_1600x400.webm`,
                        '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger01_01_Dark_Purple_60ft_2800x400.webm`,
                        '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger01_01_Dark_Purple_90ft_4000x400.webm`
                    },
                    pink: {
                        '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger01_01_Regular_Pink_15ft_1000x400.webm`,
                        '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger01_01_Regular_Pink_30ft_1600x400.webm`,
                        '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger01_01_Regular_Pink_60ft_2800x400.webm`,
                        '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger01_01_Regular_Pink_90ft_4000x400.webm`
                    },
                    red: {
                        '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger01_01_Regular_Red_15ft_1000x400.webm`,
                        '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger01_01_Regular_Red_30ft_1600x400.webm`,
                        '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger01_01_Regular_Red_60ft_2800x400.webm`,
                        '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger01_01_Regular_Red_90ft_4000x400.webm`
                    },
                    white: {
                        '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger01_01_Regular_White_15ft_1000x400.webm`,
                        '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger01_01_Regular_White_30ft_1600x400.webm`,
                        '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger01_01_Regular_White_60ft_2800x400.webm`,
                        '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger01_01_Regular_White_90ft_4000x400.webm`
                    }
                },
                '02': {
                    white: {
                        '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger02_01_Regular_Blue_15ft_1000x400.webm`,
                        '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger02_01_Regular_Blue_30ft_1600x400.webm`,
                        '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger02_01_Regular_Blue_60ft_2800x400.webm`,
                        '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger02_01_Regular_Blue_90ft_4000x400.webm`
                    },
                    dark_purple: {
                        '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger02_01_Dark_Purple_15ft_1000x400.webm`,
                        '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger02_01_Dark_Purple_30ft_1600x400.webm`,
                        '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger02_01_Dark_Purple_60ft_2800x400.webm`,
                        '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger02_01_Dark_Purple_90ft_4000x400.webm`
                    },
                    pink: {
                        '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger02_01_Regular_Pink_15ft_1000x400.webm`,
                        '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger02_01_Regular_Pink_30ft_1600x400.webm`,
                        '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger02_01_Regular_Pink_60ft_2800x400.webm`,
                        '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger02_01_Regular_Pink_90ft_4000x400.webm`
                    },
                    red: {
                        '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger02_01_Regular_Red_15ft_1000x400.webm`,
                        '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger02_01_Regular_Red_30ft_1600x400.webm`,
                        '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger02_01_Regular_Red_60ft_2800x400.webm`,
                        '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger02_01_Regular_Red_90ft_4000x400.webm`
                    },
                    white: {
                        '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger02_01_Regular_White_15ft_1000x400.webm`,
                        '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger02_01_Regular_White_30ft_1600x400.webm`,
                        '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger02_01_Regular_White_60ft_2800x400.webm`,
                        '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Dagger02_01_Regular_White_90ft_4000x400.webm`
                    }
                }
            }
        },
        patreonDatabase.dancing_light = {
            blueteal: `${prefix}/jb2a_patreon/Library/Cantrip/Dancing_Lights/DancingLights_01_BlueTeal_200x200.webm`,
            blueyellow: `${prefix}/jb2a_patreon/Library/Cantrip/Dancing_Lights/DancingLights_01_BlueYellow_200x200.webm`,
            green: `${prefix}/jb2a_patreon/Library/Cantrip/Dancing_Lights/DancingLights_01_Green_200x200.webm`,
            pink: `${prefix}/jb2a_patreon/Library/Cantrip/Dancing_Lights/DancingLights_01_Pink_200x200.webm`,
            purplegreen: `${prefix}/jb2a_patreon/Library/Cantrip/Dancing_Lights/DancingLights_01_PurpleGreen_200x200.webm`,
            red: `${prefix}/jb2a_patreon/Library/Cantrip/Dancing_Lights/DancingLights_01_Red_200x200.webm`,
            yellow: `${prefix}/jb2a_patreon/Library/Cantrip/Dancing_Lights/DancingLights_01_Yellow_200x200.webm`
        },
        patreonDatabase.darkness = {
            black: `${prefix}/jb2a_patreon/Library/2nd_Level/Darkness/Darkness_01_Black_600x600.webm`,
            green: `${prefix}/jb2a_patreon/Library/2nd_Level/Darkness/Darkness_01_Green_600x600.webm`
        },
        patreonDatabase.detect_magic = {
            circle: {
                blue: `${prefix}/jb2a_patreon/Library/1st_Level/Detect_Magic/DetectMagicCircle_01_Regular_Blue_1200x1200.webm`,
                green: `${prefix}/jb2a_patreon/Library/1st_Level/Detect_Magic/DetectMagicCircle_01_Regular_Green_1200x1200.webm`,
                greenorange: `${prefix}/jb2a_patreon/Library/1st_Level/Detect_Magic/DetectMagicCircle_01_Regular_GreenOrange_1200x1200.webm`,
                grey: `${prefix}/jb2a_patreon/Library/1st_Level/Detect_Magic/DetectMagicCircle_01_Regular_Grey_1200x1200.webm`,
                purple: `${prefix}/jb2a_patreon/Library/1st_Level/Detect_Magic/DetectMagicCircle_01_Regular_Purple_1200x1200.webm`
            },
            cone: {
                _template: 'cone100',
                blue: {
                    '05ft': `${prefix}/jb2a_patreon/Library/1st_Level/Detect_Magic/DetectMagicCone_01_Regular_Blue_05ft_300x300.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/1st_Level/Detect_Magic/DetectMagicCone_01_Regular_Blue_15ft_500x500.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/1st_Level/Detect_Magic/DetectMagicCone_01_Regular_Blue_30ft_800x800.webm`
                },
                green: {
                    '05ft': `${prefix}/jb2a_patreon/Library/1st_Level/Detect_Magic/DetectMagicCone_01_Regular_Green_05ft_300x300.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/1st_Level/Detect_Magic/DetectMagicCone_01_Regular_Green_15ft_500x500.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/1st_Level/Detect_Magic/DetectMagicCone_01_Regular_Green_30ft_800x800.webm`
                },
                greenorange: {
                    '05ft': `${prefix}/jb2a_patreon/Library/1st_Level/Detect_Magic/DetectMagicCone_01_Regular_GreenOrange_05ft_300x300.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/1st_Level/Detect_Magic/DetectMagicCone_01_Regular_GreenOrange_15ft_500x500.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/1st_Level/Detect_Magic/DetectMagicCone_01_Regular_GreenOrange_30ft_800x800.webm`
                },
                grey: {
                    '05ft': `${prefix}/jb2a_patreon/Library/1st_Level/Detect_Magic/DetectMagicCone_01_Regular_Grey_05ft_300x300.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/1st_Level/Detect_Magic/DetectMagicCone_01_Regular_Grey_15ft_500x500.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/1st_Level/Detect_Magic/DetectMagicCone_01_Regular_Grey_30ft_800x800.webm`
                },
                purple: {
                    '05ft': `${prefix}/jb2a_patreon/Library/1st_Level/Detect_Magic/DetectMagicCone_01_Regular_Purple_05ft_300x300.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/1st_Level/Detect_Magic/DetectMagicCone_01_Regular_Purple_15ft_500x500.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/1st_Level/Detect_Magic/DetectMagicCone_01_Regular_Purple_30ft_800x800.webm`
                }
            }
        },
        patreonDatabase.disintegrate = {
            _template: 'ranged',
            dark_red: {
                '05ft': `${prefix}/jb2a_patreon/Library/6th_Level/Disintegrate/Disintegrate_01_Dark_Red_05ft_600x400.webm`,
                '15ft': `${prefix}/jb2a_patreon/Library/6th_Level/Disintegrate/Disintegrate_01_Dark_Red_15ft_1000x400.webm`,
                '30ft': `${prefix}/jb2a_patreon/Library/6th_Level/Disintegrate/Disintegrate_01_Dark_Red_30ft_1600x400.webm`,
                '60ft': `${prefix}/jb2a_patreon/Library/6th_Level/Disintegrate/Disintegrate_01_Dark_Red_60ft_2800x400.webm`,
                '90ft': `${prefix}/jb2a_patreon/Library/6th_Level/Disintegrate/Disintegrate_01_Dark_Red_90ft_4000x400.webm`
            },
            green: {
                '05ft': `${prefix}/jb2a_patreon/Library/6th_Level/Disintegrate/Disintegrate_01_Regular_Green01_05ft_600x400.webm`,
                '15ft': `${prefix}/jb2a_patreon/Library/6th_Level/Disintegrate/Disintegrate_01_Regular_Green01_15ft_1000x400.webm`,
                '30ft': `${prefix}/jb2a_patreon/Library/6th_Level/Disintegrate/Disintegrate_01_Regular_Green01_30ft_1600x400.webm`,
                '60ft': `${prefix}/jb2a_patreon/Library/6th_Level/Disintegrate/Disintegrate_01_Regular_Green01_60ft_2800x400.webm`,
                '90ft': `${prefix}/jb2a_patreon/Library/6th_Level/Disintegrate/Disintegrate_01_Regular_Green01_90ft_4000x400.webm`
            },
            orangepink: {
                '05ft': `${prefix}/jb2a_patreon/Library/6th_Level/Disintegrate/Disintegrate_01_Regular_OrangePink_05ft_600x400.webm`,
                '15ft': `${prefix}/jb2a_patreon/Library/6th_Level/Disintegrate/Disintegrate_01_Regular_OrangePink_15ft_1000x400.webm`,
                '30ft': `${prefix}/jb2a_patreon/Library/6th_Level/Disintegrate/Disintegrate_01_Regular_OrangePink_30ft_1600x400.webm`,
                '60ft': `${prefix}/jb2a_patreon/Library/6th_Level/Disintegrate/Disintegrate_01_Regular_OrangePink_60ft_2800x400.webm`,
                '90ft': `${prefix}/jb2a_patreon/Library/6th_Level/Disintegrate/Disintegrate_01_Regular_OrangePink_90ft_4000x400.webm`
            },
            pink: {
                '05ft': `${prefix}/jb2a_patreon/Library/6th_Level/Disintegrate/Disintegrate_01_Regular_Pink_05ft_600x400.webm`,
                '15ft': `${prefix}/jb2a_patreon/Library/6th_Level/Disintegrate/Disintegrate_01_Regular_Pink_15ft_1000x400.webm`,
                '30ft': `${prefix}/jb2a_patreon/Library/6th_Level/Disintegrate/Disintegrate_01_Regular_Pink_30ft_1600x400.webm`,
                '60ft': `${prefix}/jb2a_patreon/Library/6th_Level/Disintegrate/Disintegrate_01_Regular_Pink_60ft_2800x400.webm`,
                '90ft': `${prefix}/jb2a_patreon/Library/6th_Level/Disintegrate/Disintegrate_01_Regular_Pink_90ft_4000x400.webm`
            },
            purpleblue: {
                '05ft': `${prefix}/jb2a_patreon/Library/6th_Level/Disintegrate/Disintegrate_01_Regular_PurpleBlue_05ft_600x400.webm`,
                '15ft': `${prefix}/jb2a_patreon/Library/6th_Level/Disintegrate/Disintegrate_01_Regular_PurpleBlue_15ft_1000x400.webm`,
                '30ft': `${prefix}/jb2a_patreon/Library/6th_Level/Disintegrate/Disintegrate_01_Regular_PurpleBlue_30ft_1600x400.webm`,
                '60ft': `${prefix}/jb2a_patreon/Library/6th_Level/Disintegrate/Disintegrate_01_Regular_PurpleBlue_60ft_2800x400.webm`,
                '90ft': `${prefix}/jb2a_patreon/Library/6th_Level/Disintegrate/Disintegrate_01_Regular_PurpleBlue_90ft_4000x400.webm`
            }
        },
        patreonDatabase.divine_smite = {
            caster: {
                blueyellow: `${prefix}/jb2a_patreon/Library/2nd_Level/Divine_Smite/DivineSmite_01_Regular_BlueYellow_Caster_400x400.webm`,
                dark_purple: `${prefix}/jb2a_patreon/Library/2nd_Level/Divine_Smite/DivineSmite_01_Dark_Purple_Caster_400x400.webm`,
                dark_red: `${prefix}/jb2a_patreon/Library/2nd_Level/Divine_Smite/DivineSmite_01_Dark_Red_Caster_400x400.webm`,
                greenyellow: `${prefix}/jb2a_patreon/Library/2nd_Level/Divine_Smite/DivineSmite_01_Regular_GreenYellow_Caster_400x400.webm`,
                orange: `${prefix}/jb2a_patreon/Library/2nd_Level/Divine_Smite/DivineSmite_01_Regular_Orange_Caster_400x400.webm`,
                purplepink: `${prefix}/jb2a_patreon/Library/2nd_Level/Divine_Smite/DivineSmite_01_Regular_PurplePink_Caster_400x400.webm`,
                yellowwhite: `${prefix}/jb2a_patreon/Library/2nd_Level/Divine_Smite/DivineSmite_01_Regular_YellowWhite_Caster_400x400.webm`
            },
            target: {
                blueyellow: `${prefix}/jb2a_patreon/Library/2nd_Level/Divine_Smite/DivineSmite_01_Regular_BlueYellow_Target_400x400.webm`,
                dark_purple: `${prefix}/jb2a_patreon/Library/2nd_Level/Divine_Smite/DivineSmite_01_Dark_Purple_Target_400x400.webm`,
                dark_red: `${prefix}/jb2a_patreon/Library/2nd_Level/Divine_Smite/DivineSmite_01_Dark_Red_Target_400x400.webm`,
                greenyellow: `${prefix}/jb2a_patreon/Library/2nd_Level/Divine_Smite/DivineSmite_01_Regular_GreenYellow_Target_400x400.webm`,
                orange: `${prefix}/jb2a_patreon/Library/2nd_Level/Divine_Smite/DivineSmite_01_Regular_Orange_Target_400x400.webm`,
                purplepink: `${prefix}/jb2a_patreon/Library/2nd_Level/Divine_Smite/DivineSmite_01_Regular_PurplePink_Target_400x400.webm`,
                yellowwhite: `${prefix}/jb2a_patreon/Library/2nd_Level/Divine_Smite/DivineSmite_01_Regular_YellowWhite_Target_400x400.webm`
            }
        },
        patreonDatabase.dizzy_stars = {
            '200px': {
                black: `${prefix}/jb2a_patreon/Library/Generic/Conditions/Dizzy_Stars/DizzyStars_01_Black_200x200.webm`,
                blueorange: `${prefix}/jb2a_patreon/Library/Generic/Conditions/Dizzy_Stars/DizzyStars_01_BlueOrange_200x200.webm`,
                green: `${prefix}/jb2a_patreon/Library/Generic/Conditions/Dizzy_Stars/DizzyStars_01_Green_200x200.webm`,
                orange: `${prefix}/jb2a_patreon/Library/Generic/Conditions/Dizzy_Stars/DizzyStars_01_Orange_200x200.webm`,
                pink: `${prefix}/jb2a_patreon/Library/Generic/Conditions/Dizzy_Stars/DizzyStars_01_Pink_200x200.webm`,
                purple: `${prefix}/jb2a_patreon/Library/Generic/Conditions/Dizzy_Stars/DizzyStars_01_Purple_200x200.webm`,
                red: `${prefix}/jb2a_patreon/Library/Generic/Conditions/Dizzy_Stars/DizzyStars_01_Red_200x200.webm`,
                white: `${prefix}/jb2a_patreon/Library/Generic/Conditions/Dizzy_Stars/DizzyStars_01_White_200x200.webm`,
                yellow: `${prefix}/jb2a_patreon/Library/Generic/Conditions/Dizzy_Stars/DizzyStars_01_Yellow_200x200.webm`
            },
            '400px': {
                black: `${prefix}/jb2a_patreon/Library/Generic/Conditions/Dizzy_Stars/DizzyStars_01_Black_400x400.webm`,
                blueorange: `${prefix}/jb2a_patreon/Library/Generic/Conditions/Dizzy_Stars/DizzyStars_01_BlueOrange_400x400.webm`,
                green: `${prefix}/jb2a_patreon/Library/Generic/Conditions/Dizzy_Stars/DizzyStars_01_Green_400x400.webm`,
                orange: `${prefix}/jb2a_patreon/Library/Generic/Conditions/Dizzy_Stars/DizzyStars_01_Orange_400x400.webm`,
                pink: `${prefix}/jb2a_patreon/Library/Generic/Conditions/Dizzy_Stars/DizzyStars_01_Pink_400x400.webm`,
                purple: `${prefix}/jb2a_patreon/Library/Generic/Conditions/Dizzy_Stars/DizzyStars_01_Purple_400x400.webm`,
                red: `${prefix}/jb2a_patreon/Library/Generic/Conditions/Dizzy_Stars/DizzyStars_01_Red_400x400.webm`,
                white: `${prefix}/jb2a_patreon/Library/Generic/Conditions/Dizzy_Stars/DizzyStars_01_White_400x400.webm`,
                yellow: `${prefix}/jb2a_patreon/Library/Generic/Conditions/Dizzy_Stars/DizzyStars_01_Yellow_400x400.webm`
            }
        },
        patreonDatabase.dodecahedron = {
            simple: {
                blue: `${prefix}/jb2a_patreon/Library/Generic/Energy/Dodecahedron_01_Regular_Blue_600x600.webm`,
                green: `${prefix}/jb2a_patreon/Library/Generic/Energy/Dodecahedron_01_Regular_Green_600x600.webm`
            },
            roll: {
                blue: `${prefix}/jb2a_patreon/Library/Generic/Energy/DodecahedronRoll_01_Regular_Blue_600x600.webm`,
                green: `${prefix}/jb2a_patreon/Library/Generic/Energy/DodecahedronRoll_01_Regular_Green_600x600.webm`
            },
            rune: {
                above: {
                    dark_greenpurple: `${prefix}/jb2a_patreon/Library/Generic/Energy/DodecahedronRuneAbove_01_Dark_GreenPurple_600x600.webm`,
                    blueyellow: `${prefix}/jb2a_patreon/Library/Generic/Energy/DodecahedronRuneAbove_01_Regular_BlueYellow_600x600.webm`
                },
                below: {
                    dark_greenpurple: `${prefix}/jb2a_patreon/Library/Generic/Energy/DodecahedronRuneBelow_01_Dark_GreenPurple_600x600.webm`,
                    blueyellow: `${prefix}/jb2a_patreon/Library/Generic/Energy/DodecahedronRuneBelow_01_Regular_BlueYellow_600x600.webm`
                }
            },
            skull: {
                above: {
                    dark_greenpurple: `${prefix}/jb2a_patreon/Library/Generic/Energy/DodecahedronSkullAbove_01_Dark_GreenPurple_600x600.webm`
                },
                below: {
                    dark_greenpurple: `${prefix}/jb2a_patreon/Library/Generic/Energy/DodecahedronSkullBelow_01_Dark_GreenPurple_600x600.webm`
                }
            },
            star: {
                above: {
                    blueyellow: `${prefix}/jb2a_patreon/Library/Generic/Energy/DodecahedronStarAbove_01_Regular_BlueYellow_600x600.webm`
                },
                below: {
                    blueyellow: `${prefix}/jb2a_patreon/Library/Generic/Energy/DodecahedronStarBelow_01_Regular_BlueYellow_600x600.webm`
                }
            }
        },
        patreonDatabase.eldritch_blast = {
            _template: 'ranged',
            dark_green: {
                '05ft': `${prefix}/jb2a_patreon/Library/Cantrip/Eldritch_Blast/EldritchBlast_01_Dark_Green_05ft_600x400.webm`,
                '15ft': `${prefix}/jb2a_patreon/Library/Cantrip/Eldritch_Blast/EldritchBlast_01_Dark_Green_15ft_1000x400.webm`,
                '30ft': `${prefix}/jb2a_patreon/Library/Cantrip/Eldritch_Blast/EldritchBlast_01_Dark_Green_30ft_1600x400.webm`,
                '60ft': `${prefix}/jb2a_patreon/Library/Cantrip/Eldritch_Blast/EldritchBlast_01_Dark_Green_60ft_2800x400.webm`,
                '90ft': `${prefix}/jb2a_patreon/Library/Cantrip/Eldritch_Blast/EldritchBlast_01_Dark_Green_90ft_4000x400.webm`
            },
            dark_red: {
                '05ft': `${prefix}/jb2a_patreon/Library/Cantrip/Eldritch_Blast/EldritchBlast_01_Dark_Red_05ft_600x400.webm`,
                '15ft': `${prefix}/jb2a_patreon/Library/Cantrip/Eldritch_Blast/EldritchBlast_01_Dark_Red_15ft_1000x400.webm`,
                '30ft': `${prefix}/jb2a_patreon/Library/Cantrip/Eldritch_Blast/EldritchBlast_01_Dark_Red_30ft_1600x400.webm`,
                '60ft': `${prefix}/jb2a_patreon/Library/Cantrip/Eldritch_Blast/EldritchBlast_01_Dark_Red_60ft_2800x400.webm`,
                '90ft': `${prefix}/jb2a_patreon/Library/Cantrip/Eldritch_Blast/EldritchBlast_01_Dark_Red_90ft_4000x400.webm`
            },
            green: {
                '05ft': `${prefix}/jb2a_patreon/Library/Cantrip/Eldritch_Blast/EldritchBlast_01_Regular_Green_05ft_600x400.webm`,
                '15ft': `${prefix}/jb2a_patreon/Library/Cantrip/Eldritch_Blast/EldritchBlast_01_Regular_Green_15ft_1000x400.webm`,
                '30ft': `${prefix}/jb2a_patreon/Library/Cantrip/Eldritch_Blast/EldritchBlast_01_Regular_Green_30ft_1600x400.webm`,
                '60ft': `${prefix}/jb2a_patreon/Library/Cantrip/Eldritch_Blast/EldritchBlast_01_Regular_Green_60ft_2800x400.webm`,
                '90ft': `${prefix}/jb2a_patreon/Library/Cantrip/Eldritch_Blast/EldritchBlast_01_Regular_Green_90ft_4000x400.webm`
            },
            lightblue: {
                '05ft': `${prefix}/jb2a_patreon/Library/Cantrip/Eldritch_Blast/EldritchBlast_01_Regular_LightBlue_05ft_600x400.webm`,
                '15ft': `${prefix}/jb2a_patreon/Library/Cantrip/Eldritch_Blast/EldritchBlast_01_Regular_LightBlue_15ft_1000x400.webm`,
                '30ft': `${prefix}/jb2a_patreon/Library/Cantrip/Eldritch_Blast/EldritchBlast_01_Regular_LightBlue_30ft_1600x400.webm`,
                '60ft': `${prefix}/jb2a_patreon/Library/Cantrip/Eldritch_Blast/EldritchBlast_01_Regular_LightBlue_60ft_2800x400.webm`,
                '90ft': `${prefix}/jb2a_patreon/Library/Cantrip/Eldritch_Blast/EldritchBlast_01_Regular_LightBlue_90ft_4000x400.webm`
            },
            lightgreen: {
                '05ft': `${prefix}/jb2a_patreon/Library/Cantrip/Eldritch_Blast/EldritchBlast_01_Regular_LightGreen_05ft_600x400.webm`,
                '15ft': `${prefix}/jb2a_patreon/Library/Cantrip/Eldritch_Blast/EldritchBlast_01_Regular_LightGreen_15ft_1000x400.webm`,
                '30ft': `${prefix}/jb2a_patreon/Library/Cantrip/Eldritch_Blast/EldritchBlast_01_Regular_LightGreen_30ft_1600x400.webm`,
                '60ft': `${prefix}/jb2a_patreon/Library/Cantrip/Eldritch_Blast/EldritchBlast_01_Regular_LightGreen_60ft_2800x400.webm`,
                '90ft': `${prefix}/jb2a_patreon/Library/Cantrip/Eldritch_Blast/EldritchBlast_01_Regular_LightGreen_90ft_4000x400.webm`
            },
            orange: {
                '05ft': `${prefix}/jb2a_patreon/Library/Cantrip/Eldritch_Blast/EldritchBlast_01_Regular_Orange_05ft_600x400.webm`,
                '15ft': `${prefix}/jb2a_patreon/Library/Cantrip/Eldritch_Blast/EldritchBlast_01_Regular_Orange_15ft_1000x400.webm`,
                '30ft': `${prefix}/jb2a_patreon/Library/Cantrip/Eldritch_Blast/EldritchBlast_01_Regular_Orange_30ft_1600x400.webm`,
                '60ft': `${prefix}/jb2a_patreon/Library/Cantrip/Eldritch_Blast/EldritchBlast_01_Regular_Orange_60ft_2800x400.webm`,
                '90ft': `${prefix}/jb2a_patreon/Library/Cantrip/Eldritch_Blast/EldritchBlast_01_Regular_Orange_90ft_4000x400.webm`
            },
            pink: {
                '05ft': `${prefix}/jb2a_patreon/Library/Cantrip/Eldritch_Blast/EldritchBlast_01_Regular_Pink_05ft_600x400.webm`,
                '15ft': `${prefix}/jb2a_patreon/Library/Cantrip/Eldritch_Blast/EldritchBlast_01_Regular_Pink_15ft_1000x400.webm`,
                '30ft': `${prefix}/jb2a_patreon/Library/Cantrip/Eldritch_Blast/EldritchBlast_01_Regular_Pink_30ft_1600x400.webm`,
                '60ft': `${prefix}/jb2a_patreon/Library/Cantrip/Eldritch_Blast/EldritchBlast_01_Regular_Pink_60ft_2800x400.webm`,
                '90ft': `${prefix}/jb2a_patreon/Library/Cantrip/Eldritch_Blast/EldritchBlast_01_Regular_Pink_90ft_4000x400.webm`
            },
            purple: {
                '05ft': `${prefix}/jb2a_patreon/Library/Cantrip/Eldritch_Blast/EldritchBlast_01_Regular_Purple_05ft_600x400.webm`,
                '15ft': `${prefix}/jb2a_patreon/Library/Cantrip/Eldritch_Blast/EldritchBlast_01_Regular_Purple_15ft_1000x400.webm`,
                '30ft': `${prefix}/jb2a_patreon/Library/Cantrip/Eldritch_Blast/EldritchBlast_01_Regular_Purple_30ft_1600x400.webm`,
                '60ft': `${prefix}/jb2a_patreon/Library/Cantrip/Eldritch_Blast/EldritchBlast_01_Regular_Purple_60ft_2800x400.webm`,
                '90ft': `${prefix}/jb2a_patreon/Library/Cantrip/Eldritch_Blast/EldritchBlast_01_Regular_Purple_90ft_4000x400.webm`
            },
            rainbow: {
                '05ft': `${prefix}/jb2a_patreon/Library/Cantrip/Eldritch_Blast/EldritchBlast_01_Regular_Rainbow_05ft_600x400.webm`,
                '15ft': `${prefix}/jb2a_patreon/Library/Cantrip/Eldritch_Blast/EldritchBlast_01_Regular_Rainbow_15ft_1000x400.webm`,
                '30ft': `${prefix}/jb2a_patreon/Library/Cantrip/Eldritch_Blast/EldritchBlast_01_Regular_Rainbow_30ft_1600x400.webm`,
                '60ft': `${prefix}/jb2a_patreon/Library/Cantrip/Eldritch_Blast/EldritchBlast_01_Regular_Rainbow_60ft_2800x400.webm`,
                '90ft': `${prefix}/jb2a_patreon/Library/Cantrip/Eldritch_Blast/EldritchBlast_01_Regular_Rainbow_90ft_4000x400.webm`
            },
            yellow: {
                '05ft': `${prefix}/jb2a_patreon/Library/Cantrip/Eldritch_Blast/EldritchBlast_01_Regular_Yellow_05ft_600x400.webm`,
                '15ft': `${prefix}/jb2a_patreon/Library/Cantrip/Eldritch_Blast/EldritchBlast_01_Regular_Yellow_15ft_1000x400.webm`,
                '30ft': `${prefix}/jb2a_patreon/Library/Cantrip/Eldritch_Blast/EldritchBlast_01_Regular_Yellow_30ft_1600x400.webm`,
                '60ft': `${prefix}/jb2a_patreon/Library/Cantrip/Eldritch_Blast/EldritchBlast_01_Regular_Yellow_60ft_2800x400.webm`,
                '90ft': `${prefix}/jb2a_patreon/Library/Cantrip/Eldritch_Blast/EldritchBlast_01_Regular_Yellow_90ft_4000x400.webm`
            }
        },
        patreonDatabase.electric_arc = {
            '01': `${prefix}/jb2a_patreon/Library/Generic/Lightning/ElectricArc01_01_Regular_Blue_1600x500.webm`,
            '02': `${prefix}/jb2a_patreon/Library/Generic/Lightning/ElectricArc02_01_Regular_Blue_1600x500.webm`,
            '03': `${prefix}/jb2a_patreon/Library/Generic/Lightning/ElectricArc03_01_Regular_Blue_1600x500.webm`,
            '04': `${prefix}/jb2a_patreon/Library/Generic/Lightning/ElectricArc04_01_Regular_Blue_1600x500.webm`
        },
        patreonDatabase.energy_beam = {
            _template: 'ranged',
            normal: {
                dark_green: {
                    '01': {
                        '15ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeam_01_Dark_Green_15ft_1000x400.webm`,
                        '30ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeam_01_Dark_Green_30ft_1600x400.webm`,
                        '60ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeam_01_Dark_Green_60ft_2800x400.webm`,
                        '90ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeam_01_Dark_Green_90ft_4000x400.webm`
                    }
                },
                dark_greenpurple: {
                    '02': {
                        '05ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeam_02_Dark_GreenPurple_05ft_600x400.webm`,
                        '15ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeam_02_Dark_GreenPurple_15ft_1000x400.webm`,
                        '30ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeam_02_Dark_GreenPurple_30ft_1600x400.webm`,
                        '60ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeam_02_Dark_GreenPurple_60ft_2800x400.webm`,
                        '90ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeam_02_Dark_GreenPurple_90ft_4000x400.webm`
                    },
                    '03': {
                        '05ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeam_03_Dark_GreenPurple_05ft_600x400.webm`,
                        '15ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeam_03_Dark_GreenPurple_15ft_1000x400.webm`,
                        '30ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeam_03_Dark_GreenPurple_30ft_1600x400.webm`,
                        '60ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeam_03_Dark_GreenPurple_60ft_2800x400.webm`,
                        '90ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeam_03_Dark_GreenPurple_90ft_4000x400.webm`
                    }
                },
                dark_purplered: {
                    '02': {
                        '05ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeam_02_Dark_PurpleRed_05ft_600x400.webm`,
                        '15ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeam_02_Dark_PurpleRed_15ft_1000x400.webm`,
                        '30ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeam_02_Dark_PurpleRed_30ft_1600x400.webm`,
                        '60ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeam_02_Dark_PurpleRed_60ft_2800x400.webm`,
                        '90ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeam_02_Dark_PurpleRed_90ft_4000x400.webm`
                    },
                    '03': {
                        '05ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeam_03_Dark_PurpleRed_05ft_600x400.webm`,
                        '15ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeam_03_Dark_PurpleRed_15ft_1000x400.webm`,
                        '30ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeam_03_Dark_PurpleRed_30ft_1600x400.webm`,
                        '60ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeam_03_Dark_PurpleRed_60ft_2800x400.webm`,
                        '90ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeam_03_Dark_PurpleRed_90ft_4000x400.webm`
                    }
                },
                blue: {
                    '01': {
                        '15ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeam_01_Regular_Blue_15ft_1000x400.webm`,
                        '30ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeam_01_Regular_Blue_30ft_1600x400.webm`,
                        '60ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeam_01_Regular_Blue_60ft_2800x400.webm`,
                        '90ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeam_01_Regular_Blue_90ft_4000x400.webm`
                    }
                },
                bluegreen: {
                    '01': {
                        '15ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeam_01_Regular_BlueGreen_15ft_1000x400.webm`,
                        '30ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeam_01_Regular_BlueGreen_30ft_1600x400.webm`,
                        '60ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeam_01_Regular_BlueGreen_60ft_2800x400.webm`,
                        '90ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeam_01_Regular_BlueGreen_90ft_4000x400.webm`
                    }
                },
                bluepink: {
                    '02': {
                        '05ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeam_02_Regular_BluePink_05ft_600x400.webm`,
                        '15ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeam_02_Regular_BluePink_15ft_1000x400.webm`,
                        '30ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeam_02_Regular_BluePink_30ft_1600x400.webm`,
                        '60ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeam_02_Regular_BluePink_60ft_2800x400.webm`,
                        '90ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeam_02_Regular_BluePink_90ft_4000x400.webm`
                    },
                    '03': {
                        '05ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeam_03_Regular_BluePink_05ft_600x400.webm`,
                        '15ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeam_03_Regular_BluePink_15ft_1000x400.webm`,
                        '30ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeam_03_Regular_BluePink_30ft_1600x400.webm`,
                        '60ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeam_03_Regular_BluePink_60ft_2800x400.webm`,
                        '90ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeam_03_Regular_BluePink_90ft_4000x400.webm`
                    }
                },
                greenyellow: {
                    '02': {
                        '05ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeam_02_Regular_GreenYellow_05ft_600x400.webm`,
                        '15ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeam_02_Regular_GreenYellow_15ft_1000x400.webm`,
                        '30ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeam_02_Regular_GreenYellow_30ft_1600x400.webm`,
                        '60ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeam_02_Regular_GreenYellow_60ft_2800x400.webm`,
                        '90ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeam_02_Regular_GreenYellow_90ft_4000x400.webm`
                    },
                    '03': {
                        '05ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeam_03_Regular_GreenYellow_05ft_600x400.webm`,
                        '15ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeam_03_Regular_GreenYellow_15ft_1000x400.webm`,
                        '30ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeam_03_Regular_GreenYellow_30ft_1600x400.webm`,
                        '60ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeam_03_Regular_GreenYellow_60ft_2800x400.webm`,
                        '90ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeam_03_Regular_GreenYellow_90ft_4000x400.webm`
                    }
                },
                red: {
                    '02': {
                        '05ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeam_02_Regular_Red_05ft_600x400.webm`,
                        '15ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeam_02_Regular_Red_15ft_1000x400.webm`,
                        '30ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeam_02_Regular_Red_30ft_1600x400.webm`,
                        '60ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeam_02_Regular_Red_60ft_2800x400.webm`,
                        '90ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeam_02_Regular_Red_90ft_4000x400.webm`
                    },
                    '03': {
                        '05ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeam_03_Regular_Red_05ft_600x400.webm`,
                        '15ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeam_03_Regular_Red_15ft_1000x400.webm`,
                        '30ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeam_03_Regular_Red_30ft_1600x400.webm`,
                        '60ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeam_03_Regular_Red_60ft_2800x400.webm`,
                        '90ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeam_03_Regular_Red_90ft_4000x400.webm`
                    }
                }
            },
            reverse: {
                dark_green: {
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeamReverse_01_Dark_Green_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeamReverse_01_Dark_Green_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeamReverse_01_Dark_Green_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeamReverse_01_Dark_Green_90ft_4000x400.webm`
                },
                blue: {
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeamReverse_01_Regular_Blue_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeamReverse_01_Regular_Blue_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeamReverse_01_Regular_Blue_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeamReverse_01_Regular_Blue_90ft_4000x400.webm`
                },
                bluegreen: {
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeamReverse_01_Regular_BlueGreen_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeamReverse_01_Regular_BlueGreen_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeamReverse_01_Regular_BlueGreen_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyBeamReverse_01_Regular_BlueGreen_90ft_4000x400.webm`
                }
            }
        },
        patreonDatabase.energy_conduit = {
            _template: 'ranged',
            bluepurple: {
                circle: {
                    '01': {
                        '05ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyConduitCircle_01_Regular_BluePurple_05ft_600x400.webm`,
                        '15ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyConduitCircle_01_Regular_BluePurple_15ft_1000x400.webm`,
                        '30ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyConduitCircle_01_Regular_BluePurple_30ft_1600x400.webm`,
                        '60ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyConduitCircle_01_Regular_BluePurple_60ft_2800x400.webm`,
                        '90ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyConduitCircle_01_Regular_BluePurple_90ft_4000x400.webm`
                    }
                },
                square: {
                    '01': {
                        '05ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyConduitSquare_01_Regular_BluePurple_05ft_600x400.webm`,
                        '15ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyConduitSquare_01_Regular_BluePurple_15ft_1000x400.webm`,
                        '30ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyConduitSquare_01_Regular_BluePurple_30ft_1600x400.webm`,
                        '60ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyConduitSquare_01_Regular_BluePurple_60ft_2800x400.webm`,
                        '90ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyConduitSquare_01_Regular_BluePurple_90ft_4000x400.webm`
                    }
                }
            },
            greenyellow: {
                circle: {
                    '01': {
                        '05ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyConduitCircle_01_Regular_GreenYellow_05ft_600x400.webm`,
                        '15ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyConduitCircle_01_Regular_GreenYellow_15ft_1000x400.webm`,
                        '30ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyConduitCircle_01_Regular_GreenYellow_30ft_1600x400.webm`,
                        '60ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyConduitCircle_01_Regular_GreenYellow_60ft_2800x400.webm`,
                        '90ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyConduitCircle_01_Regular_GreenYellow_90ft_4000x400.webm`
                    }
                },
                square: {
                    '01': {
                        '05ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyConduitSquare_01_Regular_GreenYellow_05ft_600x400.webm`,
                        '15ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyConduitSquare_01_Regular_GreenYellow_15ft_1000x400.webm`,
                        '30ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyConduitSquare_01_Regular_GreenYellow_30ft_1600x400.webm`,
                        '60ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyConduitSquare_01_Regular_GreenYellow_60ft_2800x400.webm`,
                        '90ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyConduitSquare_01_Regular_GreenYellow_90ft_4000x400.webm`
                    }
                }
            }
        },
        patreonDatabase.energy_field = {
            '01': {
                blue: `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyField_01_Regular_Blue_600x600.webm`,
                green: `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyField_01_Regular_Green_600x600.webm`,
                purple: `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyField_01_Regular_Rainbow_600x600.webm`
            },
            '02': {
                below: {
                    blue: `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyFieldBot_02_Regular_Blue_400x400.webm`,
                    green: `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyFieldBot_02_Regular_Green_400x400.webm`,
                    purple: `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyFieldBot_02_Regular_Purple_400x400.webm`
                },
                above: {
                    blue: `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyFieldTop_02_Regular_Blue_400x400.webm`,
                    green: `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyFieldTop_02_Regular_Green_400x400.webm`,
                    purple: `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyFieldTop_02_Regular_Purple_400x400.webm`
                }
            }
        },
        patreonDatabase.energy_strands = {
            complete: {
                blue: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/EnergyStrands_01_Regular_Blue_600x600.webm`
                },
                blueorange: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/EnergyStrands_01_Regular_BlueOrange_600x600.webm`
                },
                dark_green: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/EnergyStrands_01_Dark_Green_600x600.webm`
                },
                dark_red: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/EnergyStrands_01_Dark_Red_600x600.webm`
                },
                orange: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/EnergyStrands_01_Regular_Orange_600x600.webm`
                },
                pinkyellow: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/EnergyStrands_01_Regular_PinkYellow_600x600.webm`
                },
                purple: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/EnergyStrands_01_Regular_Purple_600x600.webm`
                }
            },
            overlay: {
                blue: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/EnergyStrandsOverlay_01_Regular_Blue_600x600.webm`
                },
                blueorange: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/EnergyStrandsOverlay_01_Regular_BlueOrange_600x600.webm`
                },
                dark_green: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/EnergyStrandsOverlay_01_Dark_Green_600x600.webm`
                },
                dark_red: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/EnergyStrandsOverlay_01_Dark_Red_600x600.webm`
                },
                orange: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/EnergyStrandsOverlay_01_Regular_Orange_600x600.webm`
                },
                pinkyellow: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/EnergyStrandsOverlay_01_Regular_PinkYellow_600x600.webm`
                },
                purple: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/EnergyStrandsOverlay_01_Regular_Purple_600x600.webm`
                }
            },
            range: {
                _template: 'ranged',
                standard: {
                    dark_green: {
                        '01': {
                            '05ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_01_Dark_Green_05ft_600x400.webm`,
                            '15ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_01_Dark_Green_15ft_1000x400.webm`,
                            '30ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_01_Dark_Green_30ft_1600x400.webm`,
                            '60ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_01_Dark_Green_60ft_2800x400.webm`,
                            '90ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_01_Dark_Green_90ft_4000x400.webm`
                        },
                        '02': {
                            '05ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_02_Dark_Green_05ft_600x400.webm`,
                            '15ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_02_Dark_Green_15ft_1000x400.webm`,
                            '30ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_02_Dark_Green_30ft_1600x400.webm`,
                            '60ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_02_Dark_Green_60ft_2800x400.webm`,
                            '90ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_02_Dark_Green_90ft_4000x400.webm`
                        },
                        '03': {
                            '05ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_03_Dark_Green_05ft_600x400.webm`,
                            '15ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_03_Dark_Green_15ft_1000x400.webm`,
                            '30ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_03_Dark_Green_30ft_1600x400.webm`,
                            '60ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_03_Dark_Green_60ft_2800x400.webm`,
                            '90ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_03_Dark_Green_90ft_4000x400.webm`
                        },
                        '04': {
                            '05ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_04_Dark_Green_05ft_600x400.webm`,
                            '15ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_04_Dark_Green_15ft_1000x400.webm`,
                            '30ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_04_Dark_Green_30ft_1600x400.webm`,
                            '60ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_04_Dark_Green_60ft_2800x400.webm`,
                            '90ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_04_Dark_Green_90ft_4000x400.webm`
                        }
                    },
                    dark_purple: {
                        '01': {
                            '05ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_01_Dark_Purple_05ft_600x400.webm`,
                            '15ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_01_Dark_Purple_15ft_1000x400.webm`,
                            '30ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_01_Dark_Purple_30ft_1600x400.webm`,
                            '60ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_01_Dark_Purple_60ft_2800x400.webm`,
                            '90ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_01_Dark_Purple_90ft_4000x400.webm`
                        },
                        '02': {
                            '05ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_02_Dark_Purple_05ft_600x400.webm`,
                            '15ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_02_Dark_Purple_15ft_1000x400.webm`,
                            '30ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_02_Dark_Purple_30ft_1600x400.webm`,
                            '60ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_02_Dark_Purple_60ft_2800x400.webm`,
                            '90ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_02_Dark_Purple_90ft_4000x400.webm`
                        },
                        '03': {
                            '05ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_03_Dark_Purple_05ft_600x400.webm`,
                            '15ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_03_Dark_Purple_15ft_1000x400.webm`,
                            '30ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_03_Dark_Purple_30ft_1600x400.webm`,
                            '60ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_03_Dark_Purple_60ft_2800x400.webm`,
                            '90ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_03_Dark_Purple_90ft_4000x400.webm`
                        },
                        '04': {
                            '05ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_04_Dark_Purple_05ft_600x400.webm`,
                            '15ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_04_Dark_Purple_15ft_1000x400.webm`,
                            '30ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_04_Dark_Purple_30ft_1600x400.webm`,
                            '60ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_04_Dark_Purple_60ft_2800x400.webm`,
                            '90ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_04_Dark_Purple_90ft_4000x400.webm`
                        }
                    },
                    dark_red: {
                        '01': {
                            '05ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_01_Dark_Red_05ft_600x400.webm`,
                            '15ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_01_Dark_Red_15ft_1000x400.webm`,
                            '30ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_01_Dark_Red_30ft_1600x400.webm`,
                            '60ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_01_Dark_Red_60ft_2800x400.webm`,
                            '90ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_01_Dark_Red_90ft_4000x400.webm`
                        },
                        '02': {
                            '05ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_02_Dark_Red_05ft_600x400.webm`,
                            '15ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_02_Dark_Red_15ft_1000x400.webm`,
                            '30ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_02_Dark_Red_30ft_1600x400.webm`,
                            '60ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_02_Dark_Red_60ft_2800x400.webm`,
                            '90ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_02_Dark_Red_90ft_4000x400.webm`
                        },
                        '03': {
                            '05ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_03_Dark_Red_05ft_600x400.webm`,
                            '15ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_03_Dark_Red_15ft_1000x400.webm`,
                            '30ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_03_Dark_Red_30ft_1600x400.webm`,
                            '60ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_03_Dark_Red_60ft_2800x400.webm`,
                            '90ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_03_Dark_Red_90ft_4000x400.webm`
                        },
                        '04': {
                            '05ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_04_Dark_Red_05ft_600x400.webm`,
                            '15ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_04_Dark_Red_15ft_1000x400.webm`,
                            '30ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_04_Dark_Red_30ft_1600x400.webm`,
                            '60ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_04_Dark_Red_60ft_2800x400.webm`,
                            '90ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_04_Dark_Red_90ft_4000x400.webm`
                        }
                    },
                    blue: {
                        '01': {
                            '05ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_01_Regular_Blue_05ft_600x400.webm`,
                            '15ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_01_Regular_Blue_15ft_1000x400.webm`,
                            '30ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_01_Regular_Blue_30ft_1600x400.webm`,
                            '60ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_01_Regular_Blue_60ft_2800x400.webm`,
                            '90ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_01_Regular_Blue_90ft_4000x400.webm`
                        },
                        '02': {
                            '05ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_02_Regular_Blue_05ft_600x400.webm`,
                            '15ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_02_Regular_Blue_15ft_1000x400.webm`,
                            '30ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_02_Regular_Blue_30ft_1600x400.webm`,
                            '60ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_02_Regular_Blue_60ft_2800x400.webm`,
                            '90ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_02_Regular_Blue_90ft_4000x400.webm`
                        },
                        '03': {
                            '05ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_03_Regular_Blue_05ft_600x400.webm`,
                            '15ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_03_Regular_Blue_15ft_1000x400.webm`,
                            '30ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_03_Regular_Blue_30ft_1600x400.webm`,
                            '60ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_03_Regular_Blue_60ft_2800x400.webm`,
                            '90ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_03_Regular_Blue_90ft_4000x400.webm`
                        },
                        '04': {
                            '05ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_04_Regular_Blue_05ft_600x400.webm`,
                            '15ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_04_Regular_Blue_15ft_1000x400.webm`,
                            '30ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_04_Regular_Blue_30ft_1600x400.webm`,
                            '60ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_04_Regular_Blue_60ft_2800x400.webm`,
                            '90ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_04_Regular_Blue_90ft_4000x400.webm`
                        }
                    },
                    orange: {
                        '01': {
                            '05ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_01_Regular_Orange_05ft_600x400.webm`,
                            '15ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_01_Regular_Orange_15ft_1000x400.webm`,
                            '30ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_01_Regular_Orange_30ft_1600x400.webm`,
                            '60ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_01_Regular_Orange_60ft_2800x400.webm`,
                            '90ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_01_Regular_Orange_90ft_4000x400.webm`
                        },
                        '02': {
                            '05ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_02_Regular_Orange_05ft_600x400.webm`,
                            '15ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_02_Regular_Orange_15ft_1000x400.webm`,
                            '30ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_02_Regular_Orange_30ft_1600x400.webm`,
                            '60ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_02_Regular_Orange_60ft_2800x400.webm`,
                            '90ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_02_Regular_Orange_90ft_4000x400.webm`
                        },
                        '03': {
                            '05ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_03_Regular_Orange_05ft_600x400.webm`,
                            '15ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_03_Regular_Orange_15ft_1000x400.webm`,
                            '30ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_03_Regular_Orange_30ft_1600x400.webm`,
                            '60ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_03_Regular_Orange_60ft_2800x400.webm`,
                            '90ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_03_Regular_Orange_90ft_4000x400.webm`
                        },
                        '04': {
                            '05ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_04_Regular_Orange_05ft_600x400.webm`,
                            '15ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_04_Regular_Orange_15ft_1000x400.webm`,
                            '30ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_04_Regular_Orange_30ft_1600x400.webm`,
                            '60ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_04_Regular_Orange_60ft_2800x400.webm`,
                            '90ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_04_Regular_Orange_90ft_4000x400.webm`
                        }
                    },
                    purple: {
                        '01': {
                            '05ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_01_Regular_Purple_05ft_600x400.webm`,
                            '15ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_01_Regular_Purple_15ft_1000x400.webm`,
                            '30ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_01_Regular_Purple_30ft_1600x400.webm`,
                            '60ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_01_Regular_Purple_60ft_2800x400.webm`,
                            '90ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_01_Regular_Purple_90ft_4000x400.webm`
                        },
                        '02': {
                            '05ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_02_Regular_Purple_05ft_600x400.webm`,
                            '15ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_02_Regular_Purple_15ft_1000x400.webm`,
                            '30ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_02_Regular_Purple_30ft_1600x400.webm`,
                            '60ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_02_Regular_Purple_60ft_2800x400.webm`,
                            '90ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_02_Regular_Purple_90ft_4000x400.webm`
                        },
                        '03': {
                            '05ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_03_Regular_Purple_05ft_600x400.webm`,
                            '15ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_03_Regular_Purple_15ft_1000x400.webm`,
                            '30ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_03_Regular_Purple_30ft_1600x400.webm`,
                            '60ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_03_Regular_Purple_60ft_2800x400.webm`,
                            '90ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_03_Regular_Purple_90ft_4000x400.webm`
                        },
                        '04': {
                            '05ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_04_Regular_Purple_05ft_600x400.webm`,
                            '15ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_04_Regular_Purple_15ft_1000x400.webm`,
                            '30ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_04_Regular_Purple_30ft_1600x400.webm`,
                            '60ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_04_Regular_Purple_60ft_2800x400.webm`,
                            '90ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_04_Regular_Purple_90ft_4000x400.webm`
                        }
                    }
                },
                multiple: {
                    dark_green: {
                        '01': {
                            '05ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_Multiple01_Dark_Green_05ft_600x400.webm`,
                            '15ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_Multiple01_Dark_Green_15ft_1000x400.webm`,
                            '30ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_Multiple01_Dark_Green_30ft_1600x400.webm`,
                            '60ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_Multiple01_Dark_Green_60ft_2800x400.webm`,
                            '90ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_Multiple01_Dark_Green_90ft_4000x400.webm`
                        }

                    },
                    dark_purple: {
                        '01': {
                            '05ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_Multiple01_Dark_Purple_05ft_600x400.webm`,
                            '15ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_Multiple01_Dark_Purple_15ft_1000x400.webm`,
                            '30ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_Multiple01_Dark_Purple_30ft_1600x400.webm`,
                            '60ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_Multiple01_Dark_Purple_60ft_2800x400.webm`,
                            '90ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_Multiple01_Dark_Purple_90ft_4000x400.webm`
                        }

                    },
                    dark_red: {
                        '01': {
                            '05ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_Multiple01_Dark_Red_05ft_600x400.webm`,
                            '15ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_Multiple01_Dark_Red_15ft_1000x400.webm`,
                            '30ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_Multiple01_Dark_Red_30ft_1600x400.webm`,
                            '60ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_Multiple01_Dark_Red_60ft_2800x400.webm`,
                            '90ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_Multiple01_Dark_Red_90ft_4000x400.webm`
                        }

                    },
                    blue: {
                        '01': {
                            '05ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_Multiple01_Regular_Blue_05ft_600x400.webm`,
                            '15ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_Multiple01_Regular_Blue_15ft_1000x400.webm`,
                            '30ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_Multiple01_Regular_Blue_30ft_1600x400.webm`,
                            '60ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_Multiple01_Regular_Blue_60ft_2800x400.webm`,
                            '90ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_Multiple01_Regular_Blue_90ft_4000x400.webm`
                        }

                    },
                    purple: {
                        '01': {
                            '05ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_Multiple01_Regular_Purple_05ft_600x400.webm`,
                            '15ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_Multiple01_Regular_Purple_15ft_1000x400.webm`,
                            '30ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_Multiple01_Regular_Purple_30ft_1600x400.webm`,
                            '60ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_Multiple01_Regular_Purple_60ft_2800x400.webm`,
                            '90ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_Multiple01_Regular_Purple_90ft_4000x400.webm`
                        }

                    },
                    dark_purplered: {
                        '02': {
                            '05ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_Multiple02_Dark_PurpleRed_05ft_600x400.webm`,
                            '15ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_Multiple02_Dark_PurpleRed_15ft_1000x400.webm`,
                            '30ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_Multiple02_Dark_PurpleRed_30ft_1600x400.webm`,
                            '60ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_Multiple02_Dark_PurpleRed_60ft_2800x400.webm`,
                            '90ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_Multiple02_Dark_PurpleRed_90ft_4000x400.webm`
                        }

                    },
                    dark_greenpurple: {
                        '02': {
                            '05ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_Multiple02_Dark_GreenPurple_05ft_600x400.webm`,
                            '15ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_Multiple02_Dark_GreenPurple_15ft_1000x400.webm`,
                            '30ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_Multiple02_Dark_GreenPurple_30ft_1600x400.webm`,
                            '60ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_Multiple02_Dark_GreenPurple_60ft_2800x400.webm`,
                            '90ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_Multiple02_Dark_GreenPurple_90ft_4000x400.webm`
                        }

                    },
                    bluepink: {
                        '02': {
                            '05ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_Multiple02_Regular_BluePink_05ft_600x400.webm`,
                            '15ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_Multiple02_Regular_BluePink_15ft_1000x400.webm`,
                            '30ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_Multiple02_Regular_BluePink_30ft_1600x400.webm`,
                            '60ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_Multiple02_Regular_BluePink_60ft_2800x400.webm`,
                            '90ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_Multiple02_Regular_BluePink_90ft_4000x400.webm`
                        }

                    },
                    greenyellow: {
                        '02': {
                            '05ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_Multiple02_Regular_GreenYellow_05ft_600x400.webm`,
                            '15ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_Multiple02_Regular_GreenYellow_15ft_1000x400.webm`,
                            '30ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_Multiple02_Regular_GreenYellow_30ft_1600x400.webm`,
                            '60ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_Multiple02_Regular_GreenYellow_60ft_2800x400.webm`,
                            '90ft': `${prefix}/jb2a_patreon/Library/Generic/Energy/EnergyStrand_Multiple02_Regular_GreenYellow_90ft_4000x400.webm`
                        }

                    }

                }
            }
        },
        patreonDatabase.eruption = {
            blue: {
                '01': `${prefix}/jb2a_patreon/Library/Generic/Fire/Eruption_01_Regular_Blue_600x600.webm`
            },
            green: {
                '01': `${prefix}/jb2a_patreon/Library/Generic/Fire/Eruption_01_Regular_Green_600x600.webm`
            },
            orange: {
                '01': `${prefix}/jb2a_patreon/Library/Generic/Fire/Eruption_01_Regular_Orange_600x600.webm`
            }
        },
        patreonDatabase.entangle = {
            brown: `${prefix}/jb2a_patreon/Library/1st_Level/Entangle/Entangle_01_Brown_400x400.webm`,
            dark_purple: `${prefix}/jb2a_patreon/Library/1st_Level/Entangle/Entangle_01_Dark_Purple_400x400.webm`,
            green: `${prefix}/jb2a_patreon/Library/1st_Level/Entangle/Entangle_01_Green_400x400.webm`,
            green02: `${prefix}/jb2a_patreon/Library/1st_Level/Entangle/Entangle_01_Regular_Green02_400x400.webm`,
            yellow: `${prefix}/jb2a_patreon/Library/1st_Level/Entangle/Entangle_01_Yellow_400x400.webm`
        },
        patreonDatabase.explosion = {
            '01': {
                blue: `${prefix}/jb2a_patreon/Library/Generic/Explosion/Explosion_01_Blue_400x400.webm`,
                green: `${prefix}/jb2a_patreon/Library/Generic/Explosion/Explosion_01_Green_400x400.webm`,
                orange: `${prefix}/jb2a_patreon/Library/Generic/Explosion/Explosion_01_Orange_400x400.webm`,
                purple: `${prefix}/jb2a_patreon/Library/Generic/Explosion/Explosion_01_Purple_400x400.webm`,
                yellow: `${prefix}/jb2a_patreon/Library/Generic/Explosion/Explosion_01_Yellow_400x400.webm`
            },
            '02': {
                blue: `${prefix}/jb2a_patreon/Library/Generic/Explosion/Explosion_02_Blue_400x400.webm`,
                green: `${prefix}/jb2a_patreon/Library/Generic/Explosion/Explosion_02_Green_400x400.webm`,
                orange: `${prefix}/jb2a_patreon/Library/Generic/Explosion/Explosion_02_Orange_400x400.webm`,
                purple: `${prefix}/jb2a_patreon/Library/Generic/Explosion/Explosion_02_Purple_400x400.webm`,
                yellow: `${prefix}/jb2a_patreon/Library/Generic/Explosion/Explosion_02_Yellow_400x400.webm`
            },
            '03': {
                bluewhite: `${prefix}/jb2a_patreon/Library/Generic/Explosion/Explosion_03_Dark_BlueWhite_400x400.webm`,
                blueyellow: `${prefix}/jb2a_patreon/Library/Generic/Explosion/Explosion_03_Regular_BlueYellow_400x400.webm`,
                greenorange: `${prefix}/jb2a_patreon/Library/Generic/Explosion/Explosion_03_Regular_GreenOrange_400x400.webm`,
                pink: `${prefix}/jb2a_patreon/Library/Generic/Explosion/Explosion_03_Regular_Pink_400x400.webm`,
                purplepink: `${prefix}/jb2a_patreon/Library/Generic/Explosion/Explosion_03_Regular_PurplePink_400x400.webm`,
                red: `${prefix}/jb2a_patreon/Library/Generic/Explosion/Explosion_03_Regular_Red_400x400.webm`
            },
            '04': {
                blue: `${prefix}/jb2a_patreon/Library/Generic/Explosion/Explosion_04_Regular_Blue_400x400.webm`,
                dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Explosion/Explosion_04_Dark_Purple_400x400.webm`,
                dark_red: `${prefix}/jb2a_patreon/Library/Generic/Explosion/Explosion_04_Dark_Red_400x400.webm`,
                green: `${prefix}/jb2a_patreon/Library/Generic/Explosion/Explosion_04_Regular_Green_400x400.webm`,
                orange: `${prefix}/jb2a_patreon/Library/Generic/Explosion/Explosion_04_Regular_Orange_400x400.webm`
            },
            '05': {
                bluewhite: `${prefix}/jb2a_patreon/Library/Generic/Ice/SnowflakeBurst_01_Regular_BlueWhite_Burst_600x600.webm`,
                greenorange: `${prefix}/jb2a_patreon/Library/Generic/Ice/SnowflakeBurst_01_Regular_GreenOrange_Burst_600x600.webm`,
                purplepink: `${prefix}/jb2a_patreon/Library/Generic/Ice/SnowflakeBurst_01_Regular_PurplePink_Burst_600x600.webm`,
                tealyellow: `${prefix}/jb2a_patreon/Library/Generic/Ice/SnowflakeBurst_01_Regular_TealYellow_Burst_600x600.webm`
            },
            '06': {
                bluewhite: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutPulse/OutPulse_01_Regular_BlueWhite_Burst_600x600.webm`,
                greenorange: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutPulse/OutPulse_01_Regular_GreenOrange_Burst_600x600.webm`,
                purplepink: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutPulse/OutPulse_01_Regular_PurplePink_Burst_600x600.webm`,
                tealyellow: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutPulse/OutPulse_01_Regular_TealYellow_Burst_600x600.webm`
            },
            '07': {
                bluewhite: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutPulse/OutPulse_02_Regular_BlueWhite_Burst_600x600.webm`,
                greenorange: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutPulse/OutPulse_02_Regular_GreenOrange_Burst_600x600.webm`,
                purplepink: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutPulse/OutPulse_02_Regular_PurplePink_Burst_600x600.webm`,
                tealyellow: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutPulse/OutPulse_02_Regular_TealYellow_Burst_600x600.webm`
            },
            blue: [
                `${prefix}/jb2a_patreon/Library/Generic/Explosion/Explosion_01_Blue_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Explosion/Explosion_02_Blue_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Explosion/Explosion_04_Regular_Blue_400x400.webm`
            ],
            bluewhite: [
                `${prefix}/jb2a_patreon/Library/Generic/Explosion/Explosion_03_Dark_BlueWhite_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Ice/SnowflakeBurst_01_Regular_BlueWhite_Burst_600x600.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutPulse/OutPulse_01_Regular_BlueWhite_Burst_600x600.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutPulse/OutPulse_02_Regular_BlueWhite_Burst_600x600.webm`
            ],
            blueyellow: [
                `${prefix}/jb2a_patreon/Library/Generic/Explosion/Explosion_03_Regular_BlueYellow_400x400.webm`
            ],
            dark_purple: [
                `${prefix}/jb2a_patreon/Library/Generic/Explosion/Explosion_04_Dark_Purple_400x400.webm`
            ],
            dark_red: [
                `${prefix}/jb2a_patreon/Library/Generic/Explosion/Explosion_04_Dark_Red_400x400.webm`
            ],
            green: [
                `${prefix}/jb2a_patreon/Library/Generic/Explosion/Explosion_01_Green_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Explosion/Explosion_02_Green_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Explosion/Explosion_04_Regular_Green_400x400.webm`
            ],
            greenorange: [
                `${prefix}/jb2a_patreon/Library/Generic/Explosion/Explosion_03_Regular_GreenOrange_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Ice/SnowflakeBurst_01_Regular_GreenOrange_Burst_600x600.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutPulse/OutPulse_01_Regular_GreenOrange_Burst_600x600.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutPulse/OutPulse_02_Regular_GreenOrange_Burst_600x600.webm`
            ],
            orange: [
                `${prefix}/jb2a_patreon/Library/Generic/Explosion/Explosion_01_Orange_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Explosion/Explosion_02_Orange_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Explosion/Explosion_04_Regular_Orange_400x400.webm`
            ],
            pink: [
                `${prefix}/jb2a_patreon/Library/Generic/Explosion/Explosion_03_Regular_Pink_400x400.webm`
            ],
            purple: [
                `${prefix}/jb2a_patreon/Library/Generic/Explosion/Explosion_01_Purple_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Explosion/Explosion_02_Purple_400x400.webm`
            ],
            purplepink: [
                `${prefix}/jb2a_patreon/Library/Generic/Explosion/Explosion_03_Regular_PurplePink_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Ice/SnowflakeBurst_01_Regular_PurplePink_Burst_600x600.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutPulse/OutPulse_01_Regular_PurplePink_Burst_600x600.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutPulse/OutPulse_02_Regular_PurplePink_Burst_600x600.webm`
            ],
            red: [
                `${prefix}/jb2a_patreon/Library/Generic/Explosion/Explosion_03_Regular_Red_400x400.webm`
            ],
            tealyellow: [
                `${prefix}/jb2a_patreon/Library/Generic/Ice/SnowflakeBurst_01_Regular_TealYellow_Burst_600x600.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutPulse/OutPulse_01_Regular_TealYellow_Burst_600x600.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutPulse/OutPulse_02_Regular_TealYellow_Burst_600x600.webm`
            ],
            yellow: [
                `${prefix}/jb2a_patreon/Library/Generic/Explosion/Explosion_01_Yellow_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Explosion/Explosion_02_Yellow_400x400.webm`
            ]
        },
        patreonDatabase.extras = {
            tmfx: {
                border: {
                    circle: {
                        inpulse: {
                            '01': {
                                fast: `${prefix}/jb2a_patreon/Library/TMFX/Border/Circle/BorderInPulse_01_Circle_Fast_500.webm`,
                                normal: `${prefix}/jb2a_patreon/Library/TMFX/Border/Circle/BorderInPulse_01_Circle_Normal_500.webm`
                            },
                            '02': {
                                fast: `${prefix}/jb2a_patreon/Library/TMFX/Border/Circle/BorderInPulse_02_Circle_Fast_500.webm`,
                                normal: `${prefix}/jb2a_patreon/Library/TMFX/Border/Circle/BorderInPulse_02_Circle_Normal_500.webm`
                            }
                        },
                        outpulse: {
                            '01': {
                                fast: `${prefix}/jb2a_patreon/Library/TMFX/Border/Circle/BorderOutPulse_01_Circle_Fast_500.webm`,
                                normal: `${prefix}/jb2a_patreon/Library/TMFX/Border/Circle/BorderOutPulse_01_Circle_Normal_500.webm`
                            },
                            '02': {
                                fast: `${prefix}/jb2a_patreon/Library/TMFX/Border/Circle/BorderOutPulse_02_Circle_Fast_500.webm`,
                                normal: `${prefix}/jb2a_patreon/Library/TMFX/Border/Circle/BorderOutPulse_02_Circle_Normal_500.webm`
                            }
                        },
                        simple: {
                            '01': `${prefix}/jb2a_patreon/Library/TMFX/Border/Circle/BorderSimple_01_Circle_Normal_500.webm`,
                            '02': `${prefix}/jb2a_patreon/Library/TMFX/Border/Circle/BorderSimple_02_Circle_Normal_500.webm`,
                            '03': `${prefix}/jb2a_patreon/Library/TMFX/Border/Circle/BorderSimple_03_Circle_Normal_500.webm`,
                            '04': `${prefix}/jb2a_patreon/Library/TMFX/Border/Circle/BorderSimple_04_Circle_Normal_500.webm`
                        }
                    }
                },
                inflow: {
                    circle: {
                        '01': `${prefix}/jb2a_patreon/Library/TMFX/InFlow/Circle/InFlow_01_Circle_500x500.webm`,
                        '02': `${prefix}/jb2a_patreon/Library/TMFX/InFlow/Circle/InFlow_02_Circle_500x500.webm`,
                        '03': `${prefix}/jb2a_patreon/Library/TMFX/InFlow/Circle/InFlow_03_Circle_500x500.webm`,
                        '04': `${prefix}/jb2a_patreon/Library/TMFX/InFlow/Circle/InFlow_04_Circle_500x500.webm`
                    }
                },
                inpulse: {
                    circle: {
                        '01': {
                            fast: `${prefix}/jb2a_patreon/Library/TMFX/InPulse/Circle/InPulse_01_Circle_Fast_500.webm`,
                            normal: `${prefix}/jb2a_patreon/Library/TMFX/InPulse/Circle/InPulse_01_Circle_Normal_500.webm`
                        },
                        '02': {
                            fast: `${prefix}/jb2a_patreon/Library/TMFX/InPulse/Circle/InPulse_02_Circle_Fast_500.webm`,
                            normal: `${prefix}/jb2a_patreon/Library/TMFX/InPulse/Circle/InPulse_02_Circle_Normal_500.webm`
                        },
                        '03': {
                            fast: `${prefix}/jb2a_patreon/Library/TMFX/InPulse/Circle/InPulse_03_Circle_Fast_500.webm`,
                            normal: `${prefix}/jb2a_patreon/Library/TMFX/InPulse/Circle/InPulse_03_Circle_Normal_500.webm`
                        },
                        '04': {
                            fast: `${prefix}/jb2a_patreon/Library/TMFX/InPulse/Circle/InPulse_04_Circle_Fast_500.webm`,
                            normal: `${prefix}/jb2a_patreon/Library/TMFX/InPulse/Circle/InPulse_04_Circle_Normal_500.webm`
                        }
                    }
                },
                outflow: {
                    circle: {
                        '01': `${prefix}/jb2a_patreon/Library/TMFX/OutFlow/Circle/OutFlow_01_Circle_500x500.webm`,
                        '02': `${prefix}/jb2a_patreon/Library/TMFX/OutFlow/Circle/OutFlow_02_Circle_500x500.webm`,
                        '03': `${prefix}/jb2a_patreon/Library/TMFX/OutFlow/Circle/OutFlow_03_Circle_500x500.webm`,
                        '04': `${prefix}/jb2a_patreon/Library/TMFX/OutFlow/Circle/OutFlow_04_Circle_500x500.webm`,
                    },
                    cone: {
                        '01': `${prefix}/jb2a_patreon/Library/TMFX/OutFlow/Cone/OutFlow_01_Cone_500x500.webm`,
                        '02': `${prefix}/jb2a_patreon/Library/TMFX/OutFlow/Cone/OutFlow_02_Cone_500x500.webm`,
                        '03': `${prefix}/jb2a_patreon/Library/TMFX/OutFlow/Cone/OutFlow_03_Cone_500x500.webm`,
                        '04': `${prefix}/jb2a_patreon/Library/TMFX/OutFlow/Cone/OutFlow_04_Cone_500x500.webm`,
                    }
                },
                outpulse: {
                    circle: {
                        '01': {
                            fast: `${prefix}/jb2a_patreon/Library/TMFX/OutPulse/Circle/OutPulse_01_Circle_Fast_500.webm`,
                            normal: `${prefix}/jb2a_patreon/Library/TMFX/OutPulse/Circle/OutPulse_01_Circle_Normal_500.webm`,
                            slow: `${prefix}/jb2a_patreon/Library/TMFX/OutPulse/Circle/OutPulse_01_Circle_Slow_500.webm`
                        },
                        '02': {
                            fast: `${prefix}/jb2a_patreon/Library/TMFX/OutPulse/Circle/OutPulse_02_Circle_Fast_500.webm`,
                            normal: `${prefix}/jb2a_patreon/Library/TMFX/OutPulse/Circle/OutPulse_02_Circle_Normal_500.webm`,
                            slow: `${prefix}/jb2a_patreon/Library/TMFX/OutPulse/Circle/OutPulse_02_Circle_Slow_500.webm`
                        },
                        '03': {
                            fast: `${prefix}/jb2a_patreon/Library/TMFX/OutPulse/Circle/OutPulse_03_Circle_Fast_500.webm`,
                            normal: `${prefix}/jb2a_patreon/Library/TMFX/OutPulse/Circle/OutPulse_03_Circle_Normal_500.webm`,
                            slow: `${prefix}/jb2a_patreon/Library/TMFX/OutPulse/Circle/OutPulse_03_Circle_Slow_500.webm`
                        },
                        '04': {
                            fast: `${prefix}/jb2a_patreon/Library/TMFX/OutPulse/Circle/OutPulse_04_Circle_Fast_500.webm`,
                            normal: `${prefix}/jb2a_patreon/Library/TMFX/OutPulse/Circle/OutPulse_04_Circle_Normal_500.webm`,
                            slow: `${prefix}/jb2a_patreon/Library/TMFX/OutPulse/Circle/OutPulse_04_Circle_Slow_500.webm`
                        }
                    },
                    cone: {
                        '01': {
                            fast: `${prefix}/jb2a_patreon/Library/TMFX/OutPulse/Cone/OutPulse_01_Cone_Fast_500.webm`,
                            normal: `${prefix}/jb2a_patreon/Library/TMFX/OutPulse/Cone/OutPulse_01_Cone_Normal_500.webm`
                        },
                        '02': {
                            fast: `${prefix}/jb2a_patreon/Library/TMFX/OutPulse/Cone/OutPulse_02_Cone_Fast_500.webm`,
                            normal: `${prefix}/jb2a_patreon/Library/TMFX/OutPulse/Cone/OutPulse_02_Cone_Normal_500.webm`
                        },
                        '03': {
                            fast: `${prefix}/jb2a_patreon/Library/TMFX/OutPulse/Cone/OutPulse_03_Cone_Fast_500.webm`,
                            normal: `${prefix}/jb2a_patreon/Library/TMFX/OutPulse/Cone/OutPulse_03_Cone_Normal_500.webm`
                        },
                        '04': {
                            fast: `${prefix}/jb2a_patreon/Library/TMFX/OutPulse/Cone/OutPulse_04_Cone_Fast_500.webm`,
                            normal: `${prefix}/jb2a_patreon/Library/TMFX/OutPulse/Cone/OutPulse_04_Cone_Normal_500.webm`
                        }
                    },
                    line: {
                        '01': {
                            fast: `${prefix}/jb2a_patreon/Library/TMFX/OutPulse/Line/OutPulse_01_Line_Fast_500.webm`,
                            normal: `${prefix}/jb2a_patreon/Library/TMFX/OutPulse/Line/OutPulse_01_Line_Normal_500.webm`
                        },
                        '02': {
                            fast: `${prefix}/jb2a_patreon/Library/TMFX/OutPulse/Line/OutPulse_02_Line_Fast_500.webm`,
                            normal: `${prefix}/jb2a_patreon/Library/TMFX/OutPulse/Line/OutPulse_02_Line_Normal_500.webm`
                        },
                        '03': {
                            fast: `${prefix}/jb2a_patreon/Library/TMFX/OutPulse/Line/OutPulse_03_Line_Fast_500.webm`,
                            normal: `${prefix}/jb2a_patreon/Library/TMFX/OutPulse/Line/OutPulse_03_Line_Normal_500.webm`
                        },
                        '04': {
                            fast: `${prefix}/jb2a_patreon/Library/TMFX/OutPulse/Line/OutPulse_04_Line_Fast_500.webm`,
                            normal: `${prefix}/jb2a_patreon/Library/TMFX/OutPulse/Line/OutPulse_04_Line_Normal_500.webm`
                        }
                    }
                },
                projectile: {
                    circle: {
                        fast: `${prefix}/jb2a_patreon/Library/TMFX/Projectile/Circle/ProjectileOutPulse_01_Circle_Fast_500.webm`,
                        normal: `${prefix}/jb2a_patreon/Library/TMFX/Projectile/Circle/ProjectileOutPulse_01_Circle_Normal_500.webm`
                    }
                },
                radar: {
                    circle: {
                        loop: {
                            '01': {
                                fast: `${prefix}/jb2a_patreon/Library/TMFX/Radar/Circle/RadarLoop_01_Circle_Fast_500x500.webm`,
                                normal: `${prefix}/jb2a_patreon/Library/TMFX/Radar/Circle/RadarLoop_01_Circle_Normal_500x500.webm`,
                                slow: `${prefix}/jb2a_patreon/Library/TMFX/Radar/Circle/RadarLoop_01_Circle_Slow_500x500.webm`
                            },
                            '02': {
                                fast: `${prefix}/jb2a_patreon/Library/TMFX/Radar/Circle/RadarLoop_02_Circle_Fast_500x500.webm`,
                                normal: `${prefix}/jb2a_patreon/Library/TMFX/Radar/Circle/RadarLoop_02_Circle_Normal_500x500.webm`,
                                slow: `${prefix}/jb2a_patreon/Library/TMFX/Radar/Circle/RadarLoop_02_Circle_Slow_500x500.webm`
                            }
                        },
                        pulse: {
                            '01': {
                                fast: `${prefix}/jb2a_patreon/Library/TMFX/Radar/Circle/RadarPulse_01_Circle_Fast_500x500.webm`,
                                normal: `${prefix}/jb2a_patreon/Library/TMFX/Radar/Circle/RadarPulse_01_Circle_Normal_500x500.webm`,
                                slow: `${prefix}/jb2a_patreon/Library/TMFX/Radar/Circle/RadarPulse_01_Circle_Slow_500x500.webm`
                            },
                            '02': {
                                fast: `${prefix}/jb2a_patreon/Library/TMFX/Radar/Circle/RadarPulse_02_Circle_Fast_500x500.webm`,
                                normal: `${prefix}/jb2a_patreon/Library/TMFX/Radar/Circle/RadarPulse_02_Circle_Normal_500x500.webm`,
                                slow: `${prefix}/jb2a_patreon/Library/TMFX/Radar/Circle/RadarPulse_02_Circle_Slow_500x500.webm`
                            }
                        }
                    }
                },
                runes: {
                    circle: {
                        inpulse: {
                            abjuration: `${prefix}/jb2a_patreon/Library/TMFX/Runes/Circle/AbjurationInPulse_01_Circle_Normal_500.webm`,
                            conjuration: `${prefix}/jb2a_patreon/Library/TMFX/Runes/Circle/ConjurationInPulse_01_Circle_Normal_500.webm`,
                            divination: `${prefix}/jb2a_patreon/Library/TMFX/Runes/Circle/DivinationInPulse_01_Circle_Normal_500.webm`,
                            enchantment: `${prefix}/jb2a_patreon/Library/TMFX/Runes/Circle/EnchantmentInPulse_01_Circle_Normal_500.webm`,
                            evocation: `${prefix}/jb2a_patreon/Library/TMFX/Runes/Circle/EvocationInPulse_01_Circle_Normal_500.webm`,
                            illusion: `${prefix}/jb2a_patreon/Library/TMFX/Runes/Circle/IllusionInPulse_01_Circle_Normal_500.webm`,
                            necromancy: `${prefix}/jb2a_patreon/Library/TMFX/Runes/Circle/NecromancyInPulse_01_Circle_Normal_500.webm`,
                            transmutation: `${prefix}/jb2a_patreon/Library/TMFX/Runes/Circle/TransmutationInPulse_01_Circle_Normal_500.webm`
                        },
                        outpulse: {
                            abjuration: `${prefix}/jb2a_patreon/Library/TMFX/Runes/Circle/AbjurationOutPulse_01_Circle_Normal_500.webm`,
                            conjuration: `${prefix}/jb2a_patreon/Library/TMFX/Runes/Circle/ConjurationOutPulse_01_Circle_Normal_500.webm`,
                            divination: `${prefix}/jb2a_patreon/Library/TMFX/Runes/Circle/DivinationOutPulse_01_Circle_Normal_500.webm`,
                            enchantment: `${prefix}/jb2a_patreon/Library/TMFX/Runes/Circle/EnchantmentOutPulse_01_Circle_Normal_500.webm`,
                            evocation: `${prefix}/jb2a_patreon/Library/TMFX/Runes/Circle/EvocationOutPulse_01_Circle_Normal_500.webm`,
                            illusion: `${prefix}/jb2a_patreon/Library/TMFX/Runes/Circle/IllusionOutPulse_01_Circle_Normal_500.webm`,
                            necromancy: `${prefix}/jb2a_patreon/Library/TMFX/Runes/Circle/NecromancyOutPulse_01_Circle_Normal_500.webm`,
                            transmutation: `${prefix}/jb2a_patreon/Library/TMFX/Runes/Circle/TransmutationOutPulse_01_Circle_Normal_500.webm`
                        },
                        simple: {
                            abjuration: `${prefix}/jb2a_patreon/Library/TMFX/Runes/Circle/AbjurationSimple_01_Circle_Normal_500.webm`,
                            conjuration: `${prefix}/jb2a_patreon/Library/TMFX/Runes/Circle/ConjurationSimple_01_Circle_Normal_500.webm`,
                            divination: `${prefix}/jb2a_patreon/Library/TMFX/Runes/Circle/DivinationSimple_01_Circle_Normal_500.webm`,
                            enchantment: `${prefix}/jb2a_patreon/Library/TMFX/Runes/Circle/EnchantmentSimple_01_Circle_Normal_500.webm`,
                            evocation: `${prefix}/jb2a_patreon/Library/TMFX/Runes/Circle/EvocationSimple_01_Circle_Normal_500.webm`,
                            illusion: `${prefix}/jb2a_patreon/Library/TMFX/Runes/Circle/IllusionSimple_01_Circle_Normal_500.webm`,
                            necromancy: `${prefix}/jb2a_patreon/Library/TMFX/Runes/Circle/NecromancySimple_01_Circle_Normal_500.webm`,
                            transmutation: `${prefix}/jb2a_patreon/Library/TMFX/Runes/Circle/TransmutationSimple_01_Circle_Normal_500.webm`
                        }
                    }
                }
            }
        },
        patreonDatabase.falchion = {
            melee: {
                _template: 'melee',
                '01': {
                    dark_orangepurple: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Falchion01_01_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Falchion01_02_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Falchion01_03_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Falchion01_04_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Falchion01_05_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Falchion01_06_Dark_OrangePurple_800x600.webm`
                    ],
                    blue: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Falchion01_01_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Falchion01_02_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Falchion01_03_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Falchion01_04_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Falchion01_05_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Falchion01_06_Regular_Blue_800x600.webm`
                    ],
                    orange: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Falchion01_01_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Falchion01_02_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Falchion01_03_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Falchion01_04_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Falchion01_05_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Falchion01_06_Regular_Orange_800x600.webm`
                    ],
                    purple: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Falchion01_01_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Falchion01_02_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Falchion01_03_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Falchion01_04_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Falchion01_05_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Falchion01_06_Regular_Purple_800x600.webm`
                    ],
                    white: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Falchion01_01_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Falchion01_02_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Falchion01_03_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Falchion01_04_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Falchion01_05_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Falchion01_06_Regular_White_800x600.webm`
                    ]
                }
            }
        },
        patreonDatabase.falling_rocks = {
            endframe: {
                side: {
                    '1x1': {
                        black: [
                            `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Side_01_Regular_Black_05x05ft_Endframe.webp`,
                            `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Side_02_Regular_Black_05x05ft_Endframe.webp`
                        ],
                        grey: [
                            `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Side_01_Regular_Grey_05x05ft_Endframe.webp`,
                            `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Side_02_Regular_Grey_05x05ft_Endframe.webp`
                        ],
                        orange: [
                            `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Side_01_Regular_Orange_05x05ft_Endframe.webp`,
                            `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Side_02_Regular_Orange_05x05ft_Endframe.webp`
                        ],
                        sandstone: [
                            `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Side_01_Regular_Sandstone_05x05ft_Endframe.webp`,
                            `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Side_02_Regular_Sandstone_05x05ft_Endframe.webp`
                        ],
                        white: [
                            `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Side_01_Regular_White_05x05ft_Endframe.webp`,
                            `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Side_02_Regular_White_05x05ft_Endframe.webp`
                        ]
                    },
                    '2x1': {
                        black: [
                            `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Side_01_Regular_Black_10x05ft_Endframe.webp`,
                            `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Side_02_Regular_Black_10x05ft_Endframe.webp`
                        ],
                        grey: [
                            `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Side_01_Regular_Grey_10x05ft_Endframe.webp`,
                            `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Side_02_Regular_Grey_10x05ft_Endframe.webp`
                        ],
                        orange: [
                            `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Side_01_Regular_Orange_10x05ft_Endframe.webp`,
                            `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Side_02_Regular_Orange_10x05ft_Endframe.webp`
                        ],
                        sandstone: [
                            `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Side_01_Regular_Sandstone_10x05ft_Endframe.webp`,
                            `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Side_02_Regular_Sandstone_10x05ft_Endframe.webp`
                        ],
                        white: [
                            `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Side_01_Regular_White_10x05ft_Endframe.webp`,
                            `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Side_02_Regular_White_10x05ft_Endframe.webp`
                        ]
                    }
                },
                top: {
                    '1x1': {
                        black: [
                            `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Top_01_Regular_Black_05x05ft_Endframe.webp`,
                            `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Top_02_Regular_Black_05x05ft_Endframe.webp`
                        ],
                        grey: [
                            `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Top_01_Regular_Grey_05x05ft_Endframe.webp`,
                            `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Top_02_Regular_Grey_05x05ft_Endframe.webp`
                        ],
                        orange: [
                            `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Top_01_Regular_Orange_05x05ft_Endframe.webp`,
                            `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Top_02_Regular_Orange_05x05ft_Endframe.webp`
                        ],
                        sandstone: [
                            `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Top_01_Regular_Sandstone_05x05ft_Endframe.webp`,
                            `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Top_02_Regular_Sandstone_05x05ft_Endframe.webp`
                        ],
                        white: [
                            `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Top_01_Regular_White_05x05ft_Endframe.webp`,
                            `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Top_02_Regular_White_05x05ft_Endframe.webp`
                        ]
                    },
                    '2x1': {
                        black: [
                            `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Top_01_Regular_Black_10x05ft_Endframe.webp`,
                            `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Top_02_Regular_Black_10x05ft_Endframe.webp`
                        ],
                        grey: [
                            `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Top_01_Regular_Grey_10x05ft_Endframe.webp`,
                            `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Top_02_Regular_Grey_10x05ft_Endframe.webp`
                        ],
                        orange: [
                            `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Top_01_Regular_Orange_10x05ft_Endframe.webp`,
                            `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Top_02_Regular_Orange_10x05ft_Endframe.webp`
                        ],
                        sandstone: [
                            `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Top_01_Regular_Sandstone_10x05ft_Endframe.webp`,
                            `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Top_02_Regular_Sandstone_10x05ft_Endframe.webp`
                        ],
                        white: [
                            `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Top_01_Regular_White_10x05ft_Endframe.webp`,
                            `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Top_02_Regular_White_10x05ft_Endframe.webp`
                        ]
                    }
                }
            },
            side: {
                '1x1': {
                    black: [
                        `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Side_01_Regular_Black_05x05ft_600x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Side_02_Regular_Black_05x05ft_600x600.webm`
                    ],
                    grey: [
                        `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Side_01_Regular_Grey_05x05ft_600x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Side_02_Regular_Grey_05x05ft_600x600.webm`
                    ],
                    orange: [
                        `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Side_01_Regular_Orange_05x05ft_600x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Side_02_Regular_Orange_05x05ft_600x600.webm`
                    ],
                    sandstone: [
                        `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Side_01_Regular_Sandstone_05x05ft_600x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Side_02_Regular_Sandstone_05x05ft_600x600.webm`
                    ],
                    white: [
                        `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Side_01_Regular_White_05x05ft_600x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Side_02_Regular_White_05x05ft_600x600.webm`
                    ]
                },
                '2x1': {
                    black: [
                        `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Side_01_Regular_Black_10x05ft_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Side_02_Regular_Black_10x05ft_800x600.webm`
                    ],
                    grey: [
                        `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Side_01_Regular_Grey_10x05ft_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Side_02_Regular_Grey_10x05ft_800x600.webm`
                    ],
                    orange: [
                        `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Side_01_Regular_Orange_10x05ft_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Side_02_Regular_Orange_10x05ft_800x600.webm`
                    ],
                    sandstone: [
                        `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Side_01_Regular_Sandstone_10x05ft_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Side_02_Regular_Sandstone_10x05ft_800x600.webm`
                    ],
                    white: [
                        `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Side_01_Regular_White_10x05ft_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Side_02_Regular_White_10x05ft_800x600.webm`
                    ]
                }
            },
            top: {
                '1x1': {
                    black: [
                        `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Top_01_Regular_Black_05x05ft_600x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Top_02_Regular_Black_05x05ft_600x600.webm`
                    ],
                    grey: [
                        `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Top_01_Regular_Grey_05x05ft_600x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Top_02_Regular_Grey_05x05ft_600x600.webm`
                    ],
                    orange: [
                        `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Top_01_Regular_Orange_05x05ft_600x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Top_02_Regular_Orange_05x05ft_600x600.webm`
                    ],
                    sandstone: [
                        `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Top_01_Regular_Sandstone_05x05ft_600x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Top_02_Regular_Sandstone_05x05ft_600x600.webm`
                    ],
                    white: [
                        `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Top_01_Regular_White_05x05ft_600x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Top_02_Regular_White_05x05ft_600x600.webm`
                    ]
                },
                '2x1': {
                    black: [
                        `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Top_01_Regular_Black_10x05ft_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Top_02_Regular_Black_10x05ft_800x600.webm`
                    ],
                    grey: [
                        `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Top_01_Regular_Grey_10x05ft_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Top_02_Regular_Grey_10x05ft_800x600.webm`
                    ],
                    orange: [
                        `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Top_01_Regular_Orange_10x05ft_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Top_02_Regular_Orange_10x05ft_800x600.webm`
                    ],
                    sandstone: [
                        `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Top_01_Regular_Sandstone_10x05ft_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Top_02_Regular_Sandstone_10x05ft_800x600.webm`
                    ],
                    white: [
                        `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Top_01_Regular_White_10x05ft_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Traps/Falling_Rocks/FallingRocks01Top_02_Regular_White_10x05ft_800x600.webm`
                    ]
                }
            }
        },
        patreonDatabase.fireball = {
            _template: 'cone100',
            loop_debris: {
                dark_purple: `${prefix}/jb2a_patreon/Library/3rd_Level/Fireball/FireballLoop_01_Dark_Purple_800x800.webm`,
                blue: `${prefix}/jb2a_patreon/Library/3rd_Level/Fireball/FireballLoop_01_Blue_800x800.webm`,
                orange: `${prefix}/jb2a_patreon/Library/3rd_Level/Fireball/FireballLoop_01_Orange_800x800.webm`,
                purple: `${prefix}/jb2a_patreon/Library/3rd_Level/Fireball/FireballLoop_01_Purple_800x800.webm`
            },
            loop_no_debris: {
                dark_purple: `${prefix}/jb2a_patreon/Library/3rd_Level/Fireball/FireballLoopNoDebris_01_Dark_Purple_800x800.webm`,
                blue: `${prefix}/jb2a_patreon/Library/3rd_Level/Fireball/FireballLoopNoDebris_01_Blue_800x800.webm`,
                orange: `${prefix}/jb2a_patreon/Library/3rd_Level/Fireball/FireballLoopNoDebris_01_Orange_800x800.webm`,
                purple: `${prefix}/jb2a_patreon/Library/3rd_Level/Fireball/FireballLoopNoDebris_01_Purple_800x800.webm`
            },
            explosion: {
                dark_purple: `${prefix}/jb2a_patreon/Library/3rd_Level/Fireball/FireballExplosion_01_Dark_Purple_800x800.webm`,
                blue: `${prefix}/jb2a_patreon/Library/3rd_Level/Fireball/FireballExplosion_01_Blue_800x800.webm`,
                orange: `${prefix}/jb2a_patreon/Library/3rd_Level/Fireball/FireballExplosion_01_Orange_800x800.webm`,
                purple: `${prefix}/jb2a_patreon/Library/3rd_Level/Fireball/FireballExplosion_01_Purple_800x800.webm`
            },
            beam: {
                _template: 'ranged',
                dark_purple: {
                    '05ft': `${prefix}/jb2a_patreon/Library/3rd_Level/Fireball/FireballBeam_01_Dark_Purple_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/3rd_Level/Fireball/FireballBeam_01_Dark_Purple_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/3rd_Level/Fireball/FireballBeam_01_Dark_Purple_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/3rd_Level/Fireball/FireballBeam_01_Dark_Purple_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/3rd_Level/Fireball/FireballBeam_01_Dark_Purple_90ft_4000x400.webm`
                },
                blue: {
                    '05ft': `${prefix}/jb2a_patreon/Library/3rd_Level/Fireball/FireballBeam_01_Blue_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/3rd_Level/Fireball/FireballBeam_01_Blue_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/3rd_Level/Fireball/FireballBeam_01_Blue_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/3rd_Level/Fireball/FireballBeam_01_Blue_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/3rd_Level/Fireball/FireballBeam_01_Blue_90ft_4000x400.webm`
                },
                orange: {
                    '05ft': `${prefix}/jb2a_patreon/Library/3rd_Level/Fireball/FireballBeam_01_Orange_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/3rd_Level/Fireball/FireballBeam_01_Orange_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/3rd_Level/Fireball/FireballBeam_01_Orange_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/3rd_Level/Fireball/FireballBeam_01_Orange_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/3rd_Level/Fireball/FireballBeam_01_Orange_90ft_4000x400.webm`
                },
                purple: {
                    '05ft': `${prefix}/jb2a_patreon/Library/3rd_Level/Fireball/FireballBeam_01_Purple_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/3rd_Level/Fireball/FireballBeam_01_Purple_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/3rd_Level/Fireball/FireballBeam_01_Purple_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/3rd_Level/Fireball/FireballBeam_01_Purple_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/3rd_Level/Fireball/FireballBeam_01_Purple_90ft_4000x400.webm`
                }
            }

        },
        patreonDatabase.fire_bolt = {
            _template: 'ranged',
            blue: {
                '05ft': `${prefix}/jb2a_patreon/Library/Cantrip/Fire_Bolt/FireBolt_01_Regular_Blue_05ft_600x400.webm`,
                '15ft': `${prefix}/jb2a_patreon/Library/Cantrip/Fire_Bolt/FireBolt_01_Regular_Blue_15ft_1000x400.webm`,
                '30ft': `${prefix}/jb2a_patreon/Library/Cantrip/Fire_Bolt/FireBolt_01_Regular_Blue_30ft_1600x400.webm`,
                '60ft': `${prefix}/jb2a_patreon/Library/Cantrip/Fire_Bolt/FireBolt_01_Regular_Blue_60ft_2800x400.webm`,
                '90ft': `${prefix}/jb2a_patreon/Library/Cantrip/Fire_Bolt/FireBolt_01_Regular_Blue_90ft_4000x400.webm`
            },
            dark_green: {
                '05ft': `${prefix}/jb2a_patreon/Library/Cantrip/Fire_Bolt/FireBolt_01_Dark_Green02_05ft_600x400.webm`,
                '15ft': `${prefix}/jb2a_patreon/Library/Cantrip/Fire_Bolt/FireBolt_01_Dark_Green02_15ft_1000x400.webm`,
                '30ft': `${prefix}/jb2a_patreon/Library/Cantrip/Fire_Bolt/FireBolt_01_Dark_Green02_30ft_1600x400.webm`,
                '60ft': `${prefix}/jb2a_patreon/Library/Cantrip/Fire_Bolt/FireBolt_01_Dark_Green02_60ft_2800x400.webm`,
                '90ft': `${prefix}/jb2a_patreon/Library/Cantrip/Fire_Bolt/FireBolt_01_Dark_Green02_90ft_4000x400.webm`
            },
            dark_red: {
                '05ft': `${prefix}/jb2a_patreon/Library/Cantrip/Fire_Bolt/FireBolt_01_Dark_Red_05ft_600x400.webm`,
                '15ft': `${prefix}/jb2a_patreon/Library/Cantrip/Fire_Bolt/FireBolt_01_Dark_Red_15ft_1000x400.webm`,
                '30ft': `${prefix}/jb2a_patreon/Library/Cantrip/Fire_Bolt/FireBolt_01_Dark_Red_30ft_1600x400.webm`,
                '60ft': `${prefix}/jb2a_patreon/Library/Cantrip/Fire_Bolt/FireBolt_01_Dark_Red_60ft_2800x400.webm`,
                '90ft': `${prefix}/jb2a_patreon/Library/Cantrip/Fire_Bolt/FireBolt_01_Dark_Red_90ft_4000x400.webm`
            },
            green: {
                '05ft': `${prefix}/jb2a_patreon/Library/Cantrip/Fire_Bolt/FireBolt_01_Regular_Green_05ft_600x400.webm`,
                '15ft': `${prefix}/jb2a_patreon/Library/Cantrip/Fire_Bolt/FireBolt_01_Regular_Green_15ft_1000x400.webm`,
                '30ft': `${prefix}/jb2a_patreon/Library/Cantrip/Fire_Bolt/FireBolt_01_Regular_Green_30ft_1600x400.webm`,
                '60ft': `${prefix}/jb2a_patreon/Library/Cantrip/Fire_Bolt/FireBolt_01_Regular_Green_60ft_2800x400.webm`,
                '90ft': `${prefix}/jb2a_patreon/Library/Cantrip/Fire_Bolt/FireBolt_01_Regular_Green_90ft_4000x400.webm`
            },
            green02: {
                '05ft': `${prefix}/jb2a_patreon/Library/Cantrip/Fire_Bolt/FireBolt_01_Regular_Green02_05ft_600x400.webm`,
                '15ft': `${prefix}/jb2a_patreon/Library/Cantrip/Fire_Bolt/FireBolt_01_Regular_Green02_15ft_1000x400.webm`,
                '30ft': `${prefix}/jb2a_patreon/Library/Cantrip/Fire_Bolt/FireBolt_01_Regular_Green02_30ft_1600x400.webm`,
                '60ft': `${prefix}/jb2a_patreon/Library/Cantrip/Fire_Bolt/FireBolt_01_Regular_Green02_60ft_2800x400.webm`,
                '90ft': `${prefix}/jb2a_patreon/Library/Cantrip/Fire_Bolt/FireBolt_01_Regular_Green02_90ft_4000x400.webm`
            },
            orange: {
                '05ft': `${prefix}/jb2a_patreon/Library/Cantrip/Fire_Bolt/FireBolt_01_Regular_Orange_05ft_600x400.webm`,
                '15ft': `${prefix}/jb2a_patreon/Library/Cantrip/Fire_Bolt/FireBolt_01_Regular_Orange_15ft_1000x400.webm`,
                '30ft': `${prefix}/jb2a_patreon/Library/Cantrip/Fire_Bolt/FireBolt_01_Regular_Orange_30ft_1600x400.webm`,
                '60ft': `${prefix}/jb2a_patreon/Library/Cantrip/Fire_Bolt/FireBolt_01_Regular_Orange_60ft_2800x400.webm`,
                '90ft': `${prefix}/jb2a_patreon/Library/Cantrip/Fire_Bolt/FireBolt_01_Regular_Orange_90ft_4000x400.webm`
            },
            purple: {
                '05ft': `${prefix}/jb2a_patreon/Library/Cantrip/Fire_Bolt/FireBolt_01_Regular_Purple_05ft_600x400.webm`,
                '15ft': `${prefix}/jb2a_patreon/Library/Cantrip/Fire_Bolt/FireBolt_01_Regular_Purple_15ft_1000x400.webm`,
                '30ft': `${prefix}/jb2a_patreon/Library/Cantrip/Fire_Bolt/FireBolt_01_Regular_Purple_30ft_1600x400.webm`,
                '60ft': `${prefix}/jb2a_patreon/Library/Cantrip/Fire_Bolt/FireBolt_01_Regular_Purple_60ft_2800x400.webm`,
                '90ft': `${prefix}/jb2a_patreon/Library/Cantrip/Fire_Bolt/FireBolt_01_Regular_Purple_90ft_4000x400.webm`
            }
        },
        patreonDatabase.fireflies = {
            few: {
                '01': {
                    blue: `${prefix}/jb2a_patreon/Library/Generic/Fireflies/Fireflies_01_Blue_Few01_400x400.webm`,
                    green: `${prefix}/jb2a_patreon/Library/Generic/Fireflies/Fireflies_01_Green_Few01_400x400.webm`,
                    purple: `${prefix}/jb2a_patreon/Library/Generic/Fireflies/Fireflies_01_Purple_Few01_400x400.webm`,
                    red: `${prefix}/jb2a_patreon/Library/Generic/Fireflies/Fireflies_01_Red_Few01_400x400.webm`,
                    yellow: `${prefix}/jb2a_patreon/Library/Generic/Fireflies/Fireflies_01_Yellow_Few01_400x400.webm`
                },
                '02': {
                    blue: `${prefix}/jb2a_patreon/Library/Generic/Fireflies/Fireflies_01_Blue_Few02_400x400.webm`,
                    green: `${prefix}/jb2a_patreon/Library/Generic/Fireflies/Fireflies_01_Green_Few02_400x400.webm`,
                    purple: `${prefix}/jb2a_patreon/Library/Generic/Fireflies/Fireflies_01_Purple_Few02_400x400.webm`,
                    red: `${prefix}/jb2a_patreon/Library/Generic/Fireflies/Fireflies_01_Red_Few02_400x400.webm`,
                    yellow: `${prefix}/jb2a_patreon/Library/Generic/Fireflies/Fireflies_01_Yellow_Few02_400x400.webm`
                }
            },
            many: {
                '01': {
                    blue: `${prefix}/jb2a_patreon/Library/Generic/Fireflies/Fireflies_01_Blue_Many01_400x400.webm`,
                    green: `${prefix}/jb2a_patreon/Library/Generic/Fireflies/Fireflies_01_Green_Many01_400x400.webm`,
                    purple: `${prefix}/jb2a_patreon/Library/Generic/Fireflies/Fireflies_01_Purple_Many01_400x400.webm`,
                    red: `${prefix}/jb2a_patreon/Library/Generic/Fireflies/Fireflies_01_Red_Many01_400x400.webm`,
                    yellow: `${prefix}/jb2a_patreon/Library/Generic/Fireflies/Fireflies_01_Yellow_Many01_400x400.webm`
                },
                '02': {
                    blue: `${prefix}/jb2a_patreon/Library/Generic/Fireflies/Fireflies_01_Blue_Many02_400x400.webm`,
                    green: `${prefix}/jb2a_patreon/Library/Generic/Fireflies/Fireflies_01_Green_Many02_400x400.webm`,
                    purple: `${prefix}/jb2a_patreon/Library/Generic/Fireflies/Fireflies_01_Purple_Many02_400x400.webm`,
                    red: `${prefix}/jb2a_patreon/Library/Generic/Fireflies/Fireflies_01_Red_Many02_400x400.webm`,
                    yellow: `${prefix}/jb2a_patreon/Library/Generic/Fireflies/Fireflies_01_Yellow_Many02_400x400.webm`
                }
            }
        },
        patreonDatabase.fire_jet = {
            blue: {
                '15ft': `${prefix}/jb2a_patreon/Library/Generic/Fire/FireJet_01_Blue_15ft_600x200.webm`,
                '30ft': `${prefix}/jb2a_patreon/Library/Generic/Fire/FireJet_01_Blue_30ft_1200x200.webm`
            },
            green: {
                '15ft': `${prefix}/jb2a_patreon/Library/Generic/Fire/FireJet_01_Green_15ft_600x200.webm`,
                '30ft': `${prefix}/jb2a_patreon/Library/Generic/Fire/FireJet_01_Green_30ft_1200x200.webm`
            },
            orange: {
                '15ft': `${prefix}/jb2a_patreon/Library/Generic/Fire/FireJet_01_Orange_15ft_600x200.webm`,
                '30ft': `${prefix}/jb2a_patreon/Library/Generic/Fire/FireJet_01_Orange_30ft_1200x200.webm`
            },
            purple: {
                '15ft': `${prefix}/jb2a_patreon/Library/Generic/Fire/FireJet_01_Purple_15ft_600x200.webm`,
                '30ft': `${prefix}/jb2a_patreon/Library/Generic/Fire/FireJet_01_Purple_30ft_1200x200.webm`
            }
        },
        patreonDatabase.fire_ring = {
            '500px': {
                blue: `${prefix}/jb2a_patreon/Library/Generic/Fire/FireRing_01_Circle_Blue_500.webm`,
                green: `${prefix}/jb2a_patreon/Library/Generic/Fire/FireRing_01_Circle_Green_500.webm`,
                red: `${prefix}/jb2a_patreon/Library/Generic/Fire/FireRing_01_Circle_Red_500.webm`
            },
            '900px': {
                blue: `${prefix}/jb2a_patreon/Library/Generic/Fire/FireRing_01_Circle_Blue_900.webm`,
                green: `${prefix}/jb2a_patreon/Library/Generic/Fire/FireRing_01_Circle_Green_900.webm`,
                red: `${prefix}/jb2a_patreon/Library/Generic/Fire/FireRing_01_Circle_Red_900.webm`
            }
        },
        patreonDatabase.fire_trap = {
            '01':{
                green: `${prefix}/jb2a_patreon/Library/Generic/Traps/FireTrap01_01_Regular_Green_1000x1000.webm`,
                orange: `${prefix}/jb2a_patreon/Library/Generic/Traps/FireTrap01_01_Regular_Orange_1000x1000.webm`
            },
            '02':{
                single:{
                    green: `${prefix}/jb2a_patreon/Library/Generic/Traps/FireTrap02_01_Regular_Green_1400x1400.webm`,
                    orange: `${prefix}/jb2a_patreon/Library/Generic/Traps/FireTrap02_01_Regular_Orange_1400x1400.webm`
                },
                dual:{
                    green: `${prefix}/jb2a_patreon/Library/Generic/Traps/FireTrapDual02_01_Regular_Green_1400x1400.webm`,
                    orange: `${prefix}/jb2a_patreon/Library/Generic/Traps/FireTrapDual02_01_Regular_Orange_1400x1400.webm`
                }
            }
        },
        patreonDatabase.firework = {
            '01': {
                bluepink: {
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Fireworks/Firework03_01_Regular_BluePink_600x600.webm`,
                },
                green: {
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Fireworks/Firework02_01_Regular_Green_600x600.webm`,
                },
                greenorange: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Fireworks/Firework01_01_Regular_GreenOrange_600x600.webm`,
                },
                greenred: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Fireworks/Firework01_01_Regular_GreenRed_600x600.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Fireworks/Firework03_01_Regular_GreenRed_600x600.webm`,
                },
                orange: {
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Fireworks/Firework02_01_Regular_Orange_600x600.webm`,
                },
                orangeyellow: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Fireworks/Firework01_01_Regular_OrangeYellow_600x600.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Fireworks/Firework03_01_Regular_OrangeYellow_600x600.webm`
                },
                yellow: {
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Fireworks/Firework02_01_Regular_Yellow_600x600.webm`
                }
            },
            '02': {
                bluepink: {
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Fireworks/Firework03_02_Regular_BluePink_600x600.webm`,
                },
                green: {
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Fireworks/Firework02_02_Regular_Green_600x600.webm`,
                },
                greenorange: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Fireworks/Firework01_02_Regular_GreenOrange_600x600.webm`,
                },
                greenred: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Fireworks/Firework01_02_Regular_GreenRed_600x600.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Fireworks/Firework03_02_Regular_GreenRed_600x600.webm`,
                },
                orange: {
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Fireworks/Firework02_02_Regular_Orange_600x600.webm`,
                },
                orangeyellow: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Fireworks/Firework01_02_Regular_OrangeYellow_600x600.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Fireworks/Firework03_02_Regular_OrangeYellow_600x600.webm`
                },
                yellow: {
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Fireworks/Firework02_02_Regular_Yellow_600x600.webm`
                }
            }
        },
        patreonDatabase.flames = {
            //[--> WILL BE REMOVED 
            '01': {
                blue: `${prefix}/jb2a_patreon/Library/Generic/Fire/Flame/Flames_01_Regular_Blue_200x200.webm`,
                green: `${prefix}/jb2a_patreon/Library/Generic/Fire/Flame/Flames_01_Regular_Green_200x200.webm`,
                orange: `${prefix}/jb2a_patreon/Library/Generic/Fire/Flame/Flames_01_Regular_Orange_200x200.webm`,
                purple: `${prefix}/jb2a_patreon/Library/Generic/Fire/Flame/Flames_01_Regular_Purple_200x200.webm`
            },
            '02': {
                blue: `${prefix}/jb2a_patreon/Library/Generic/Fire/Flame/Flames_02_Regular_Blue_400x400.webm`,
                green: `${prefix}/jb2a_patreon/Library/Generic/Fire/Flame/Flames_02_Regular_Green_400x400.webm`,
                orange: `${prefix}/jb2a_patreon/Library/Generic/Fire/Flame/Flames_02_Regular_Orange_400x400.webm`,
                purple: `${prefix}/jb2a_patreon/Library/Generic/Fire/Flame/Flames_02_Regular_Purple_400x400.webm`
            },
            //<--] WILL BE REMOVED 
            blue: {
                '01': `${prefix}/jb2a_patreon/Library/Generic/Fire/Flame/Flames_01_Regular_Blue_200x200.webm`,
                '02': `${prefix}/jb2a_patreon/Library/Generic/Fire/Flame/Flames_02_Regular_Blue_400x400.webm`,
                '03': {
                    '1x1': [
                        `${prefix}/jb2a_patreon/Library/Generic/Fire/Flame/Flames03_01_Regular_Blue_05x05ft_300x300.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Fire/Flame/Flames03_02_Regular_Blue_05x05ft_300x300.webm`
                    ],
                    '2x1': [
                        `${prefix}/jb2a_patreon/Library/Generic/Fire/Flame/Flames03_01_Regular_Blue_10x05ft_400x300.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Fire/Flame/Flames03_02_Regular_Blue_10x05ft_400x300.webm`
                    ],
                    '2x2': [
                        `${prefix}/jb2a_patreon/Library/Generic/Fire/Flame/Flames03_01_Regular_Blue_10x10ft_400x400.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Fire/Flame/Flames03_02_Regular_Blue_10x10ft_400x400.webm`
                    ]
                }
            },
            green: {
                '01': `${prefix}/jb2a_patreon/Library/Generic/Fire/Flame/Flames_01_Regular_Green_200x200.webm`,
                '02': `${prefix}/jb2a_patreon/Library/Generic/Fire/Flame/Flames_02_Regular_Green_400x400.webm`,
                '03': {
                    '1x1': [
                        `${prefix}/jb2a_patreon/Library/Generic/Fire/Flame/Flames03_01_Regular_Green_05x05ft_300x300.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Fire/Flame/Flames03_02_Regular_Green_05x05ft_300x300.webm`
                    ],
                    '2x1': [
                        `${prefix}/jb2a_patreon/Library/Generic/Fire/Flame/Flames03_01_Regular_Green_10x05ft_400x300.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Fire/Flame/Flames03_02_Regular_Green_10x05ft_400x300.webm`
                    ],
                    '2x2': [
                        `${prefix}/jb2a_patreon/Library/Generic/Fire/Flame/Flames03_01_Regular_Green_10x10ft_400x400.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Fire/Flame/Flames03_02_Regular_Green_10x10ft_400x400.webm`
                    ]
                }
            },
            orange: {
                '01': `${prefix}/jb2a_patreon/Library/Generic/Fire/Flame/Flames_01_Regular_Orange_200x200.webm`,
                '02': `${prefix}/jb2a_patreon/Library/Generic/Fire/Flame/Flames_02_Regular_Orange_400x400.webm`,
                '03': {
                    '1x1': [
                        `${prefix}/jb2a_patreon/Library/Generic/Fire/Flame/Flames03_01_Regular_Orange_05x05ft_300x300.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Fire/Flame/Flames03_02_Regular_Orange_05x05ft_300x300.webm`
                    ],
                    '2x1': [
                        `${prefix}/jb2a_patreon/Library/Generic/Fire/Flame/Flames03_01_Regular_Orange_10x05ft_400x300.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Fire/Flame/Flames03_02_Regular_Orange_10x05ft_400x300.webm`
                    ],
                    '2x2': [
                        `${prefix}/jb2a_patreon/Library/Generic/Fire/Flame/Flames03_01_Regular_Orange_10x10ft_400x400.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Fire/Flame/Flames03_02_Regular_Orange_10x10ft_400x400.webm`
                    ]
                }
            },
            purple: {
                '01': `${prefix}/jb2a_patreon/Library/Generic/Fire/Flame/Flames_01_Regular_Purple_200x200.webm`,
                '02': `${prefix}/jb2a_patreon/Library/Generic/Fire/Flame/Flames_02_Regular_Purple_400x400.webm`,
                '03': {
                    '1x1': [
                        `${prefix}/jb2a_patreon/Library/Generic/Fire/Flame/Flames03_01_Regular_Purple_05x05ft_300x300.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Fire/Flame/Flames03_02_Regular_Purple_05x05ft_300x300.webm`
                    ],
                    '2x1': [
                        `${prefix}/jb2a_patreon/Library/Generic/Fire/Flame/Flames03_01_Regular_Purple_10x05ft_400x300.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Fire/Flame/Flames03_02_Regular_Purple_10x05ft_400x300.webm`
                    ],
                    '2x2': [
                        `${prefix}/jb2a_patreon/Library/Generic/Fire/Flame/Flames03_01_Regular_Purple_10x10ft_400x400.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Fire/Flame/Flames03_02_Regular_Purple_10x10ft_400x400.webm`
                    ]
                }
            }
        },
        patreonDatabase.flaming_sphere = {
            "200px": {
                blue: {
                    '01': `${prefix}/jb2a_patreon/Library/2nd_Level/Flaming_Sphere/FlamingSphere_01_Blue_200x200.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/2nd_Level/Flaming_Sphere/FlamingSphere_02_Blue_200x200.webm`
                },
                green: `${prefix}/jb2a_patreon/Library/2nd_Level/Flaming_Sphere/FlamingSphere_01_Green_200x200.webm`,
                greenblue: `${prefix}/jb2a_patreon/Library/2nd_Level/Flaming_Sphere/Multicoloured/FlamingSphere_01_GreenToBlue_200x200.webm`,
                orange: {
                    '01': `${prefix}/jb2a_patreon/Library/2nd_Level/Flaming_Sphere/FlamingSphere_01_Orange_200x200.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/2nd_Level/Flaming_Sphere/FlamingSphere_02_Orange_200x200.webm`
                },
                pink: `${prefix}/jb2a_patreon/Library/2nd_Level/Flaming_Sphere/FlamingSphere_01_Pink_200x200.webm`,
                purple: {
                    '01': `${prefix}/jb2a_patreon/Library/2nd_Level/Flaming_Sphere/FlamingSphere_01_Purple_200x200.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/2nd_Level/Flaming_Sphere/FlamingSphere_02_Purple_200x200.webm`
                },
                rainbow: `${prefix}/jb2a_patreon/Library/2nd_Level/Flaming_Sphere/Multicoloured/FlamingSphere_01_Rainbow_200x200.webm`,
                red: `${prefix}/jb2a_patreon/Library/2nd_Level/Flaming_Sphere/FlamingSphere_01_Red_200x200.webm`,
            },
            '400px': {
                blue: {
                    '02': `${prefix}/jb2a_patreon/Library/2nd_Level/Flaming_Sphere/FlamingSphere_02_Blue_400x400.webm`
                },
                orange: {
                    '02': `${prefix}/jb2a_patreon/Library/2nd_Level/Flaming_Sphere/FlamingSphere_02_Orange_400x400.webm`
                },
                purple: {
                    '02': `${prefix}/jb2a_patreon/Library/2nd_Level/Flaming_Sphere/FlamingSphere_02_Purple_400x400.webm`
                }
            }
        },
        patreonDatabase.flurry_of_blows = {
            _template: 'melee',
            magical: {
                '01': {
                    blue: `${prefix}/jb2a_patreon/Library/Generic/Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlows_01_Regular_Blue_Magical01_800x600.webm`,
                    dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlows_01_Dark_Purple_Magical01_800x600.webm`,
                    dark_red: `${prefix}/jb2a_patreon/Library/Generic/Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlows_01_Dark_Red_Magical01_800x600.webm`,
                    green: `${prefix}/jb2a_patreon/Library/Generic/Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlows_01_Regular_Green_Magical01_800x600.webm`,
                    orange: `${prefix}/jb2a_patreon/Library/Generic/Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlows_01_Regular_Orange_Magical01_800x600.webm`,
                    pinkpurple: `${prefix}/jb2a_patreon/Library/Generic/Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlows_01_Regular_PinkPurple_Magical01_800x600.webm`,
                    yellow: `${prefix}/jb2a_patreon/Library/Generic/Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlows_01_Regular_Yellow_Magical01_800x600.webm`
                },
                '02': {
                    blue: `${prefix}/jb2a_patreon/Library/Generic/Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlows_01_Regular_Blue_Magical02_800x600.webm`,
                    dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlows_01_Dark_Purple_Magical02_800x600.webm`,
                    dark_red: `${prefix}/jb2a_patreon/Library/Generic/Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlows_01_Dark_Red_Magical02_800x600.webm`,
                    green: `${prefix}/jb2a_patreon/Library/Generic/Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlows_01_Regular_Green_Magical02_800x600.webm`,
                    orange: `${prefix}/jb2a_patreon/Library/Generic/Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlows_01_Regular_Orange_Magical02_800x600.webm`,
                    pinkpurple: `${prefix}/jb2a_patreon/Library/Generic/Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlows_01_Regular_PinkPurple_Magical02_800x600.webm`,
                    yellow: `${prefix}/jb2a_patreon/Library/Generic/Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlows_01_Regular_Yellow_Magical02_800x600.webm`
                }
            },
            physical: {
                blue: `${prefix}/jb2a_patreon/Library/Generic/Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlows_01_Regular_Blue_Physical01_800x600.webm`,
                dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlows_01_Dark_Purple_Physical01_800x600.webm`,
                dark_red: `${prefix}/jb2a_patreon/Library/Generic/Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlows_01_Dark_Red_Physical01_800x600.webm`,
                green: `${prefix}/jb2a_patreon/Library/Generic/Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlows_01_Regular_Green_Physical01_800x600.webm`,
                orange: `${prefix}/jb2a_patreon/Library/Generic/Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlows_01_Regular_Orange_Physical01_800x600.webm`,
                pinkpurple: `${prefix}/jb2a_patreon/Library/Generic/Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlows_01_Regular_PinkPurple_Physical01_800x600.webm`,
                yellow: `${prefix}/jb2a_patreon/Library/Generic/Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlows_01_Regular_Yellow_Physical01_800x600.webm`
            },
            no_hit: {
                blue: `${prefix}/jb2a_patreon/Library/Generic/Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlowsNoHit_01_Regular_Blue_800x600.webm`,
                yellow: `${prefix}/jb2a_patreon/Library/Generic/Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlowsNoHit_01_Regular_Yellow_800x600.webm`
            }
        },
        patreonDatabase.fog_cloud = {
            //[--> WILL BE REMOVED 
            '1': {
                white: `${prefix}/jb2a_patreon/Library/1st_Level/Fog_Cloud/FogCloud_01_White_800x800.webm`,
            },
            '2': {
                white: `${prefix}/jb2a_patreon/Library/1st_Level/Fog_Cloud/FogCloud_02_Regular_White_800x800.webm`,
                green: `${prefix}/jb2a_patreon/Library/1st_Level/Fog_Cloud/FogCloud_02_Regular_Green_800x800.webm`
            },
            //<--] WILL BE REMOVED 
            '01': {
                white: `${prefix}/jb2a_patreon/Library/1st_Level/Fog_Cloud/FogCloud_01_White_800x800.webm`,
            },
            '02': {
                white: `${prefix}/jb2a_patreon/Library/1st_Level/Fog_Cloud/FogCloud_02_Regular_White_800x800.webm`,
                green: `${prefix}/jb2a_patreon/Library/1st_Level/Fog_Cloud/FogCloud_02_Regular_Green_800x800.webm`,
                green02: `${prefix}/jb2a_patreon/Library/1st_Level/Fog_Cloud/FogCloud_02_Regular_Green02_800x800.webm`
            },
            '03': {
                green02: `${prefix}/jb2a_patreon/Library/1st_Level/Fog_Cloud/FogCloud_03_Regular_Green02_800x800.webm`,
            }
        },
        patreonDatabase.footprints = {
            human: {
                black: `${prefix}/jb2a_patreon/Library/Generic/FootPrint/HumanFootPrint_01_Black_200x200.webm`,
                grey: `${prefix}/jb2a_patreon/Library/Generic/FootPrint/HumanFootPrint_01_Grey_200x200.webm`
            },
            monster: {
                black: `${prefix}/jb2a_patreon/Library/Generic/FootPrint/MonsterFootPrint_01_Black_200x200.webm`,
                grey: `${prefix}/jb2a_patreon/Library/Generic/FootPrint/MonsterFootPrint_01_Grey_200x200.webm`
            },
            shoe: {
                black: `${prefix}/jb2a_patreon/Library/Generic/FootPrint/ShoePrint_01_Black_200x200.webm`,
                grey: `${prefix}/jb2a_patreon/Library/Generic/FootPrint/ShoePrint_01_Grey_200x200.webm`
            }
        },
        patreonDatabase.fumes = {
            fire: {
                orange: `${prefix}/jb2a_patreon/Library/Generic/Smoke/Fumes_01_Fire_Orange_400x400.webm`
            },
            steam: {
                white: `${prefix}/jb2a_patreon/Library/Generic/Smoke/Fumes_02_Steam_White_400x400.webm`
            },
            toxic: {
                green: `${prefix}/jb2a_patreon/Library/Generic/Smoke/Fumes_03_Toxic_Green_400x400.webm`
            }
        },
        patreonDatabase.glaive = {
            melee: {
                _template: 'melee',
                '01': {
                    dark_orangepurple: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Glaive01_01_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Glaive01_02_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Glaive01_03_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Glaive01_04_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Glaive01_05_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Glaive01_06_Dark_OrangePurple_800x600.webm`
                    ],
                    blue: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Glaive01_01_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Glaive01_02_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Glaive01_03_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Glaive01_04_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Glaive01_05_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Glaive01_06_Regular_Blue_800x600.webm`
                    ],
                    orange: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Glaive01_01_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Glaive01_02_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Glaive01_03_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Glaive01_04_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Glaive01_05_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Glaive01_06_Regular_Orange_800x600.webm`
                    ],
                    purple: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Glaive01_01_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Glaive01_02_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Glaive01_03_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Glaive01_04_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Glaive01_05_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Glaive01_06_Regular_Purple_800x600.webm`
                    ],
                    white: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Glaive01_01_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Glaive01_02_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Glaive01_03_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Glaive01_04_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Glaive01_05_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Glaive01_06_Regular_White_800x600.webm`
                    ]
                },
                '02': {
                    dark_orangepurple: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Glaive02_01_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Glaive02_02_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Glaive02_03_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Glaive02_04_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Glaive02_05_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Glaive02_06_Dark_OrangePurple_800x600.webm`
                    ],
                    blue: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Glaive02_01_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Glaive02_02_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Glaive02_03_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Glaive02_04_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Glaive02_05_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Glaive02_06_Regular_Blue_800x600.webm`
                    ],
                    orange: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Glaive02_01_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Glaive02_02_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Glaive02_03_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Glaive02_04_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Glaive02_05_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Glaive02_06_Regular_Orange_800x600.webm`
                    ],
                    purple: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Glaive02_01_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Glaive02_02_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Glaive02_03_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Glaive02_04_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Glaive02_05_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Glaive02_06_Regular_Purple_800x600.webm`
                    ],
                    white: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Glaive02_01_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Glaive02_02_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Glaive02_03_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Glaive02_04_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Glaive02_05_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Glaive02_06_Regular_White_800x600.webm`
                    ]
                },
            }
        },
        patreonDatabase.glint = {
            blue: {
                few: [
                    `${prefix}/jb2a_patreon/Library/Generic/Item/GlintFew01_01_Regular_Blue_200x200.webm`,
                    `${prefix}/jb2a_patreon/Library/Generic/Item/GlintFew01_02_Regular_Blue_200x200.webm`,
                    `${prefix}/jb2a_patreon/Library/Generic/Item/GlintFew01_03_Regular_Blue_200x200.webm`,
                    `${prefix}/jb2a_patreon/Library/Generic/Item/GlintFew01_04_Regular_Blue_200x200.webm`,
                ],
                many: [
                    `${prefix}/jb2a_patreon/Library/Generic/Item/GlintMany01_01_Regular_Blue_200x200.webm`,
                    `${prefix}/jb2a_patreon/Library/Generic/Item/GlintMany01_02_Regular_Blue_200x200.webm`,
                    `${prefix}/jb2a_patreon/Library/Generic/Item/GlintMany01_03_Regular_Blue_200x200.webm`,
                    `${prefix}/jb2a_patreon/Library/Generic/Item/GlintMany01_04_Regular_Blue_200x200.webm`,
                ]
            },
            purple: {
                few: [
                    `${prefix}/jb2a_patreon/Library/Generic/Item/GlintFew01_01_Regular_Purple_200x200.webm`,
                    `${prefix}/jb2a_patreon/Library/Generic/Item/GlintFew01_02_Regular_Purple_200x200.webm`,
                    `${prefix}/jb2a_patreon/Library/Generic/Item/GlintFew01_03_Regular_Purple_200x200.webm`,
                    `${prefix}/jb2a_patreon/Library/Generic/Item/GlintFew01_04_Regular_Purple_200x200.webm`,
                ],
                many: [
                    `${prefix}/jb2a_patreon/Library/Generic/Item/GlintMany01_01_Regular_Purple_200x200.webm`,
                    `${prefix}/jb2a_patreon/Library/Generic/Item/GlintMany01_02_Regular_Purple_200x200.webm`,
                    `${prefix}/jb2a_patreon/Library/Generic/Item/GlintMany01_03_Regular_Purple_200x200.webm`,
                    `${prefix}/jb2a_patreon/Library/Generic/Item/GlintMany01_04_Regular_Purple_200x200.webm`,
                ]
            },
            yellow: {
                few: [
                    `${prefix}/jb2a_patreon/Library/Generic/Item/GlintFew01_01_Regular_Yellow_200x200.webm`,
                    `${prefix}/jb2a_patreon/Library/Generic/Item/GlintFew01_02_Regular_Yellow_200x200.webm`,
                    `${prefix}/jb2a_patreon/Library/Generic/Item/GlintFew01_03_Regular_Yellow_200x200.webm`,
                    `${prefix}/jb2a_patreon/Library/Generic/Item/GlintFew01_04_Regular_Yellow_200x200.webm`,
                ],
                many: [
                    `${prefix}/jb2a_patreon/Library/Generic/Item/GlintMany01_01_Regular_Yellow_200x200.webm`,
                    `${prefix}/jb2a_patreon/Library/Generic/Item/GlintMany01_02_Regular_Yellow_200x200.webm`,
                    `${prefix}/jb2a_patreon/Library/Generic/Item/GlintMany01_03_Regular_Yellow_200x200.webm`,
                    `${prefix}/jb2a_patreon/Library/Generic/Item/GlintMany01_04_Regular_Yellow_200x200.webm`,
                ]
            }
        },
        patreonDatabase.grease = {
            _template: 'large',
            dark_brown: {
                loop: `${prefix}/jb2a_patreon/Library/1st_Level/Grease/Grease_Dark_Brown_600x600.webm`
            },
            dark_green: {
                loop: `${prefix}/jb2a_patreon/Library/1st_Level/Grease/Grease_Dark_Green_600x600.webm`
            },
            dark_grey: {
                loop: `${prefix}/jb2a_patreon/Library/1st_Level/Grease/Grease_Dark_Grey_600x600.webm`
            },
            dark_purple: {
                loop: `${prefix}/jb2a_patreon/Library/1st_Level/Grease/Grease_Dark_Purple_600x600.webm`
            },
            dark_red: {
                loop: `${prefix}/jb2a_patreon/Library/1st_Level/Grease/Grease_Dark_Red_600x600.webm`
            }

        },
        patreonDatabase.greataxe = {
            melee: {
                _template: 'melee',
                fire: {
                    dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/GreatAxe01_Fire_Dark_Purple_800x600.webm`,
                    blue: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/GreatAxe01_Fire_Regular_Blue_800x600.webm`,
                    green: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/GreatAxe01_Fire_Regular_Green_800x600.webm`,
                    orange: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/GreatAxe01_Fire_Regular_Orange_800x600.webm`,
                    pink: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/GreatAxe01_Fire_Regular_Pink_800x600.webm`,
                    red: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/GreatAxe01_Fire_Regular_Red_800x600.webm`,
                    yellow: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/GreatAxe01_Fire_Regular_Yellow_800x600.webm`
                },
                standard: {
                    white: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/GreatAxe01_01_Regular_White_800x600.webm`
                }
            },
            throw: {
                _template: 'ranged',
                blue: {
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/GreatAxe01_01_Regular_Blue_15ft_1000x600.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/GreatAxe01_01_Regular_Blue_30ft_1600x600.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/GreatAxe01_01_Regular_Blue_60ft_2800x600.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/GreatAxe01_01_Regular_Blue_90ft_4000x600.webm`
                },
                white: {
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/GreatAxe01_01_Regular_White_15ft_1000x600.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/GreatAxe01_01_Regular_White_30ft_1600x600.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/GreatAxe01_01_Regular_White_60ft_2800x600.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/GreatAxe01_01_Regular_White_90ft_4000x600.webm`
                }
            }
        },
        patreonDatabase.greatclub = {
            _template: 'melee',
            fire: {
                dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/GreatClub01_Fire_Dark_Purple_800x600.webm`,
                blue: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/GreatClub01_Fire_Regular_Blue_800x600.webm`,
                green: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/GreatClub01_Fire_Regular_Green_800x600.webm`,
                orange: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/GreatClub01_Fire_Regular_Orange_800x600.webm`,
                pink: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/GreatClub01_Fire_Regular_Pink_800x600.webm`,
                red: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/GreatClub01_Fire_Regular_Red_800x600.webm`,
                yellow: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/GreatClub01_Fire_Regular_Yellow_800x600.webm`
            },
            standard: {
                white: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/GreatClub01_01_Regular_White_800x600.webm`
            }
        },
        patreonDatabase.greatsword = {
            melee: {
                _template: 'melee',
                fire: {
                    dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/GreatSword01_Fire_Dark_Purple_800x600.webm`,
                    black: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/GreatSword01_Fire_Regular_Black_800x600.webm`,
                    blue: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/GreatSword01_Fire_Regular_Blue_800x600.webm`,
                    green: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/GreatSword01_Fire_Regular_Green_800x600.webm`,
                    orange: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/GreatSword01_Fire_Regular_Orange_800x600.webm`,
                    pink: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/GreatSword01_Fire_Regular_Pink_800x600.webm`,
                    red: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/GreatSword01_Fire_Regular_Red_800x600.webm`,
                    yellow: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/GreatSword01_Fire_Regular_Yellow_800x600.webm`
                },
                standard: {
                    white: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/GreatSword01_01_Regular_White_800x600.webm`
                }
            },
            return: {
                _template: 'ranged',
                '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/GreatSword01_01_Regular_White_Return_15ft_1000x600.webm`,
                '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/GreatSword01_01_Regular_White_Return_30ft_1600x600.webm`,
                '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/GreatSword01_01_Regular_White_Return_60ft_2800x600.webm`,
                '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/GreatSword01_01_Regular_White_Return_90ft_4000x600.webm`
            },
            throw: {
                _template: 'ranged',
                '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/GreatSword01_01_Regular_White_15ft_1000x600.webm`,
                '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/GreatSword01_01_Regular_White_30ft_1600x600.webm`,
                '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/GreatSword01_01_Regular_White_60ft_2800x600.webm`,
                '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/GreatSword01_01_Regular_White_90ft_4000x600.webm`
            }
        },
        patreonDatabase.ground_cracks = {
            blue: {
                '01': `${prefix}/jb2a_patreon/Library/Generic/Fire/GroundCrackLoop_01_Regular_Blue_600x600.webm`,
                '02': `${prefix}/jb2a_patreon/Library/Generic/Fire/GroundCrackLoop_02_Regular_Blue_600x600.webm`,
                '03': `${prefix}/jb2a_patreon/Library/Generic/Fire/GroundCrackLoop_03_Regular_Blue_600x600.webm`
            },
            green: {
                '01': `${prefix}/jb2a_patreon/Library/Generic/Fire/GroundCrackLoop_01_Regular_Green_600x600.webm`,
                '02': `${prefix}/jb2a_patreon/Library/Generic/Fire/GroundCrackLoop_02_Regular_Green_600x600.webm`,
                '03': `${prefix}/jb2a_patreon/Library/Generic/Fire/GroundCrackLoop_03_Regular_Green_600x600.webm`
            },
            orange: {
                '01': `${prefix}/jb2a_patreon/Library/Generic/Fire/GroundCrackLoop_01_Regular_Orange_600x600.webm`,
                '02': `${prefix}/jb2a_patreon/Library/Generic/Fire/GroundCrackLoop_02_Regular_Orange_600x600.webm`,
                '03': `${prefix}/jb2a_patreon/Library/Generic/Fire/GroundCrackLoop_03_Regular_Orange_600x600.webm`
            },
            purple: {
                '01': `${prefix}/jb2a_patreon/Library/Generic/Fire/GroundCrackLoop_01_Regular_Purple_600x600.webm`,
                '02': `${prefix}/jb2a_patreon/Library/Generic/Fire/GroundCrackLoop_02_Regular_Purple_600x600.webm`,
                '03': `${prefix}/jb2a_patreon/Library/Generic/Fire/GroundCrackLoop_03_Regular_Purple_600x600.webm`
            },
            '01': {
                blue: `${prefix}/jb2a_patreon/Library/Generic/Fire/GroundCrackLoop_01_Regular_Blue_600x600.webm`,
                green: `${prefix}/jb2a_patreon/Library/Generic/Fire/GroundCrackLoop_01_Regular_Green_600x600.webm`,
                orange: `${prefix}/jb2a_patreon/Library/Generic/Fire/GroundCrackLoop_01_Regular_Orange_600x600.webm`,
                purple: `${prefix}/jb2a_patreon/Library/Generic/Fire/GroundCrackLoop_01_Regular_Purple_600x600.webm`
            },
            '02': {
                blue: `${prefix}/jb2a_patreon/Library/Generic/Fire/GroundCrackLoop_02_Regular_Blue_600x600.webm`,
                green: `${prefix}/jb2a_patreon/Library/Generic/Fire/GroundCrackLoop_02_Regular_Green_600x600.webm`,
                orange: `${prefix}/jb2a_patreon/Library/Generic/Fire/GroundCrackLoop_02_Regular_Orange_600x600.webm`,
                purple: `${prefix}/jb2a_patreon/Library/Generic/Fire/GroundCrackLoop_02_Regular_Purple_600x600.webm`
            },
            '03': {
                blue: `${prefix}/jb2a_patreon/Library/Generic/Fire/GroundCrackLoop_03_Regular_Blue_600x600.webm`,
                green: `${prefix}/jb2a_patreon/Library/Generic/Fire/GroundCrackLoop_03_Regular_Green_600x600.webm`,
                orange: `${prefix}/jb2a_patreon/Library/Generic/Fire/GroundCrackLoop_03_Regular_Orange_600x600.webm`,
                purple: `${prefix}/jb2a_patreon/Library/Generic/Fire/GroundCrackLoop_03_Regular_Purple_600x600.webm`
            }
        },
        patreonDatabase.guiding_bolt = {
            _template: 'ranged',
            '01': {
                blueyellow: {
                    '05ft': `${prefix}/jb2a_patreon/Library/1st_Level/Guiding_Bolt/GuidingBolt_01_Regular_BlueYellow_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/1st_Level/Guiding_Bolt/GuidingBolt_01_Regular_BlueYellow_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/1st_Level/Guiding_Bolt/GuidingBolt_01_Regular_BlueYellow_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/1st_Level/Guiding_Bolt/GuidingBolt_01_Regular_BlueYellow_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/1st_Level/Guiding_Bolt/GuidingBolt_01_Regular_BlueYellow_90ft_4000x400.webm`
                },
                dark_bluewhite: {
                    '05ft': `${prefix}/jb2a_patreon/Library/1st_Level/Guiding_Bolt/GuidingBolt_01_Dark_BlueWhite_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/1st_Level/Guiding_Bolt/GuidingBolt_01_Dark_BlueWhite_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/1st_Level/Guiding_Bolt/GuidingBolt_01_Dark_BlueWhite_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/1st_Level/Guiding_Bolt/GuidingBolt_01_Dark_BlueWhite_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/1st_Level/Guiding_Bolt/GuidingBolt_01_Dark_BlueWhite_90ft_4000x400.webm`
                },
                greenorange: {
                    '05ft': `${prefix}/jb2a_patreon/Library/1st_Level/Guiding_Bolt/GuidingBolt_01_Regular_GreenOrange_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/1st_Level/Guiding_Bolt/GuidingBolt_01_Regular_GreenOrange_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/1st_Level/Guiding_Bolt/GuidingBolt_01_Regular_GreenOrange_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/1st_Level/Guiding_Bolt/GuidingBolt_01_Regular_GreenOrange_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/1st_Level/Guiding_Bolt/GuidingBolt_01_Regular_GreenOrange_90ft_4000x400.webm`
                },
                pink: {
                    '05ft': `${prefix}/jb2a_patreon/Library/1st_Level/Guiding_Bolt/GuidingBolt_01_Regular_Pink_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/1st_Level/Guiding_Bolt/GuidingBolt_01_Regular_Pink_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/1st_Level/Guiding_Bolt/GuidingBolt_01_Regular_Pink_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/1st_Level/Guiding_Bolt/GuidingBolt_01_Regular_Pink_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/1st_Level/Guiding_Bolt/GuidingBolt_01_Regular_Pink_90ft_4000x400.webm`
                },
                purplepink: {
                    '05ft': `${prefix}/jb2a_patreon/Library/1st_Level/Guiding_Bolt/GuidingBolt_01_Regular_PurplePink_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/1st_Level/Guiding_Bolt/GuidingBolt_01_Regular_PurplePink_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/1st_Level/Guiding_Bolt/GuidingBolt_01_Regular_PurplePink_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/1st_Level/Guiding_Bolt/GuidingBolt_01_Regular_PurplePink_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/1st_Level/Guiding_Bolt/GuidingBolt_01_Regular_PurplePink_90ft_4000x400.webm`
                },
                red: {
                    '05ft': `${prefix}/jb2a_patreon/Library/1st_Level/Guiding_Bolt/GuidingBolt_01_Regular_Red_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/1st_Level/Guiding_Bolt/GuidingBolt_01_Regular_Red_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/1st_Level/Guiding_Bolt/GuidingBolt_01_Regular_Red_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/1st_Level/Guiding_Bolt/GuidingBolt_01_Regular_Red_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/1st_Level/Guiding_Bolt/GuidingBolt_01_Regular_Red_90ft_4000x400.webm`
                }
            },
            '02': {
                blueyellow: {
                    '05ft': `${prefix}/jb2a_patreon/Library/1st_Level/Guiding_Bolt/GuidingBolt_02_Regular_BlueYellow_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/1st_Level/Guiding_Bolt/GuidingBolt_02_Regular_BlueYellow_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/1st_Level/Guiding_Bolt/GuidingBolt_02_Regular_BlueYellow_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/1st_Level/Guiding_Bolt/GuidingBolt_02_Regular_BlueYellow_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/1st_Level/Guiding_Bolt/GuidingBolt_02_Regular_BlueYellow_90ft_4000x400.webm`
                },
                dark_bluewhite: {
                    '05ft': `${prefix}/jb2a_patreon/Library/1st_Level/Guiding_Bolt/GuidingBolt_02_Dark_BlueWhite_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/1st_Level/Guiding_Bolt/GuidingBolt_02_Dark_BlueWhite_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/1st_Level/Guiding_Bolt/GuidingBolt_02_Dark_BlueWhite_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/1st_Level/Guiding_Bolt/GuidingBolt_02_Dark_BlueWhite_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/1st_Level/Guiding_Bolt/GuidingBolt_02_Dark_BlueWhite_90ft_4000x400.webm`
                },
                greenorange: {
                    '05ft': `${prefix}/jb2a_patreon/Library/1st_Level/Guiding_Bolt/GuidingBolt_02_Regular_GreenOrange_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/1st_Level/Guiding_Bolt/GuidingBolt_02_Regular_GreenOrange_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/1st_Level/Guiding_Bolt/GuidingBolt_02_Regular_GreenOrange_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/1st_Level/Guiding_Bolt/GuidingBolt_02_Regular_GreenOrange_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/1st_Level/Guiding_Bolt/GuidingBolt_02_Regular_GreenOrange_90ft_4000x400.webm`
                },
                pink: {
                    '05ft': `${prefix}/jb2a_patreon/Library/1st_Level/Guiding_Bolt/GuidingBolt_02_Regular_Pink_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/1st_Level/Guiding_Bolt/GuidingBolt_02_Regular_Pink_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/1st_Level/Guiding_Bolt/GuidingBolt_02_Regular_Pink_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/1st_Level/Guiding_Bolt/GuidingBolt_02_Regular_Pink_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/1st_Level/Guiding_Bolt/GuidingBolt_02_Regular_Pink_90ft_4000x400.webm`
                },
                purplepink: {
                    '05ft': `${prefix}/jb2a_patreon/Library/1st_Level/Guiding_Bolt/GuidingBolt_02_Regular_PurplePink_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/1st_Level/Guiding_Bolt/GuidingBolt_02_Regular_PurplePink_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/1st_Level/Guiding_Bolt/GuidingBolt_02_Regular_PurplePink_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/1st_Level/Guiding_Bolt/GuidingBolt_02_Regular_PurplePink_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/1st_Level/Guiding_Bolt/GuidingBolt_02_Regular_PurplePink_90ft_4000x400.webm`
                },
                red: {
                    '05ft': `${prefix}/jb2a_patreon/Library/1st_Level/Guiding_Bolt/GuidingBolt_02_Regular_Red_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/1st_Level/Guiding_Bolt/GuidingBolt_02_Regular_Red_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/1st_Level/Guiding_Bolt/GuidingBolt_02_Regular_Red_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/1st_Level/Guiding_Bolt/GuidingBolt_02_Regular_Red_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/1st_Level/Guiding_Bolt/GuidingBolt_02_Regular_Red_90ft_4000x400.webm`
                }
            }
        },
        patreonDatabase.gust_of_wind = {
            _template: 'ray',
            default: `${prefix}/jb2a_patreon/Library/2nd_Level/Gust_Of_Wind/GustOfWind_01_White_1200x200.webm`,
            veryfast: `${prefix}/jb2a_patreon/Library/2nd_Level/Gust_Of_Wind/GustOfWind_01_White_VeryFast_1200x200.webm`
        },
        patreonDatabase.halberd = {
            melee: {
                _template: 'melee',
                '01': {
                    dark_orangepurple: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Halberd01_01_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Halberd01_02_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Halberd01_03_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Halberd01_04_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Halberd01_05_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Halberd01_06_Dark_OrangePurple_800x600.webm`
                    ],
                    blue: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Halberd01_01_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Halberd01_02_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Halberd01_03_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Halberd01_04_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Halberd01_05_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Halberd01_06_Regular_Blue_800x600.webm`
                    ],
                    orange: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Halberd01_01_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Halberd01_02_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Halberd01_03_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Halberd01_04_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Halberd01_05_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Halberd01_06_Regular_Orange_800x600.webm`
                    ],
                    purple: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Halberd01_01_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Halberd01_02_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Halberd01_03_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Halberd01_04_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Halberd01_05_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Halberd01_06_Regular_Purple_800x600.webm`
                    ],
                    white: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Halberd01_01_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Halberd01_02_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Halberd01_03_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Halberd01_04_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Halberd01_05_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Halberd01_06_Regular_White_800x600.webm`
                    ]
                }
            }
        },

        patreonDatabase.hammer = {
            melee: {
                _template: 'melee',
                '01': {
                    dark_orangepurple: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Hammer01_01_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Hammer01_02_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Hammer01_03_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Hammer01_04_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Hammer01_05_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Hammer01_06_Dark_OrangePurple_800x600.webm`
                    ],
                    blue: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Hammer01_01_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Hammer01_02_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Hammer01_03_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Hammer01_04_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Hammer01_05_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Hammer01_06_Regular_Blue_800x600.webm`
                    ],
                    orange: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Hammer01_01_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Hammer01_02_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Hammer01_03_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Hammer01_04_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Hammer01_05_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Hammer01_06_Regular_Orange_800x600.webm`
                    ],
                    purple: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Hammer01_01_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Hammer01_02_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Hammer01_03_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Hammer01_04_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Hammer01_05_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Hammer01_06_Regular_Purple_800x600.webm`
                    ],
                    white: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Hammer01_01_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Hammer01_02_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Hammer01_03_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Hammer01_04_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Hammer01_05_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Hammer01_06_Regular_White_800x600.webm`
                    ],
                    yellow: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Hammer01_01_Regular_Yellow_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Hammer01_02_Regular_Yellow_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Hammer01_03_Regular_Yellow_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Hammer01_04_Regular_Yellow_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Hammer01_05_Regular_Yellow_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Hammer01_06_Regular_Yellow_800x600.webm`
                    ]
                }
            },
            return: {
                _template: 'ranged',
                '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Hammer01_01_Regular_White_Return_15ft_1000x400.webm`,
                '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Hammer01_01_Regular_White_Return_30ft_1600x400.webm`,
                '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Hammer01_01_Regular_White_Return_60ft_2800x400.webm`,
                '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Hammer01_01_Regular_White_Return_90ft_4000x400.webm`
            },
            throw: {
                _template: 'ranged',
                '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Hammer01_01_Regular_White_15ft_1000x400.webm`,
                '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Hammer01_01_Regular_White_30ft_1600x400.webm`,
                '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Hammer01_01_Regular_White_60ft_2800x400.webm`,
                '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Hammer01_01_Regular_White_90ft_4000x400.webm`
            }
        },
        patreonDatabase.handaxe = {
            melee: {
                _template: 'melee',
                fire: {
                    dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/HandAxe02_Fire_Dark_Purple_800x600.webm`,
                    blue: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/HandAxe02_Fire_Regular_Blue_800x600.webm`,
                    green: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/HandAxe02_Fire_Regular_Green_800x600.webm`,
                    orange: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/HandAxe02_Fire_Regular_Orange_800x600.webm`,
                    pink: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/HandAxe02_Fire_Regular_Pink_800x600.webm`,
                    red: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/HandAxe02_Fire_Regular_Red_800x600.webm`,
                    yellow: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/HandAxe02_Fire_Regular_Yellow_800x600.webm`
                },
                standard: {
                    white: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/HandAxe02_01_Regular_White_800x600.webm`
                }
            },
            throw: {
                _template: 'ranged',
                '01': {
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/HandAxe01_01_Regular_White_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/HandAxe01_01_Regular_White_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/HandAxe01_01_Regular_White_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/HandAxe01_01_Regular_White_90ft_4000x400.webm`
                },
                '02': {
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/HandAxe02_01_Regular_White_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/HandAxe02_01_Regular_White_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/HandAxe02_01_Regular_White_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/HandAxe02_01_Regular_White_90ft_4000x400.webm`
                }
            }
        },
        patreonDatabase.healing_generic = {
            '200px': {
                blue: `${prefix}/jb2a_patreon/Library/Generic/Healing/HealingAbility_01_Blue_200x200.webm`,
                green: `${prefix}/jb2a_patreon/Library/Generic/Healing/HealingAbility_01_Green_200x200.webm`,
                purple: `${prefix}/jb2a_patreon/Library/Generic/Healing/HealingAbility_01_Purple_200x200.webm`,
                red: `${prefix}/jb2a_patreon/Library/Generic/Healing/HealingAbility_01_Red_200x200.webm`,
                yellow: `${prefix}/jb2a_patreon/Library/Generic/Healing/HealingAbility_01_Yellow_200x200.webm`
            },
            '400px': {
                blue: `${prefix}/jb2a_patreon/Library/Generic/Healing/HealingAbility_01_Blue_400x400.webm`,
                green: `${prefix}/jb2a_patreon/Library/Generic/Healing/HealingAbility_01_Green_400x400.webm`,
                purple: `${prefix}/jb2a_patreon/Library/Generic/Healing/HealingAbility_01_Purple_400x400.webm`,
                red: `${prefix}/jb2a_patreon/Library/Generic/Healing/HealingAbility_01_Red_400x400.webm`,
                yellow: `${prefix}/jb2a_patreon/Library/Generic/Healing/HealingAbility_01_Yellow_400x400.webm`
            },
            burst: {
                bluewhite: `${prefix}/jb2a_patreon/Library/Generic/Healing/HealingAbility_02_Regular_BlueWhite_Burst_600x600.webm`,
                greenorange: `${prefix}/jb2a_patreon/Library/Generic/Healing/HealingAbility_02_Regular_GreenOrange_Burst_600x600.webm`,
                purplepink: `${prefix}/jb2a_patreon/Library/Generic/Healing/HealingAbility_02_Regular_PurplePink_Burst_600x600.webm`,
                tealyellow: `${prefix}/jb2a_patreon/Library/Generic/Healing/HealingAbility_02_Regular_TealYellow_Burst_600x600.webm`
            },
            loop: {
                bluewhite: `${prefix}/jb2a_patreon/Library/Generic/Healing/HealingAbility_02_Regular_BlueWhite_Loop_600x600.webm`,
                greenorange: `${prefix}/jb2a_patreon/Library/Generic/Healing/HealingAbility_02_Regular_GreenOrange_Loop_600x600.webm`,
                purplepink: `${prefix}/jb2a_patreon/Library/Generic/Healing/HealingAbility_02_Regular_PurplePink_Loop_600x600.webm`,
                tealyellow: `${prefix}/jb2a_patreon/Library/Generic/Healing/HealingAbility_02_Regular_TealYellow_Loop_600x600.webm`
            }
        },
        patreonDatabase.hunters_mark = {
            loop: {
                '01': {
                    blue: `${prefix}/jb2a_patreon/Library/1st_Level/Hunters_Mark/HuntersMark_01_Regular_Blue_Loop_200x200.webm`,
                    green: `${prefix}/jb2a_patreon/Library/1st_Level/Hunters_Mark/HuntersMark_01_Regular_Green_Loop_200x200.webm`,
                    purple: `${prefix}/jb2a_patreon/Library/1st_Level/Hunters_Mark/HuntersMark_01_Regular_Purple_Loop_200x200.webm`
                },
                '02': {
                    blue: `${prefix}/jb2a_patreon/Library/1st_Level/Hunters_Mark/HuntersMark_02_Regular_Blue_Loop_200x200.webm`,
                    green: `${prefix}/jb2a_patreon/Library/1st_Level/Hunters_Mark/HuntersMark_02_Regular_Green_Loop_200x200.webm`,
                    purple: `${prefix}/jb2a_patreon/Library/1st_Level/Hunters_Mark/HuntersMark_02_Regular_Purple_Loop_200x200.webm`
                }
            },
            pulse: {
                '01': {
                    blue: `${prefix}/jb2a_patreon/Library/1st_Level/Hunters_Mark/HuntersMark_01_Regular_Blue_Pulse_200x200.webm`,
                    green: `${prefix}/jb2a_patreon/Library/1st_Level/Hunters_Mark/HuntersMark_01_Regular_Green_Pulse_200x200.webm`,
                    purple: `${prefix}/jb2a_patreon/Library/1st_Level/Hunters_Mark/HuntersMark_01_Regular_Purple_Pulse_200x200.webm`
                },
                '02': {
                    blue: `${prefix}/jb2a_patreon/Library/1st_Level/Hunters_Mark/HuntersMark_02_Regular_Blue_Pulse_200x200.webm`,
                    green: `${prefix}/jb2a_patreon/Library/1st_Level/Hunters_Mark/HuntersMark_02_Regular_Green_Pulse_200x200.webm`,
                    purple: `${prefix}/jb2a_patreon/Library/1st_Level/Hunters_Mark/HuntersMark_02_Regular_Purple_Pulse_200x200.webm`
                }
            }
        },
        patreonDatabase.ice_spikes = {
            radial: {
                burst: {
                    blue: `${prefix}/jb2a_patreon/Library/Generic/Ice/IceSpikesRadialBurst_01_Regular_Blue_1000x1000.webm`,
                    red: `${prefix}/jb2a_patreon/Library/Generic/Ice/IceSpikesRadialBurst_01_Regular_Red_1000x1000.webm`,
                    white: `${prefix}/jb2a_patreon/Library/Generic/Ice/IceSpikesRadialBurst_01_Regular_White_1000x1000.webm`
                },
                loop: {
                    blue: `${prefix}/jb2a_patreon/Library/Generic/Ice/IceSpikesRadialLoop_01_Regular_Blue_1000x1000.webm`,
                    red: `${prefix}/jb2a_patreon/Library/Generic/Ice/IceSpikesRadialLoop_01_Regular_Red_1000x1000.webm`,
                    white: `${prefix}/jb2a_patreon/Library/Generic/Ice/IceSpikesRadialLoop_01_Regular_White_1000x1000.webm`
                }
            },
            wall: {
                burst: {
                    blue: `${prefix}/jb2a_patreon/Library/Generic/Ice/IceSpikesWallBurst_01_Regular_Blue_600x1000.webm`,
                    red: `${prefix}/jb2a_patreon/Library/Generic/Ice/IceSpikesWallBurst_01_Regular_Red_600x1000.webm`,
                    white: `${prefix}/jb2a_patreon/Library/Generic/Ice/IceSpikesWallBurst_01_Regular_White_600x1000.webm`
                },
                loop: {
                    blue: `${prefix}/jb2a_patreon/Library/Generic/Ice/IceSpikesWallLoop_01_Regular_Blue_600x1000.webm`,
                    red: `${prefix}/jb2a_patreon/Library/Generic/Ice/IceSpikesWallLoop_01_Regular_Red_600x1000.webm`,
                    white: `${prefix}/jb2a_patreon/Library/Generic/Ice/IceSpikesWallLoop_01_Regular_White_600x1000.webm`
                }
            }
        },
        patreonDatabase.icon = {
            drop: {
                dark_green: `${prefix}/jb2a_patreon/Library/Generic/UI/IconDrop_01_Dark_Green_200x200.webm`,
                red: `${prefix}/jb2a_patreon/Library/Generic/UI/IconDrop_01_Regular_Red_200x200.webm`,
            },
            fear: {
                dark_orange: `${prefix}/jb2a_patreon/Library/Generic/UI/IconFear_01_Dark_Orange_200x200.webm`,
                dark_purple: `${prefix}/jb2a_patreon/Library/Generic/UI/IconFear_01_Dark_Purple_200x200.webm`,
                orange: `${prefix}/jb2a_patreon/Library/Generic/UI/IconFear_01_Regular_Orange_200x200.webm`,
            },
            heart: {
                dark_red: `${prefix}/jb2a_patreon/Library/Generic/UI/IconHeart_01_Dark_Red_200x200.webm`,
                pink: `${prefix}/jb2a_patreon/Library/Generic/UI/IconHeart_01_Regular_Pink_200x200.webm`,
                teal: `${prefix}/jb2a_patreon/Library/Generic/UI/IconHeart_01_Regular_Teal_200x200.webm`,
            },
            horror: {
                dark_teal: `${prefix}/jb2a_patreon/Library/Generic/UI/IconHorror_01_Dark_Teal_200x200.webm`,
                purple: `${prefix}/jb2a_patreon/Library/Generic/UI/IconHorror_01_Regular_Purple_200x200.webm`,
                teal: `${prefix}/jb2a_patreon/Library/Generic/UI/IconHorror_01_Regular_Teal_200x200.webm`,
            },
            music_note: {
                dark_red: `${prefix}/jb2a_patreon/Library/Generic/UI/IconMusicNote_01_Dark_Red_200x200.webm`,
                blue: `${prefix}/jb2a_patreon/Library/Generic/UI/IconMusicNote_01_Regular_Blue_200x200.webm`,
                purple: `${prefix}/jb2a_patreon/Library/Generic/UI/IconMusicNote_01_Regular_Purple_200x200.webm`
            },
            poison: {
                dark_green: `${prefix}/jb2a_patreon/Library/Generic/UI/IconPoison_01_Dark_Green_200x200.webm`,
                purple: `${prefix}/jb2a_patreon/Library/Generic/UI/IconPoison_01_Regular_Purple_200x200.webm`,
            },
            runes: {
                dark_black: `${prefix}/jb2a_patreon/Library/Generic/UI/IconRunes_01_Dark_Black_200x200.webm`,
                dark_red: `${prefix}/jb2a_patreon/Library/Generic/UI/IconRunes_01_Dark_Red_200x200.webm`,
                blue: `${prefix}/jb2a_patreon/Library/Generic/UI/IconRunes_01_Regular_Blue_200x200.webm`,
                green02: `${prefix}/jb2a_patreon/Library/Generic/UI/IconRunes_01_Regular_Green02_200x200.webm`,
                orange: `${prefix}/jb2a_patreon/Library/Generic/UI/IconRunes_01_Regular_Orange_200x200.webm`,
                red: `${prefix}/jb2a_patreon/Library/Generic/UI/IconRunes_01_Regular_Red_200x200.webm`,
                white: `${prefix}/jb2a_patreon/Library/Generic/UI/IconRunes_01_Regular_White_200x200.webm`,
                yellow: `${prefix}/jb2a_patreon/Library/Generic/UI/IconRunes_01_Regular_Yellow_200x200.webm`
            },
            runes02: {
                dark_black: `${prefix}/jb2a_patreon/Library/Generic/UI/IconRunes02_01_Dark_Black_200x200.webm`,
                dark_red: `${prefix}/jb2a_patreon/Library/Generic/UI/IconRunes02_01_Dark_Red_200x200.webm`,
                blue: `${prefix}/jb2a_patreon/Library/Generic/UI/IconRunes02_01_Regular_Blue_200x200.webm`,
                green02: `${prefix}/jb2a_patreon/Library/Generic/UI/IconRunes02_01_Regular_Green02_200x200.webm`,
                orange: `${prefix}/jb2a_patreon/Library/Generic/UI/IconRunes02_01_Regular_Orange_200x200.webm`,
                red: `${prefix}/jb2a_patreon/Library/Generic/UI/IconRunes02_01_Regular_Red_200x200.webm`,
                white: `${prefix}/jb2a_patreon/Library/Generic/UI/IconRunes02_01_Regular_White_200x200.webm`,
                yellow: `${prefix}/jb2a_patreon/Library/Generic/UI/IconRunes02_01_Regular_Yellow_200x200.webm`
            },
            runes03: {
                dark_black: `${prefix}/jb2a_patreon/Library/Generic/UI/IconRunes03_01_Dark_Black_200x200.webm`,
                dark_red: `${prefix}/jb2a_patreon/Library/Generic/UI/IconRunes03_01_Dark_Red_200x200.webm`,
                blue: `${prefix}/jb2a_patreon/Library/Generic/UI/IconRunes03_01_Regular_Blue_200x200.webm`,
                green02: `${prefix}/jb2a_patreon/Library/Generic/UI/IconRunes03_01_Regular_Green02_200x200.webm`,
                orange: `${prefix}/jb2a_patreon/Library/Generic/UI/IconRunes03_01_Regular_Orange_200x200.webm`,
                red: `${prefix}/jb2a_patreon/Library/Generic/UI/IconRunes03_01_Regular_Red_200x200.webm`,
                white: `${prefix}/jb2a_patreon/Library/Generic/UI/IconRunes03_01_Regular_White_200x200.webm`,
                yellow: `${prefix}/jb2a_patreon/Library/Generic/UI/IconRunes03_01_Regular_Yellow_200x200.webm`
            },
            shield: {
                dark_red: `${prefix}/jb2a_patreon/Library/Generic/UI/IconShield_01_Dark_Red_200x200.webm`,
                green: `${prefix}/jb2a_patreon/Library/Generic/UI/IconShield_01_Regular_Green_200x200.webm`,
            },
            shield_cracked: {
                dark_red: `${prefix}/jb2a_patreon/Library/Generic/UI/IconShieldCracked_01_Dark_Red_200x200.webm`,
                purple: `${prefix}/jb2a_patreon/Library/Generic/UI/IconShieldCracked_01_Regular_Purple_200x200.webm`,
            },
            skull: {
                dark_green: `${prefix}/jb2a_patreon/Library/Generic/UI/IconSkull_01_Dark_Green_200x200.webm`,
                dark_orange: `${prefix}/jb2a_patreon/Library/Generic/UI/IconSkull_01_Dark_Orange_200x200.webm`,
                purple: `${prefix}/jb2a_patreon/Library/Generic/UI/IconSkull_01_Regular_Purple_200x200.webm`,
            },
            snowflake: {
                dark_blue: `${prefix}/jb2a_patreon/Library/Generic/UI/IconSnowflake_01_Dark_Blue_200x200.webm`,
                blue: `${prefix}/jb2a_patreon/Library/Generic/UI/IconSnowflake_01_Regular_Blue_200x200.webm`,
            },
            stun: {
                dark_teal: `${prefix}/jb2a_patreon/Library/Generic/UI/IconStun_01_Dark_Teal_200x200.webm`,
                purple: `${prefix}/jb2a_patreon/Library/Generic/UI/IconStun_01_Regular_Purple_200x200.webm`,
            }
        },
        patreonDatabase.icosahedron = {
            simple: {
                blue: `${prefix}/jb2a_patreon/Library/Generic/Energy/Icosahedron_01_Regular_Blue_600x600.webm`,
                green: `${prefix}/jb2a_patreon/Library/Generic/Energy/Icosahedron_01_Regular_Green_600x600.webm`,
            },
            roll: {
                blue: `${prefix}/jb2a_patreon/Library/Generic/Energy/IcosahedronRoll_01_Regular_Blue_600x600.webm`,
                green: `${prefix}/jb2a_patreon/Library/Generic/Energy/IcosahedronRoll_01_Regular_Green_600x600.webm`,
            },
            rune: {
                above: {
                    dark_greenpurple: `${prefix}/jb2a_patreon/Library/Generic/Energy/IcosahedronRuneAbove_01_Dark_GreenPurple_600x600.webm`,
                    blueyellow: `${prefix}/jb2a_patreon/Library/Generic/Energy/IcosahedronRuneAbove_01_Regular_BlueYellow_600x600.webm`
                },
                below: {
                    dark_greenpurple: `${prefix}/jb2a_patreon/Library/Generic/Energy/IcosahedronRuneBelow_01_Dark_GreenPurple_600x600.webm`,
                    blueyellow: `${prefix}/jb2a_patreon/Library/Generic/Energy/IcosahedronRuneBelow_01_Regular_BlueYellow_600x600.webm`
                }
            },
            skull: {
                above: {
                    dark_greenpurple: `${prefix}/jb2a_patreon/Library/Generic/Energy/IcosahedronSkullAbove_01_Dark_GreenPurple_600x600.webm`
                },
                below: {
                    dark_greenpurple: `${prefix}/jb2a_patreon/Library/Generic/Energy/IcosahedronSkullBelow_01_Dark_GreenPurple_600x600.webm`
                }
            },
            star: {
                above: {
                    blueyellow: `${prefix}/jb2a_patreon/Library/Generic/Energy/IcosahedronStarAbove_01_Regular_BlueYellow_600x600.webm`
                },
                below: {
                    blueyellow: `${prefix}/jb2a_patreon/Library/Generic/Energy/IcosahedronStarBelow_01_Regular_BlueYellow_600x600.webm`
                }
            }
        },
        patreonDatabase.impact = {
            '001': {
                blue: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_01_Regular_Blue_400x400.webm`,
                dark_red: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_01_Dark_Red_400x400.webm`,
                dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_01_Dark_Purple_400x400.webm`,
                green: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_01_Regular_Green_400x400.webm`,
                orange: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_01_Regular_Orange_400x400.webm`,
                pinkpurple: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_01_Regular_PinkPurple_400x400.webm`,
                yellow: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_01_Regular_Yellow_400x400.webm`
            },
            '002': {
                blue: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_02_Regular_Blue_400x400.webm`,
                dark_red: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_02_Dark_Red_400x400.webm`,
                dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_02_Dark_Purple_400x400.webm`,
                green: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_02_Regular_Green_400x400.webm`,
                orange: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_02_Regular_Orange_400x400.webm`,
                pinkpurple: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_02_Regular_PinkPurple_400x400.webm`,
                yellow: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_02_Regular_Yellow_400x400.webm`
            },
            '003': {
                blue: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_03_Regular_Blue_400x400.webm`,
                dark_red: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_03_Dark_Red_400x400.webm`,
                dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_03_Dark_Purple_400x400.webm`,
                green: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_03_Regular_Green_400x400.webm`,
                orange: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_03_Regular_Orange_400x400.webm`,
                pinkpurple: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_03_Regular_PinkPurple_400x400.webm`,
                yellow: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_03_Regular_Yellow_400x400.webm`
            },
            '004': {
                blue: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_04_Regular_Blue_400x400.webm`,
                dark_red: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_04_Dark_Red_400x400.webm`,
                dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_04_Dark_Purple_400x400.webm`,
                green: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_04_Regular_Green_400x400.webm`,
                orange: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_04_Regular_Orange_400x400.webm`,
                pinkpurple: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_04_Regular_PinkPurple_400x400.webm`,
                yellow: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_04_Regular_Yellow_400x400.webm`
            },
            '005': {
                blue: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_05_Regular_Blue_400x400.webm`,
                blue02: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_05_Regular_Blue02_400x400.webm`,
                blue03: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_05_Regular_Blue03_400x400.webm`,
                dark_red: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_05_Dark_Red_400x400.webm`,
                dark_white: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_05_Dark_White_400x400.webm`,
                green: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_05_Regular_Green_400x400.webm`,
                green02: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_05_Regular_Green02_400x400.webm`,
                orange: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_05_Regular_Orange_400x400.webm`,
                purple: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_05_Regular_Purple_400x400.webm`,
                red: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_05_Regular_Red_400x400.webm`,
                white: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_05_Regular_White_400x400.webm`,
                yellow: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_05_Regular_Yellow_400x400.webm`
            },
            '006': {
                yellow: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_06_Regular_Yellow_400x400.webm`
            },
            '007': {
                blue: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_07_Regular_Blue_400x400.webm`,
                green: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_07_Regular_Green_400x400.webm`,
                pink: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_07_Regular_Pink_400x400.webm`,
                purple: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_07_Regular_Purple_400x400.webm`,
                orange: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_07_Regular_Orange_400x400.webm`,
                red: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_07_Regular_Red_400x400.webm`,
                white: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_07_Regular_White_400x400.webm`,
                yellow: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_07_Regular_Yellow_400x400.webm`
            },
            '008': {
                blue: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_08_Regular_Blue_400x400.webm`,
                green: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_08_Regular_Green_400x400.webm`,
                orange: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_08_Regular_Orange_400x400.webm`,
                red: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_08_Regular_Red_400x400.webm`
            },
            '009': {
                blue: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_09_Regular_Blue_400x400.webm`,
                green: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_09_Regular_Green_400x400.webm`,
                pink: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_09_Regular_Pink_400x400.webm`,
                purple: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_09_Regular_Purple_400x400.webm`,
                orange: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_09_Regular_Orange_400x400.webm`,
                white: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_09_Regular_White_400x400.webm`
            },
            '010': {
                blue: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_10_Regular_Blue_400x400.webm`,
                green: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_10_Regular_Green_400x400.webm`,
                orange: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_10_Regular_Orange_400x400.webm`,
                red: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_10_Regular_Red_400x400.webm`
            },
            '011': {
                blue: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_11_Regular_Blue_400x400.webm`,
                dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_11_Dark_Purple_400x400.webm`,
                dark_red: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_11_Dark_Red_400x400.webm`,
                green: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_11_Regular_Green_400x400.webm`,
                green02: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_11_Regular_Green02_400x400.webm`,
                orange: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_11_Regular_Orange_400x400.webm`,
                purple: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_11_Regular_Purple_400x400.webm`,
                red: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_11_Regular_Red_400x400.webm`,
                yellow: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_11_Regular_Yellow_400x400.webm`
            },
            '012': {
                blue: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_12_Regular_Blue_400x400.webm`,
                dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_12_Dark_Purple_400x400.webm`,
                dark_red: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_12_Dark_Red_400x400.webm`,
                green: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_12_Regular_Green_400x400.webm`,
                green02: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_12_Regular_Green02_400x400.webm`,
                orange: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_12_Regular_Orange_400x400.webm`,
                purple: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_12_Regular_Purple_400x400.webm`,
                red: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_12_Regular_Red_400x400.webm`,
                yellow: `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_12_Regular_Yellow_400x400.webm`
            },
            blue: [
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_01_Regular_Blue_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_02_Regular_Blue_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_03_Regular_Blue_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_04_Regular_Blue_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_05_Regular_Blue_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_05_Regular_Blue02_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_05_Regular_Blue03_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_07_Regular_Blue_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_08_Regular_Blue_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_09_Regular_Blue_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_10_Regular_Blue_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_11_Regular_Blue_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_12_Regular_Blue_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/GroundCrackImpact_01_Regular_Blue_600x600.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/GroundCrackImpact_02_Regular_Blue_600x600.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/GroundCrackImpact_03_Regular_Blue_600x600.webm`
            ],
            boulder: `${prefix}/jb2a_patreon/Library/Generic/Impact/BoulderImpact_01_Regular_White_500x500.webm`,
            ground_crack: {
                blue: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Impact/GroundCrackImpact_01_Regular_Blue_600x600.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Impact/GroundCrackImpact_02_Regular_Blue_600x600.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Impact/GroundCrackImpact_03_Regular_Blue_600x600.webm`
                },
                green: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Impact/GroundCrackImpact_01_Regular_Green_600x600.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Impact/GroundCrackImpact_02_Regular_Green_600x600.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Impact/GroundCrackImpact_03_Regular_Green_600x600.webm`,
                },
                orange: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Impact/GroundCrackImpact_01_Regular_Orange_600x600.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Impact/GroundCrackImpact_02_Regular_Orange_600x600.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Impact/GroundCrackImpact_03_Regular_Orange_600x600.webm`,
                },
                purple: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Impact/GroundCrackImpact_01_Regular_Purple_600x600.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Impact/GroundCrackImpact_02_Regular_Purple_600x600.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Impact/GroundCrackImpact_03_Regular_Purple_600x600.webm`
                },
                '01': {
                    blue: `${prefix}/jb2a_patreon/Library/Generic/Impact/GroundCrackImpact_01_Regular_Blue_600x600.webm`,
                    green: `${prefix}/jb2a_patreon/Library/Generic/Impact/GroundCrackImpact_01_Regular_Green_600x600.webm`,
                    orange: `${prefix}/jb2a_patreon/Library/Generic/Impact/GroundCrackImpact_01_Regular_Orange_600x600.webm`,
                    purple: `${prefix}/jb2a_patreon/Library/Generic/Impact/GroundCrackImpact_01_Regular_Purple_600x600.webm`
                },
                '02': {
                    blue: `${prefix}/jb2a_patreon/Library/Generic/Impact/GroundCrackImpact_02_Regular_Blue_600x600.webm`,
                    green: `${prefix}/jb2a_patreon/Library/Generic/Impact/GroundCrackImpact_02_Regular_Green_600x600.webm`,
                    orange: `${prefix}/jb2a_patreon/Library/Generic/Impact/GroundCrackImpact_02_Regular_Orange_600x600.webm`,
                    purple: `${prefix}/jb2a_patreon/Library/Generic/Impact/GroundCrackImpact_02_Regular_Purple_600x600.webm`
                },
                '03': {
                    blue: `${prefix}/jb2a_patreon/Library/Generic/Impact/GroundCrackImpact_03_Regular_Blue_600x600.webm`,
                    green: `${prefix}/jb2a_patreon/Library/Generic/Impact/GroundCrackImpact_03_Regular_Green_600x600.webm`,
                    orange: `${prefix}/jb2a_patreon/Library/Generic/Impact/GroundCrackImpact_03_Regular_Orange_600x600.webm`,
                    purple: `${prefix}/jb2a_patreon/Library/Generic/Impact/GroundCrackImpact_03_Regular_Purple_600x600.webm`
                },
                still_frame: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Impact/GroundCrackImpact_01_StillFrame.webp`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Impact/GroundCrackImpact_02_StillFrame.webp`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Impact/GroundCrackImpact_03_StillFrame.webp`
                }
            },
            dark_purple: [
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_01_Dark_Purple_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_02_Dark_Purple_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_03_Dark_Purple_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_04_Dark_Purple_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_11_Dark_Purple_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_12_Dark_Purple_400x400.webm`
            ],
            dark_red: [
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_01_Dark_Red_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_02_Dark_Red_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_03_Dark_Red_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_05_Dark_Red_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_04_Dark_Red_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_11_Dark_Red_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_12_Dark_Red_400x400.webm`,
            ],
            green: [
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_01_Regular_Green_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_02_Regular_Green_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_03_Regular_Green_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_04_Regular_Green_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_05_Regular_Green_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_05_Regular_Green02_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_07_Regular_Green_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_08_Regular_Green_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_09_Regular_Green_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_10_Regular_Green_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_11_Regular_Green_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_12_Regular_Green_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_11_Regular_Green02_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_12_Regular_Green02_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/GroundCrackImpact_01_Regular_Green_600x600.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/GroundCrackImpact_02_Regular_Green_600x600.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/GroundCrackImpact_03_Regular_Green_600x600.webm`
            ],
            orange: [
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_01_Regular_Orange_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_02_Regular_Orange_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_03_Regular_Orange_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_04_Regular_Orange_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_05_Regular_Orange_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_07_Regular_Orange_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_08_Regular_Orange_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_09_Regular_Orange_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_10_Regular_Orange_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_11_Regular_Orange_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_12_Regular_Orange_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/GroundCrackImpact_01_Regular_Orange_600x600.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/GroundCrackImpact_02_Regular_Orange_600x600.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/GroundCrackImpact_03_Regular_Orange_600x600.webm`
            ],
            pinkpurple: [
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_01_Regular_PinkPurple_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_02_Regular_PinkPurple_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_03_Regular_PinkPurple_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_04_Regular_PinkPurple_400x400.webm`
            ],
            purple: [
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_05_Regular_Purple_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_11_Regular_Purple_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_12_Regular_Purple_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/GroundCrackImpact_01_Regular_Purple_600x600.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/GroundCrackImpact_02_Regular_Purple_600x600.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/GroundCrackImpact_03_Regular_Purple_600x600.webm`
            ],
            red: [
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_05_Regular_Red_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_08_Regular_Red_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_10_Regular_Red_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_11_Regular_Red_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_12_Regular_Red_400x400.webm`
            ],
            white: [
                `${prefix}/jb2a_patreon/Library/Generic/Impact/BoulderImpact_01_Regular_White_500x500.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_05_Regular_White_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_07_Regular_White_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_09_Regular_White_400x400.webm`
            ],
            yellow: [
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_01_Regular_Yellow_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_02_Regular_Yellow_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_03_Regular_Yellow_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_04_Regular_Yellow_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_05_Regular_Yellow_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_06_Regular_Yellow_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_07_Regular_Yellow_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_11_Regular_Yellow_400x400.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Impact/Impact_12_Regular_Yellow_400x400.webm`
            ]
        },
        patreonDatabase.impact_themed = {
            heart: {
                pinkyellow: `${prefix}/jb2a_patreon/Library/Generic/Impact/ImpactHeart01_01_Regular_PinkYellow_400x400.webm`
            },
            ice_shard: {
                blue: `${prefix}/jb2a_patreon/Library/Generic/Impact/ImpactIceShard01_01_Regular_Blue_400x400.webm`
            },
            music_note: {
                greenyellow: `${prefix}/jb2a_patreon/Library/Generic/Impact/ImpactMusicNote01_01_Regular_GreenYellow_400x400.webm`
            },
            skull: {
                pinkpurple: `${prefix}/jb2a_patreon/Library/Generic/Impact/ImpactSkull01_01_Regular_PinkPurple_400x400.webm`

            }
        },
        patreonDatabase.ioun_stones = {
            '01': {
                blue: {
                    awareness: `${prefix}/jb2a_patreon/Library/Generic/Item/IounStone_01_Awarness_Blue_200x200.webm`,
                    insight: `${prefix}/jb2a_patreon/Library/Generic/Item/IounStone_01_Insight_Blue_200x200.webm`,
                    strength: `${prefix}/jb2a_patreon/Library/Generic/Item/IounStone_01_Strength_Blue_200x200.webm`
                },
                green: {
                    mastery: `${prefix}/jb2a_patreon/Library/Generic/Item/IounStone_01_Mastery_Green_200x200.webm`
                },
                pink: {
                    agility: `${prefix}/jb2a_patreon/Library/Generic/Item/IounStone_02_Agility_Pink_200x200.webm`,
                    fortitude: `${prefix}/jb2a_patreon/Library/Generic/Item/IounStone_01_Fortitude_Pink_200x200.webm`,
                    leadership: `${prefix}/jb2a_patreon/Library/Generic/Item/IounStone_01_Leadership_Pink_200x200.webm`,
                    protection: `${prefix}/jb2a_patreon/Library/Generic/Item/IounStone_01_Protection_Pink_200x200.webm`
                },
                purple: {
                    absorption: `${prefix}/jb2a_patreon/Library/Generic/Item/IounStone_01_Absorption_Purple_200x200.webm`,
                    great_absorption: `${prefix}/jb2a_patreon/Library/Generic/Item/IounStone_01_GreatAbsorption_Purple_200x200.webm`,
                    reserve: `${prefix}/jb2a_patreon/Library/Generic/Item/IounStone_01_Reserve_Purple_200x200.webm`
                },
                red: {
                    agility: `${prefix}/jb2a_patreon/Library/Generic/Item/IounStone_01_Agility_Red_200x200.webm`,
                    intellect: `${prefix}/jb2a_patreon/Library/Generic/Item/IounStone_01_Intellect_Red_200x200.webm`
                },
                white: {
                    regeneration: `${prefix}/jb2a_patreon/Library/Generic/Item/IounStone_01_Regeneration_White_200x200.webm`,
                    sustenance: `${prefix}/jb2a_patreon/Library/Generic/Item/IounStone_01_Sustenance_White_200x200.webm`
                }
            },
            '02': {
                blue: {
                    awareness: `${prefix}/jb2a_patreon/Library/Generic/Item/IounStone_02_Awarness_Blue_200x200.webm`,
                    insight: `${prefix}/jb2a_patreon/Library/Generic/Item/IounStone_02_Insight_Blue_200x200.webm`,
                    strength: `${prefix}/jb2a_patreon/Library/Generic/Item/IounStone_02_Strength_Blue_200x200.webm`
                },
                green: {
                    mastery: `${prefix}/jb2a_patreon/Library/Generic/Item/IounStone_02_Mastery_Green_200x200.webm`
                },
                pink: {
                    fortitude: `${prefix}/jb2a_patreon/Library/Generic/Item/IounStone_02_Fortitude_Pink_200x200.webm`,
                    leadership: `${prefix}/jb2a_patreon/Library/Generic/Item/IounStone_02_Leadership_Pink_200x200.webm`,
                    protection: `${prefix}/jb2a_patreon/Library/Generic/Item/IounStone_02_Protection_Pink_200x200.webm`
                },
                purple: {
                    absorption: `${prefix}/jb2a_patreon/Library/Generic/Item/IounStone_02_Absorption_Purple_200x200.webm`,
                    great_absorption: `${prefix}/jb2a_patreon/Library/Generic/Item/IounStone_02_GreatAbsorption_Purple_200x200.webm`,
                    reserve: `${prefix}/jb2a_patreon/Library/Generic/Item/IounStone_02_Reserve_Purple_200x200.webm`
                },
                red: {
                    agility: `${prefix}/jb2a_patreon/Library/Generic/Item/IounStone_02_Agility_Red_200x200.webm`,
                    intellect: `${prefix}/jb2a_patreon/Library/Generic/Item/IounStone_02_Intellect_Red_200x200.webm`
                },
                white: {
                    regeneration: `${prefix}/jb2a_patreon/Library/Generic/Item/IounStone_02_Regeneration_White_200x200.webm`,
                    sustenance: `${prefix}/jb2a_patreon/Library/Generic/Item/IounStone_02_Sustenance_White_200x200.webm`
                }
            }
        },
        patreonDatabase.javelin = {
            //[--> WILL BE REMOVED   
            throw: {
                _template: 'ranged',
                '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Javelin01_01_Regular_White_15ft_1000x400.webm`,
                '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Javelin01_01_Regular_White_30ft_1600x400.webm`,
                '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Javelin01_01_Regular_White_60ft_2800x400.webm`,
                '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Javelin01_01_Regular_White_90ft_4000x400.webm`
            },
            //<--] WILL BE REMOVED        
            '01': {
                throw: {
                    _template: 'ranged',
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Javelin01_01_Regular_White_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Javelin01_01_Regular_White_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Javelin01_01_Regular_White_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Javelin01_01_Regular_White_90ft_4000x400.webm`
                },
                return: {
                    _template: 'ranged',
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Javelin01_01_Regular_White_Return_15ft_1000x600.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Javelin01_01_Regular_White_Return_30ft_1600x600.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Javelin01_01_Regular_White_Return_60ft_2800x600.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Javelin01_01_Regular_White_Return_90ft_4000x600.webm`
                }
            }
        },
        patreonDatabase.kunai = {
            throw: {
                _template: 'ranged',
                '01': {
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Kunai01_01_Regular_White_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Kunai01_01_Regular_White_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Kunai01_01_Regular_White_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Kunai01_01_Regular_White_90ft_4000x400.webm`
                }
            }
        },
        patreonDatabase.lasershot = {
            _template: 'ranged',
            blue: {
                '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Blue_05ft_600x400.webm`,
                '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Blue_15ft_1000x400.webm`,
                '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Blue_30ft_1600x400.webm`,
                '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Blue_60ft_2800x400.webm`,
                '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Blue_90ft_4000x400.webm`
            },
            green: {
                '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Green_05ft_600x400.webm`,
                '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Green_15ft_1000x400.webm`,
                '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Green_30ft_1600x400.webm`,
                '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Green_60ft_2800x400.webm`,
                '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Green_90ft_4000x400.webm`
            },
            orange: {
                '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Orange_05ft_600x400.webm`,
                '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Orange_15ft_1000x400.webm`,
                '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Orange_30ft_1600x400.webm`,
                '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Orange_60ft_2800x400.webm`,
                '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Orange_90ft_4000x400.webm`
            },
            pink: {
                '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Pink_05ft_600x400.webm`,
                '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Pink_15ft_1000x400.webm`,
                '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Pink_30ft_1600x400.webm`,
                '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Pink_60ft_2800x400.webm`,
                '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Pink_90ft_4000x400.webm`
            },
            purple: {
                '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Purple_05ft_600x400.webm`,
                '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Purple_15ft_1000x400.webm`,
                '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Purple_30ft_1600x400.webm`,
                '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Purple_60ft_2800x400.webm`,
                '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Purple_90ft_4000x400.webm`
            },
            red: {
                '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Red_05ft_600x400.webm`,
                '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Red_15ft_1000x400.webm`,
                '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Red_30ft_1600x400.webm`,
                '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Red_60ft_2800x400.webm`,
                '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Red_90ft_4000x400.webm`
            }
        },
        patreonDatabase.lasersword = {
            melee: {
                _template: 'melee',
                blue: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/LaserSword01_01_Regular_Blue_800x600.webm`,
                blue02: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/LaserSword01_01_Regular_Blue02_800x600.webm`,
                blue03: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/LaserSword01_01_Regular_Blue03_800x600.webm`,
                dark_red: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/LaserSword01_01_Dark_Red_800x600.webm`,
                dark_white: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/LaserSword01_01_Dark_White_800x600.webm`,
                green: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/LaserSword01_01_Regular_Green_800x600.webm`,
                green02: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/LaserSword01_01_Regular_Green02_800x600.webm`,
                orange: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/LaserSword01_01_Regular_Yellow_800x600.webm`,
                purple: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/LaserSword01_01_Regular_Purple_800x600.webm`,
                red: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/LaserSword01_01_Regular_Red_800x600.webm`,
                white: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/LaserSword01_01_Regular_White_800x600.webm`,
                yellow: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/LaserSword01_01_Regular_Orange_800x600.webm`
            },
            throw: {
                _template: 'ranged',
                blue: {
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSword01_01_Regular_Blue_15ft_1000x600.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSword01_01_Regular_Blue_30ft_1600x600.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSword01_01_Regular_Blue_60ft_2800x600.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSword01_01_Regular_Blue_90ft_4000x600.webm`
                },
                blue02: {
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSword01_01_Regular_Blue02_15ft_1000x600.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSword01_01_Regular_Blue02_30ft_1600x600.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSword01_01_Regular_Blue02_60ft_2800x600.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSword01_01_Regular_Blue02_90ft_4000x600.webm`
                },
                blue03: {
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSword01_01_Regular_Blue03_15ft_1000x600.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSword01_01_Regular_Blue03_30ft_1600x600.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSword01_01_Regular_Blue03_60ft_2800x600.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSword01_01_Regular_Blue03_90ft_4000x600.webm`
                },
                dark_red: {
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSword01_01_Dark_Red_15ft_1000x600.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSword01_01_Dark_Red_30ft_1600x600.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSword01_01_Dark_Red_60ft_2800x600.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSword01_01_Dark_Red_90ft_4000x600.webm`
                },
                dark_white: {
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSword01_01_Dark_White_15ft_1000x600.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSword01_01_Dark_White_30ft_1600x600.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSword01_01_Dark_White_60ft_2800x600.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSword01_01_Dark_White_90ft_4000x600.webm`
                },
                green: {
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSword01_01_Regular_Green_15ft_1000x600.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSword01_01_Regular_Green_30ft_1600x600.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSword01_01_Regular_Green_60ft_2800x600.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSword01_01_Regular_Green_90ft_4000x600.webm`
                },
                green02: {
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSword01_01_Regular_Green02_15ft_1000x600.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSword01_01_Regular_Green02_30ft_1600x600.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSword01_01_Regular_Green02_60ft_2800x600.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSword01_01_Regular_Green02_90ft_4000x600.webm`
                },
                orange: {
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSword01_01_Regular_Orange_15ft_1000x600.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSword01_01_Regular_Orange_30ft_1600x600.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSword01_01_Regular_Orange_60ft_2800x600.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSword01_01_Regular_Orange_90ft_4000x600.webm`
                },
                purple: {
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSword01_01_Regular_Purple_15ft_1000x600.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSword01_01_Regular_Purple_30ft_1600x600.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSword01_01_Regular_Purple_60ft_2800x600.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSword01_01_Regular_Purple_90ft_4000x600.webm`
                },
                red: {
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSword01_01_Regular_Red_15ft_1000x600.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSword01_01_Regular_Red_30ft_1600x600.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSword01_01_Regular_Red_60ft_2800x600.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSword01_01_Regular_Red_90ft_4000x600.webm`
                },
                white: {
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSword01_01_Regular_White_15ft_1000x600.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSword01_01_Regular_White_30ft_1600x600.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSword01_01_Regular_White_60ft_2800x600.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSword01_01_Regular_White_90ft_4000x600.webm`
                },
                yellow: {
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSword01_01_Regular_Yellow_15ft_1000x600.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSword01_01_Regular_Yellow_30ft_1600x600.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSword01_01_Regular_Yellow_60ft_2800x600.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSword01_01_Regular_Yellow_90ft_4000x600.webm`
                }
            }
        },
        patreonDatabase.lasersword_db = {
            throw: {
                _template: 'ranged',
                blue: {
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Blue_15ft_1000x600.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Blue_30ft_1600x600.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Blue_60ft_2800x600.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Blue_90ft_4000x600.webm`
                },
                blue02: {
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Blue02_15ft_1000x600.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Blue02_30ft_1600x600.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Blue02_60ft_2800x600.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Blue02_90ft_4000x600.webm`
                },
                blue03: {
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Blue03_15ft_1000x600.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Blue03_30ft_1600x600.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Blue03_60ft_2800x600.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Blue03_90ft_4000x600.webm`
                },
                dark_red: {
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSwordDB01_01_Dark_Red_15ft_1000x600.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSwordDB01_01_Dark_Red_30ft_1600x600.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSwordDB01_01_Dark_Red_60ft_2800x600.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSwordDB01_01_Dark_Red_90ft_4000x600.webm`
                },
                dark_white: {
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSwordDB01_01_Dark_White_15ft_1000x600.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSwordDB01_01_Dark_White_30ft_1600x600.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSwordDB01_01_Dark_White_60ft_2800x600.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSwordDB01_01_Dark_White_90ft_4000x600.webm`
                },
                green: {
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Green_15ft_1000x600.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Green_30ft_1600x600.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Green_60ft_2800x600.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Green_90ft_4000x600.webm`
                },
                green02: {
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Green02_15ft_1000x600.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Green02_30ft_1600x600.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Green02_60ft_2800x600.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Green02_90ft_4000x600.webm`
                },
                orange: {
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Orange_15ft_1000x600.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Orange_30ft_1600x600.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Orange_60ft_2800x600.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Orange_90ft_4000x600.webm`
                },
                purple: {
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Purple_15ft_1000x600.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Purple_30ft_1600x600.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Purple_60ft_2800x600.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Purple_90ft_4000x600.webm`
                },
                red: {
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Red_15ft_1000x600.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Red_30ft_1600x600.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Red_60ft_2800x600.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Red_90ft_4000x600.webm`
                },
                white: {
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_White_15ft_1000x600.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_White_30ft_1600x600.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_White_60ft_2800x600.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_White_90ft_4000x600.webm`
                },
                yellow: {
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Yellow_15ft_1000x600.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Yellow_30ft_1600x600.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Yellow_60ft_2800x600.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Yellow_90ft_4000x600.webm`
                }
            }
        },
        patreonDatabase.lightning_ball = {
            blue: `${prefix}/jb2a_patreon/Library/Generic/Lightning/LightningBall_01_Regular_Blue_400x400.webm`,
            dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Lightning/LightningBall_01_Dark_Purple_400x400.webm`,
            dark_red: `${prefix}/jb2a_patreon/Library/Generic/Lightning/LightningBall_01_Dark_Red_400x400.webm`,
            green: `${prefix}/jb2a_patreon/Library/Generic/Lightning/LightningBall_01_Regular_Green_400x400.webm`,
            green02: `${prefix}/jb2a_patreon/Library/Generic/Lightning/LightningBall_01_Regular_Green02_400x400.webm`,
            orange: `${prefix}/jb2a_patreon/Library/Generic/Lightning/LightningBall_01_Regular_Orange_400x400.webm`,
            purple: `${prefix}/jb2a_patreon/Library/Generic/Lightning/LightningBall_01_Regular_Purple_400x400.webm`,
            red: `${prefix}/jb2a_patreon/Library/Generic/Lightning/LightningBall_01_Regular_Red_400x400.webm`,
            yellow: `${prefix}/jb2a_patreon/Library/Generic/Lightning/LightningBall_01_Regular_Yellow_400x400.webm`
        },
        patreonDatabase.lightning_bolt = {
            _template: 'ray',
            narrow: {
                blue: `${prefix}/jb2a_patreon/Library/3rd_Level/Lightning_Bolt/LightningBolt_01_Regular_Blue_4000x200.webm`,
                dark_blue: `${prefix}/jb2a_patreon/Library/3rd_Level/Lightning_Bolt/LightningBolt_01_Dark_Blue_4000x200.webm`,
                green: `${prefix}/jb2a_patreon/Library/3rd_Level/Lightning_Bolt/LightningBolt_01_Regular_Green_4000x200.webm`,
                orange: `${prefix}/jb2a_patreon/Library/3rd_Level/Lightning_Bolt/LightningBolt_01_Regular_Orange_4000x200.webm`,
                purple: `${prefix}/jb2a_patreon/Library/3rd_Level/Lightning_Bolt/LightningBolt_01_Regular_Purple_4000x200.webm`
            },
            wide: {
                blue: `${prefix}/jb2a_patreon/Library/3rd_Level/Lightning_Bolt/LightningBolt_01_Regular_Blue_4000x400.webm`,
                dark_blue: `${prefix}/jb2a_patreon/Library/3rd_Level/Lightning_Bolt/LightningBolt_01_Dark_Blue_4000x400.webm`,
                green: `${prefix}/jb2a_patreon/Library/3rd_Level/Lightning_Bolt/LightningBolt_01_Regular_Green_4000x400.webm`,
                orange: `${prefix}/jb2a_patreon/Library/3rd_Level/Lightning_Bolt/LightningBolt_01_Regular_Orange_4000x400.webm`,
                purple: `${prefix}/jb2a_patreon/Library/3rd_Level/Lightning_Bolt/LightningBolt_01_Regular_Purple_4000x400.webm`
            }
        },
        patreonDatabase.lightning_strike = {
            //[--> WILL BE REMOVED 
            '01': `${prefix}/jb2a_patreon/Library/Generic/Lightning/LightningStrike01_01_Regular_Blue_800x800.webm`,
            '02': `${prefix}/jb2a_patreon/Library/Generic/Lightning/LightningStrike01_02_Regular_Blue_800x800.webm`,
            '03': `${prefix}/jb2a_patreon/Library/Generic/Lightning/LightningStrike01_03_Regular_Blue_800x800.webm`,
            '04': `${prefix}/jb2a_patreon/Library/Generic/Lightning/LightningStrike01_04_Regular_Blue_800x800.webm`,
            '05': `${prefix}/jb2a_patreon/Library/Generic/Lightning/LightningStrike01_05_Regular_Blue_800x800.webm`,
            '06': `${prefix}/jb2a_patreon/Library/Generic/Lightning/LightningStrike01_06_Regular_Blue_800x800.webm`,
            //<--] WILL BE REMOVED 
            blue: [
                `${prefix}/jb2a_patreon/Library/Generic/Lightning/LightningStrike01_01_Regular_Blue_800x800.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Lightning/LightningStrike01_02_Regular_Blue_800x800.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Lightning/LightningStrike01_03_Regular_Blue_800x800.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Lightning/LightningStrike01_04_Regular_Blue_800x800.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Lightning/LightningStrike01_05_Regular_Blue_800x800.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Lightning/LightningStrike01_06_Regular_Blue_800x800.webm`
            ],
            purple: [
                `${prefix}/jb2a_patreon/Library/Generic/Lightning/LightningStrike01_01_Regular_Purple_800x800.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Lightning/LightningStrike01_02_Regular_Purple_800x800.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Lightning/LightningStrike01_03_Regular_Purple_800x800.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Lightning/LightningStrike01_04_Regular_Purple_800x800.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Lightning/LightningStrike01_05_Regular_Purple_800x800.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Lightning/LightningStrike01_06_Regular_Purple_800x800.webm`
            ],
            yellow: [
                `${prefix}/jb2a_patreon/Library/Generic/Lightning/LightningStrike01_01_Regular_Yellow_800x800.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Lightning/LightningStrike01_02_Regular_Yellow_800x800.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Lightning/LightningStrike01_03_Regular_Yellow_800x800.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Lightning/LightningStrike01_04_Regular_Yellow_800x800.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Lightning/LightningStrike01_05_Regular_Yellow_800x800.webm`,
                `${prefix}/jb2a_patreon/Library/Generic/Lightning/LightningStrike01_06_Regular_Yellow_800x800.webm`
            ]
        },
        patreonDatabase.liquid = {
            splash: {
                bright_blue: `${prefix}/jb2a_patreon/Library/Generic/Liquid/LiquidSplash01_Bright_Blue_400x400.webm`,
                bright_green: `${prefix}/jb2a_patreon/Library/Generic/Liquid/LiquidSplash01_Bright_Green_400x400.webm`,
                bright_purple: `${prefix}/jb2a_patreon/Library/Generic/Liquid/LiquidSplash01_Bright_Purple_400x400.webm`,
                blue: `${prefix}/jb2a_patreon/Library/Generic/Liquid/LiquidSplash01_Regular_Blue_400x400.webm`,
                green: `${prefix}/jb2a_patreon/Library/Generic/Liquid/LiquidSplash01_Regular_Green_400x400.webm`,
                red: `${prefix}/jb2a_patreon/Library/Generic/Liquid/LiquidSplash01_Regular_Red_400x400.webm`
            },
            splash_side: {
                _template: 'side_impact',
                bright_blue: `${prefix}/jb2a_patreon/Library/Generic/Liquid/LiquidSplashSide01_Bright_Blue_600x600.webm`,
                bright_green: `${prefix}/jb2a_patreon/Library/Generic/Liquid/LiquidSplashSide01_Bright_Green_600x600.webm`,
                bright_purple: `${prefix}/jb2a_patreon/Library/Generic/Liquid/LiquidSplashSide01_Bright_Purple_600x600.webm`,
                blue: `${prefix}/jb2a_patreon/Library/Generic/Liquid/LiquidSplashSide01_Regular_Blue_600x600.webm`,
                green: `${prefix}/jb2a_patreon/Library/Generic/Liquid/LiquidSplashSide01_Regular_Green_600x600.webm`,
                red: `${prefix}/jb2a_patreon/Library/Generic/Liquid/LiquidSplashSide01_Regular_Red_600x600.webm`
            }
        },
        patreonDatabase.mace = {
            melee: {
                _template: 'melee',
                fire: {
                    dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Mace01_Fire_Dark_Purple_800x600.webm`,
                    blue: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Mace01_Fire_Regular_Blue_800x600.webm`,
                    green: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Mace01_Fire_Regular_Green_800x600.webm`,
                    orange: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Mace01_Fire_Regular_Orange_800x600.webm`,
                    pink: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Mace01_Fire_Regular_Pink_800x600.webm`,
                    red: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Mace01_Fire_Regular_Red_800x600.webm`,
                    yellow: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Mace01_Fire_Regular_Yellow_800x600.webm`
                },
                '01': {
                    dark_orangepurple: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Mace01_01_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Mace01_02_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Mace01_03_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Mace01_04_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Mace01_05_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Mace01_06_Dark_OrangePurple_800x600.webm`
                    ],
                    blue: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Mace01_01_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Mace01_02_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Mace01_03_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Mace01_04_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Mace01_05_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Mace01_06_Regular_Blue_800x600.webm`
                    ],
                    orange: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Mace01_01_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Mace01_02_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Mace01_03_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Mace01_04_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Mace01_05_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Mace01_06_Regular_Orange_800x600.webm`
                    ],
                    purple: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Mace01_01_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Mace01_02_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Mace01_03_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Mace01_04_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Mace01_05_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Mace01_06_Regular_Purple_800x600.webm`
                    ],
                    white: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Mace01_01_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Mace01_02_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Mace01_03_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Mace01_04_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Mace01_05_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Mace01_06_Regular_White_800x600.webm`
                    ]
                }
            },
            throw: {
                _template: 'ranged',
                '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Mace01_01_Regular_White_15ft_1000x400.webm`,
                '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Mace01_01_Regular_White_30ft_1600x400.webm`,
                '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Mace01_01_Regular_White_60ft_2800x400.webm`,
                '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Mace01_01_Regular_White_90ft_4000x400.webm`
            }
        },
        patreonDatabase.magic_missile = {
            _template: 'ranged',
            blue: {
                '05ft':
                    [
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Blue_05ft_01_600x400.webm`,
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Blue_05ft_02_600x400.webm`,
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Blue_05ft_03_600x400.webm`,
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Blue_05ft_04_600x400.webm`
                    ],
                '15ft':
                    [
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Blue_15ft_01_1000x400.webm`,
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Blue_15ft_02_1000x400.webm`,
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Blue_15ft_03_1000x400.webm`,
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Blue_15ft_04_1000x400.webm`
                    ],
                '30ft':
                    [
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Blue_30ft_01_1600x400.webm`,
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Blue_30ft_02_1600x400.webm`,
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Blue_30ft_03_1600x400.webm`,
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Blue_30ft_04_1600x400.webm`
                    ],
                '60ft':
                    [
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Blue_60ft_01_2800x400.webm`,
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Blue_60ft_02_2800x400.webm`,
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Blue_60ft_03_2800x400.webm`,
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Blue_60ft_04_2800x400.webm`
                    ],
                '90ft':
                    [
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Blue_90ft_01_4000x400.webm`,
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Blue_90ft_02_4000x400.webm`,
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Blue_90ft_03_4000x400.webm`,
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Blue_90ft_04_4000x400.webm`
                    ]
            },
            dark_red: {

                '05ft':
                    [
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Dark_Red_05ft_01_600x400.webm`,
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Dark_Red_05ft_02_600x400.webm`,
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Dark_Red_05ft_03_600x400.webm`,
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Dark_Red_05ft_04_600x400.webm`
                    ],
                '15ft':
                    [
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Dark_Red_15ft_01_1000x400.webm`,
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Dark_Red_15ft_02_1000x400.webm`,
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Dark_Red_15ft_03_1000x400.webm`,
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Dark_Red_15ft_04_1000x400.webm`
                    ],
                '30ft':
                    [
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Dark_Red_30ft_01_1600x400.webm`,
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Dark_Red_30ft_02_1600x400.webm`,
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Dark_Red_30ft_03_1600x400.webm`,
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Dark_Red_30ft_04_1600x400.webm`
                    ],
                '60ft':
                    [
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Dark_Red_60ft_01_2800x400.webm`,
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Dark_Red_60ft_02_2800x400.webm`,
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Dark_Red_60ft_03_2800x400.webm`,
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Dark_Red_60ft_04_2800x400.webm`],
                '90ft':
                    [
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Dark_Red_90ft_01_4000x400.webm`,
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Dark_Red_90ft_02_4000x400.webm`,
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Dark_Red_90ft_03_4000x400.webm`,
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Dark_Red_90ft_04_4000x400.webm`
                    ]
            },
            green: {
                '05ft':
                    [
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Green_05ft_01_600x400.webm`,
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Green_05ft_02_600x400.webm`,
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Green_05ft_03_600x400.webm`,
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Green_05ft_04_600x400.webm`
                    ],
                '15ft':
                    [
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Green_15ft_01_1000x400.webm`,
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Green_15ft_02_1000x400.webm`,
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Green_15ft_03_1000x400.webm`,
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Green_15ft_04_1000x400.webm`
                    ],
                '30ft':
                    [
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Green_30ft_01_1600x400.webm`,
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Green_30ft_02_1600x400.webm`,
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Green_30ft_03_1600x400.webm`,
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Green_30ft_04_1600x400.webm`
                    ],
                '60ft':
                    [
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Green_60ft_01_2800x400.webm`,
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Green_60ft_02_2800x400.webm`,
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Green_60ft_03_2800x400.webm`,
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Green_60ft_04_2800x400.webm`
                    ],
                '90ft':
                    [
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Green_90ft_01_4000x400.webm`,
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Green_90ft_02_4000x400.webm`,
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Green_90ft_03_4000x400.webm`,
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Green_90ft_04_4000x400.webm`
                    ]
            },
            orange: {
                '05ft':
                    [
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Orange_05ft_01_600x400.webm`,
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Orange_05ft_02_600x400.webm`,
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Orange_05ft_03_600x400.webm`,
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Orange_05ft_04_600x400.webm`
                    ],
                '15ft':
                    [
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Orange_15ft_01_1000x400.webm`,
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Orange_15ft_02_1000x400.webm`,
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Orange_15ft_03_1000x400.webm`,
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Orange_15ft_04_1000x400.webm`
                    ],
                '30ft':
                    [
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Orange_30ft_01_1600x400.webm`,
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Orange_30ft_02_1600x400.webm`,
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Orange_30ft_03_1600x400.webm`,
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Orange_30ft_04_1600x400.webm`
                    ],
                '60ft':
                    [
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Orange_60ft_01_2800x400.webm`,
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Orange_60ft_02_2800x400.webm`,
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Orange_60ft_03_2800x400.webm`,
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Orange_60ft_04_2800x400.webm`
                    ],
                '90ft':
                    [
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Orange_90ft_01_4000x400.webm`,
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Orange_90ft_02_4000x400.webm`,
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Orange_90ft_03_4000x400.webm`,
                        `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Orange_90ft_04_4000x400.webm`
                    ]
            },
            purple: {
                '05ft': [
                    `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Purple_05ft_01_600x400.webm`,
                    `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Purple_05ft_02_600x400.webm`,
                    `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Purple_05ft_03_600x400.webm`,
                    `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Purple_05ft_04_600x400.webm`
                ],
                '15ft': [
                    `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Purple_15ft_01_1000x400.webm`,
                    `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Purple_15ft_02_1000x400.webm`,
                    `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Purple_15ft_03_1000x400.webm`,
                    `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Purple_15ft_04_1000x400.webm`
                ],
                '30ft': [
                    `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Purple_30ft_01_1600x400.webm`,
                    `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Purple_30ft_02_1600x400.webm`,
                    `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Purple_30ft_03_1600x400.webm`,
                    `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Purple_30ft_04_1600x400.webm`
                ],
                '60ft': [
                    `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Purple_60ft_01_2800x400.webm`,
                    `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Purple_60ft_02_2800x400.webm`,
                    `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Purple_60ft_03_2800x400.webm`,
                    `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Purple_60ft_04_2800x400.webm`
                ],
                '90ft': [
                    `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Purple_90ft_01_4000x400.webm`,
                    `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Purple_90ft_02_4000x400.webm`,
                    `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Purple_90ft_03_4000x400.webm`,
                    `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Purple_90ft_04_4000x400.webm`
                ]
            },
            yellow: {
                '05ft': [
                    `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Yellow_05ft_01_600x400.webm`,
                    `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Yellow_05ft_02_600x400.webm`,
                    `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Yellow_05ft_03_600x400.webm`,
                    `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Yellow_05ft_04_600x400.webm`
                ],
                '15ft': [
                    `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Yellow_15ft_01_1000x400.webm`,
                    `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Yellow_15ft_02_1000x400.webm`,
                    `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Yellow_15ft_03_1000x400.webm`,
                    `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Yellow_15ft_04_1000x400.webm`
                ],
                '30ft': [
                    `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Yellow_30ft_01_1600x400.webm`,
                    `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Yellow_30ft_02_1600x400.webm`,
                    `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Yellow_30ft_03_1600x400.webm`,
                    `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Yellow_30ft_04_1600x400.webm`
                ],
                '60ft': [
                    `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Yellow_60ft_01_2800x400.webm`,
                    `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Yellow_60ft_02_2800x400.webm`,
                    `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Yellow_60ft_03_2800x400.webm`,
                    `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Yellow_60ft_04_2800x400.webm`
                ],
                '90ft': [
                    `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Yellow_90ft_01_4000x400.webm`,
                    `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Yellow_90ft_02_4000x400.webm`,
                    `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Yellow_90ft_03_4000x400.webm`,
                    `${prefix}/jb2a_patreon/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Yellow_90ft_04_4000x400.webm`
                ]
            }
        },
        patreonDatabase.magic_signs = {
            circle: {
                '01': {
                    abjuration: {
                        blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Abjuration_01_Blue_Circle_800x800.webm`,
                        green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Abjuration_01_Green_Circle_800x800.webm`,
                        red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Abjuration_01_Red_Circle_800x800.webm`
                    },
                    conjuration: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Conjuration_01_Yellow_Circle_800x800.webm`,
                    divination: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Divination_01_Light_Blue_Circle_800x800.webm`,
                },
                '02': {
                    abjuration: {
                        intro: {
                            dark_blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/AbjurationCircleIntro_02_Dark_Blue_800x800.webm`,
                            dark_green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/AbjurationCircleIntro_02_Dark_Green_800x800.webm`,
                            dark_pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/AbjurationCircleIntro_02_Dark_Pink_800x800.webm`,
                            dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/AbjurationCircleIntro_02_Dark_Purple_800x800.webm`,
                            dark_red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/AbjurationCircleIntro_02_Dark_Red_800x800.webm`,
                            dark_yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/AbjurationCircleIntro_02_Dark_Yellow_800x800.webm`,
                            blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/AbjurationCircleIntro_02_Regular_Blue_800x800.webm`,
                            green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/AbjurationCircleIntro_02_Regular_Green_800x800.webm`,
                            pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/AbjurationCircleIntro_02_Regular_Pink_800x800.webm`,
                            purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/AbjurationCircleIntro_02_Regular_Purple_800x800.webm`,
                            red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/AbjurationCircleIntro_02_Regular_Red_800x800.webm`,
                            yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/AbjurationCircleIntro_02_Regular_Yellow_800x800.webm`
                        },
                        loop: {
                            dark_blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/AbjurationCircleLoop_02_Dark_Blue_800x800.webm`,
                            dark_green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/AbjurationCircleLoop_02_Dark_Green_800x800.webm`,
                            dark_pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/AbjurationCircleLoop_02_Dark_Pink_800x800.webm`,
                            dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/AbjurationCircleLoop_02_Dark_Purple_800x800.webm`,
                            dark_red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/AbjurationCircleLoop_02_Dark_Red_800x800.webm`,
                            dark_yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/AbjurationCircleLoop_02_Dark_Yellow_800x800.webm`,
                            blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/AbjurationCircleLoop_02_Regular_Blue_800x800.webm`,
                            green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/AbjurationCircleLoop_02_Regular_Green_800x800.webm`,
                            pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/AbjurationCircleLoop_02_Regular_Pink_800x800.webm`,
                            purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/AbjurationCircleLoop_02_Regular_Purple_800x800.webm`,
                            red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/AbjurationCircleLoop_02_Regular_Red_800x800.webm`,
                            yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/AbjurationCircleLoop_02_Regular_Yellow_800x800.webm`
                        },
                        outro: {
                            dark_blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/AbjurationCircleOutro_02_Dark_Blue_800x800.webm`,
                            dark_green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/AbjurationCircleOutro_02_Dark_Green_800x800.webm`,
                            dark_pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/AbjurationCircleOutro_02_Dark_Pink_800x800.webm`,
                            dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/AbjurationCircleOutro_02_Dark_Purple_800x800.webm`,
                            dark_red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/AbjurationCircleOutro_02_Dark_Red_800x800.webm`,
                            dark_yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/AbjurationCircleOutro_02_Dark_Yellow_800x800.webm`,
                            blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/AbjurationCircleOutro_02_Regular_Blue_800x800.webm`,
                            green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/AbjurationCircleOutro_02_Regular_Green_800x800.webm`,
                            pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/AbjurationCircleOutro_02_Regular_Pink_800x800.webm`,
                            purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/AbjurationCircleOutro_02_Regular_Purple_800x800.webm`,
                            red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/AbjurationCircleOutro_02_Regular_Red_800x800.webm`,
                            yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/AbjurationCircleOutro_02_Regular_Yellow_800x800.webm`
                        }
                    },
                    conjuration: {
                        intro: {
                            dark_blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/ConjurationCircleIntro_02_Dark_Blue_800x800.webm`,
                            dark_green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/ConjurationCircleIntro_02_Dark_Green_800x800.webm`,
                            dark_pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/ConjurationCircleIntro_02_Dark_Pink_800x800.webm`,
                            dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/ConjurationCircleIntro_02_Dark_Purple_800x800.webm`,
                            dark_red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/ConjurationCircleIntro_02_Dark_Red_800x800.webm`,
                            dark_yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/ConjurationCircleIntro_02_Dark_Yellow_800x800.webm`,
                            blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/ConjurationCircleIntro_02_Regular_Blue_800x800.webm`,
                            green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/ConjurationCircleIntro_02_Regular_Green_800x800.webm`,
                            pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/ConjurationCircleIntro_02_Regular_Pink_800x800.webm`,
                            purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/ConjurationCircleIntro_02_Regular_Purple_800x800.webm`,
                            red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/ConjurationCircleIntro_02_Regular_Red_800x800.webm`,
                            yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/ConjurationCircleIntro_02_Regular_Yellow_800x800.webm`
                        },
                        loop: {
                            dark_blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/ConjurationCircleLoop_02_Dark_Blue_800x800.webm`,
                            dark_green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/ConjurationCircleLoop_02_Dark_Green_800x800.webm`,
                            dark_pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/ConjurationCircleLoop_02_Dark_Pink_800x800.webm`,
                            dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/ConjurationCircleLoop_02_Dark_Purple_800x800.webm`,
                            dark_red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/ConjurationCircleLoop_02_Dark_Red_800x800.webm`,
                            dark_yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/ConjurationCircleLoop_02_Dark_Yellow_800x800.webm`,
                            blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/ConjurationCircleLoop_02_Regular_Blue_800x800.webm`,
                            green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/ConjurationCircleLoop_02_Regular_Green_800x800.webm`,
                            pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/ConjurationCircleLoop_02_Regular_Pink_800x800.webm`,
                            purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/ConjurationCircleLoop_02_Regular_Purple_800x800.webm`,
                            red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/ConjurationCircleLoop_02_Regular_Red_800x800.webm`,
                            yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/ConjurationCircleLoop_02_Regular_Yellow_800x800.webm`
                        },
                        outro: {
                            dark_blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/ConjurationCircleOutro_02_Dark_Blue_800x800.webm`,
                            dark_green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/ConjurationCircleOutro_02_Dark_Green_800x800.webm`,
                            dark_pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/ConjurationCircleOutro_02_Dark_Pink_800x800.webm`,
                            dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/ConjurationCircleOutro_02_Dark_Purple_800x800.webm`,
                            dark_red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/ConjurationCircleOutro_02_Dark_Red_800x800.webm`,
                            dark_yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/ConjurationCircleOutro_02_Dark_Yellow_800x800.webm`,
                            blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/ConjurationCircleOutro_02_Regular_Blue_800x800.webm`,
                            green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/ConjurationCircleOutro_02_Regular_Green_800x800.webm`,
                            pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/ConjurationCircleOutro_02_Regular_Pink_800x800.webm`,
                            purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/ConjurationCircleOutro_02_Regular_Purple_800x800.webm`,
                            red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/ConjurationCircleOutro_02_Regular_Red_800x800.webm`,
                            yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/ConjurationCircleOutro_02_Regular_Yellow_800x800.webm`,
                        }
                    },
                    divination: {
                        intro: {
                            dark_blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/DivinationCircleIntro_02_Dark_Blue_800x800.webm`,
                            dark_green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/DivinationCircleIntro_02_Dark_Green_800x800.webm`,
                            dark_pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/DivinationCircleIntro_02_Dark_Pink_800x800.webm`,
                            dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/DivinationCircleIntro_02_Dark_Purple_800x800.webm`,
                            dark_red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/DivinationCircleIntro_02_Dark_Red_800x800.webm`,
                            dark_yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/DivinationCircleIntro_02_Dark_Yellow_800x800.webm`,
                            blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/DivinationCircleIntro_02_Regular_Blue_800x800.webm`,
                            green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/DivinationCircleIntro_02_Regular_Green_800x800.webm`,
                            pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/DivinationCircleIntro_02_Regular_Pink_800x800.webm`,
                            purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/DivinationCircleIntro_02_Regular_Purple_800x800.webm`,
                            red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/DivinationCircleIntro_02_Regular_Red_800x800.webm`,
                            yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/DivinationCircleIntro_02_Regular_Yellow_800x800.webm`
                        },
                        loop: {
                            dark_blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/DivinationCircleLoop_02_Dark_Blue_800x800.webm`,
                            dark_green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/DivinationCircleLoop_02_Dark_Green_800x800.webm`,
                            dark_pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/DivinationCircleLoop_02_Dark_Pink_800x800.webm`,
                            dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/DivinationCircleLoop_02_Dark_Purple_800x800.webm`,
                            dark_red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/DivinationCircleLoop_02_Dark_Red_800x800.webm`,
                            dark_yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/DivinationCircleLoop_02_Dark_Yellow_800x800.webm`,
                            blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/DivinationCircleLoop_02_Regular_Blue_800x800.webm`,
                            green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/DivinationCircleLoop_02_Regular_Green_800x800.webm`,
                            pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/DivinationCircleLoop_02_Regular_Pink_800x800.webm`,
                            purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/DivinationCircleLoop_02_Regular_Purple_800x800.webm`,
                            red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/DivinationCircleLoop_02_Regular_Red_800x800.webm`,
                            yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/DivinationCircleLoop_02_Regular_Yellow_800x800.webm`
                        },
                        outro: {
                            dark_blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/DivinationCircleOutro_02_Dark_Blue_800x800.webm`,
                            dark_green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/DivinationCircleOutro_02_Dark_Green_800x800.webm`,
                            dark_pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/DivinationCircleOutro_02_Dark_Pink_800x800.webm`,
                            dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/DivinationCircleOutro_02_Dark_Purple_800x800.webm`,
                            dark_red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/DivinationCircleOutro_02_Dark_Red_800x800.webm`,
                            dark_yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/DivinationCircleOutro_02_Dark_Yellow_800x800.webm`,
                            blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/DivinationCircleOutro_02_Regular_Blue_800x800.webm`,
                            green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/DivinationCircleOutro_02_Regular_Green_800x800.webm`,
                            pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/DivinationCircleOutro_02_Regular_Pink_800x800.webm`,
                            purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/DivinationCircleOutro_02_Regular_Purple_800x800.webm`,
                            red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/DivinationCircleOutro_02_Regular_Red_800x800.webm`,
                            yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/DivinationCircleOutro_02_Regular_Yellow_800x800.webm`
                        }
                    },
                    enchantment: {
                        intro: {
                            dark_blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EnchantmentCircleIntro_02_Dark_Blue_800x800.webm`,
                            dark_green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EnchantmentCircleIntro_02_Dark_Green_800x800.webm`,
                            dark_pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EnchantmentCircleIntro_02_Dark_Pink_800x800.webm`,
                            dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EnchantmentCircleIntro_02_Dark_Purple_800x800.webm`,
                            dark_red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EnchantmentCircleIntro_02_Dark_Red_800x800.webm`,
                            dark_yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EnchantmentCircleIntro_02_Dark_Yellow_800x800.webm`,
                            blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EnchantmentCircleIntro_02_Regular_Blue_800x800.webm`,
                            green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EnchantmentCircleIntro_02_Regular_Green_800x800.webm`,
                            pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EnchantmentCircleIntro_02_Regular_Pink_800x800.webm`,
                            purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EnchantmentCircleIntro_02_Regular_Purple_800x800.webm`,
                            red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EnchantmentCircleIntro_02_Regular_Red_800x800.webm`,
                            yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EnchantmentCircleIntro_02_Regular_Yellow_800x800.webm`
                        },
                        loop: {
                            dark_blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EnchantmentCircleLoop_02_Dark_Blue_800x800.webm`,
                            dark_green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EnchantmentCircleLoop_02_Dark_Green_800x800.webm`,
                            dark_pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EnchantmentCircleLoop_02_Dark_Pink_800x800.webm`,
                            dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EnchantmentCircleLoop_02_Dark_Purple_800x800.webm`,
                            dark_red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EnchantmentCircleLoop_02_Dark_Red_800x800.webm`,
                            dark_yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EnchantmentCircleLoop_02_Dark_Yellow_800x800.webm`,
                            blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EnchantmentCircleLoop_02_Regular_Blue_800x800.webm`,
                            green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EnchantmentCircleLoop_02_Regular_Green_800x800.webm`,
                            pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EnchantmentCircleLoop_02_Regular_Pink_800x800.webm`,
                            purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EnchantmentCircleLoop_02_Regular_Purple_800x800.webm`,
                            red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EnchantmentCircleLoop_02_Regular_Red_800x800.webm`,
                            yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EnchantmentCircleLoop_02_Regular_Yellow_800x800.webm`
                        },
                        outro: {
                            dark_blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EnchantmentCircleOutro_02_Dark_Blue_800x800.webm`,
                            dark_green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EnchantmentCircleOutro_02_Dark_Green_800x800.webm`,
                            dark_pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EnchantmentCircleOutro_02_Dark_Pink_800x800.webm`,
                            dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EnchantmentCircleOutro_02_Dark_Purple_800x800.webm`,
                            dark_red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EnchantmentCircleOutro_02_Dark_Red_800x800.webm`,
                            dark_yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EnchantmentCircleOutro_02_Dark_Yellow_800x800.webm`,
                            blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EnchantmentCircleOutro_02_Regular_Blue_800x800.webm`,
                            green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EnchantmentCircleOutro_02_Regular_Green_800x800.webm`,
                            pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EnchantmentCircleOutro_02_Regular_Pink_800x800.webm`,
                            purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EnchantmentCircleOutro_02_Regular_Purple_800x800.webm`,
                            red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EnchantmentCircleOutro_02_Regular_Red_800x800.webm`,
                            yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EnchantmentCircleOutro_02_Regular_Yellow_800x800.webm`
                        }
                    },
                    evocation: {
                        intro: {
                            dark_blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EvocationCircleIntro_02_Dark_Blue_800x800.webm`,
                            dark_green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EvocationCircleIntro_02_Dark_Green_800x800.webm`,
                            dark_pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EvocationCircleIntro_02_Dark_Pink_800x800.webm`,
                            dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EvocationCircleIntro_02_Dark_Purple_800x800.webm`,
                            dark_red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EvocationCircleIntro_02_Dark_Red_800x800.webm`,
                            dark_yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EvocationCircleIntro_02_Dark_Yellow_800x800.webm`,
                            blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EvocationCircleIntro_02_Regular_Blue_800x800.webm`,
                            green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EvocationCircleIntro_02_Regular_Green_800x800.webm`,
                            pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EvocationCircleIntro_02_Regular_Pink_800x800.webm`,
                            purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EvocationCircleIntro_02_Regular_Purple_800x800.webm`,
                            red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EvocationCircleIntro_02_Regular_Red_800x800.webm`,
                            yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EvocationCircleIntro_02_Regular_Yellow_800x800.webm`
                        },
                        loop: {
                            dark_blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EvocationCircleLoop_02_Dark_Blue_800x800.webm`,
                            dark_green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EvocationCircleLoop_02_Dark_Green_800x800.webm`,
                            dark_pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EvocationCircleLoop_02_Dark_Pink_800x800.webm`,
                            dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EvocationCircleLoop_02_Dark_Purple_800x800.webm`,
                            dark_red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EvocationCircleLoop_02_Dark_Red_800x800.webm`,
                            dark_yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EvocationCircleLoop_02_Dark_Yellow_800x800.webm`,
                            blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EvocationCircleLoop_02_Regular_Blue_800x800.webm`,
                            green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EvocationCircleLoop_02_Regular_Green_800x800.webm`,
                            pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EvocationCircleLoop_02_Regular_Pink_800x800.webm`,
                            purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EvocationCircleLoop_02_Regular_Purple_800x800.webm`,
                            red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EvocationCircleLoop_02_Regular_Red_800x800.webm`,
                            yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EvocationCircleLoop_02_Regular_Yellow_800x800.webm`
                        },
                        outro: {
                            dark_blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EvocationCircleOutro_02_Dark_Blue_800x800.webm`,
                            dark_green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EvocationCircleOutro_02_Dark_Green_800x800.webm`,
                            dark_pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EvocationCircleOutro_02_Dark_Pink_800x800.webm`,
                            dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EvocationCircleOutro_02_Dark_Purple_800x800.webm`,
                            dark_red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EvocationCircleOutro_02_Dark_Red_800x800.webm`,
                            dark_yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EvocationCircleOutro_02_Dark_Yellow_800x800.webm`,
                            blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EvocationCircleOutro_02_Regular_Blue_800x800.webm`,
                            green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EvocationCircleOutro_02_Regular_Green_800x800.webm`,
                            pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EvocationCircleOutro_02_Regular_Pink_800x800.webm`,
                            purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EvocationCircleOutro_02_Regular_Purple_800x800.webm`,
                            red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EvocationCircleOutro_02_Regular_Red_800x800.webm`,
                            yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/EvocationCircleOutro_02_Regular_Yellow_800x800.webm`
                        }
                    },
                    illusion: {
                        intro: {
                            dark_blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/IllusionCircleIntro_02_Dark_Blue_800x800.webm`,
                            dark_green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/IllusionCircleIntro_02_Dark_Green_800x800.webm`,
                            dark_pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/IllusionCircleIntro_02_Dark_Pink_800x800.webm`,
                            dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/IllusionCircleIntro_02_Dark_Purple_800x800.webm`,
                            dark_red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/IllusionCircleIntro_02_Dark_Red_800x800.webm`,
                            dark_yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/IllusionCircleIntro_02_Dark_Yellow_800x800.webm`,
                            blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/IllusionCircleIntro_02_Regular_Blue_800x800.webm`,
                            green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/IllusionCircleIntro_02_Regular_Green_800x800.webm`,
                            pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/IllusionCircleIntro_02_Regular_Pink_800x800.webm`,
                            purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/IllusionCircleIntro_02_Regular_Purple_800x800.webm`,
                            red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/IllusionCircleIntro_02_Regular_Red_800x800.webm`,
                            yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/IllusionCircleIntro_02_Regular_Yellow_800x800.webm`
                        },
                        loop: {
                            dark_blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/IllusionCircleLoop_02_Dark_Blue_800x800.webm`,
                            dark_green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/IllusionCircleLoop_02_Dark_Green_800x800.webm`,
                            dark_pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/IllusionCircleLoop_02_Dark_Pink_800x800.webm`,
                            dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/IllusionCircleLoop_02_Dark_Purple_800x800.webm`,
                            dark_red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/IllusionCircleLoop_02_Dark_Red_800x800.webm`,
                            dark_yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/IllusionCircleLoop_02_Dark_Yellow_800x800.webm`,
                            blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/IllusionCircleLoop_02_Regular_Blue_800x800.webm`,
                            green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/IllusionCircleLoop_02_Regular_Green_800x800.webm`,
                            pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/IllusionCircleLoop_02_Regular_Pink_800x800.webm`,
                            purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/IllusionCircleLoop_02_Regular_Purple_800x800.webm`,
                            red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/IllusionCircleLoop_02_Regular_Red_800x800.webm`,
                            yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/IllusionCircleLoop_02_Regular_Yellow_800x800.webm`
                        },
                        outro: {
                            dark_blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/IllusionCircleOutro_02_Dark_Blue_800x800.webm`,
                            dark_green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/IllusionCircleOutro_02_Dark_Green_800x800.webm`,
                            dark_pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/IllusionCircleOutro_02_Dark_Pink_800x800.webm`,
                            dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/IllusionCircleOutro_02_Dark_Purple_800x800.webm`,
                            dark_red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/IllusionCircleOutro_02_Dark_Red_800x800.webm`,
                            dark_yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/IllusionCircleOutro_02_Dark_Yellow_800x800.webm`,
                            blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/IllusionCircleOutro_02_Regular_Blue_800x800.webm`,
                            green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/IllusionCircleOutro_02_Regular_Green_800x800.webm`,
                            pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/IllusionCircleOutro_02_Regular_Pink_800x800.webm`,
                            purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/IllusionCircleOutro_02_Regular_Purple_800x800.webm`,
                            red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/IllusionCircleOutro_02_Regular_Red_800x800.webm`,
                            yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/IllusionCircleOutro_02_Regular_Yellow_800x800.webm`
                        }
                    },
                    necromancy: {
                        intro: {
                            dark_blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/NecromancyCircleIntro_02_Dark_Blue_800x800.webm`,
                            dark_green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/NecromancyCircleIntro_02_Dark_Green_800x800.webm`,
                            dark_pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/NecromancyCircleIntro_02_Dark_Pink_800x800.webm`,
                            dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/NecromancyCircleIntro_02_Dark_Purple_800x800.webm`,
                            dark_red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/NecromancyCircleIntro_02_Dark_Red_800x800.webm`,
                            dark_yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/NecromancyCircleIntro_02_Dark_Yellow_800x800.webm`,
                            blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/NecromancyCircleIntro_02_Regular_Blue_800x800.webm`,
                            green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/NecromancyCircleIntro_02_Regular_Green_800x800.webm`,
                            pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/NecromancyCircleIntro_02_Regular_Pink_800x800.webm`,
                            purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/NecromancyCircleIntro_02_Regular_Purple_800x800.webm`,
                            red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/NecromancyCircleIntro_02_Regular_Red_800x800.webm`,
                            yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/NecromancyCircleIntro_02_Regular_Yellow_800x800.webm`
                        },
                        loop: {
                            dark_blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/NecromancyCircleLoop_02_Dark_Blue_800x800.webm`,
                            dark_green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/NecromancyCircleLoop_02_Dark_Green_800x800.webm`,
                            dark_pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/NecromancyCircleLoop_02_Dark_Pink_800x800.webm`,
                            dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/NecromancyCircleLoop_02_Dark_Purple_800x800.webm`,
                            dark_red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/NecromancyCircleLoop_02_Dark_Red_800x800.webm`,
                            dark_yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/NecromancyCircleLoop_02_Dark_Yellow_800x800.webm`,
                            blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/NecromancyCircleLoop_02_Regular_Blue_800x800.webm`,
                            green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/NecromancyCircleLoop_02_Regular_Green_800x800.webm`,
                            pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/NecromancyCircleLoop_02_Regular_Pink_800x800.webm`,
                            purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/NecromancyCircleLoop_02_Regular_Purple_800x800.webm`,
                            red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/NecromancyCircleLoop_02_Regular_Red_800x800.webm`,
                            yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/NecromancyCircleLoop_02_Regular_Yellow_800x800.webm`
                        },
                        outro: {
                            dark_blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/NecromancyCircleOutro_02_Dark_Blue_800x800.webm`,
                            dark_green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/NecromancyCircleOutro_02_Dark_Green_800x800.webm`,
                            dark_pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/NecromancyCircleOutro_02_Dark_Pink_800x800.webm`,
                            dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/NecromancyCircleOutro_02_Dark_Purple_800x800.webm`,
                            dark_red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/NecromancyCircleOutro_02_Dark_Red_800x800.webm`,
                            dark_yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/NecromancyCircleOutro_02_Dark_Yellow_800x800.webm`,
                            blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/NecromancyCircleOutro_02_Regular_Blue_800x800.webm`,
                            green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/NecromancyCircleOutro_02_Regular_Green_800x800.webm`,
                            pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/NecromancyCircleOutro_02_Regular_Pink_800x800.webm`,
                            purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/NecromancyCircleOutro_02_Regular_Purple_800x800.webm`,
                            red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/NecromancyCircleOutro_02_Regular_Red_800x800.webm`,
                            yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/NecromancyCircleOutro_02_Regular_Yellow_800x800.webm`
                        }
                    },
                    transmutation: {
                        intro: {
                            dark_blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/TransmutationCircleIntro_02_Dark_Blue_800x800.webm`,
                            dark_green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/TransmutationCircleIntro_02_Dark_Green_800x800.webm`,
                            dark_pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/TransmutationCircleIntro_02_Dark_Pink_800x800.webm`,
                            dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/TransmutationCircleIntro_02_Dark_Purple_800x800.webm`,
                            dark_red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/TransmutationCircleIntro_02_Dark_Red_800x800.webm`,
                            dark_yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/TransmutationCircleIntro_02_Dark_Yellow_800x800.webm`,
                            blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/TransmutationCircleIntro_02_Regular_Blue_800x800.webm`,
                            green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/TransmutationCircleIntro_02_Regular_Green_800x800.webm`,
                            pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/TransmutationCircleIntro_02_Regular_Pink_800x800.webm`,
                            purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/TransmutationCircleIntro_02_Regular_Purple_800x800.webm`,
                            red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/TransmutationCircleIntro_02_Regular_Red_800x800.webm`,
                            yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/TransmutationCircleIntro_02_Regular_Yellow_800x800.webm`
                        },
                        loop: {
                            dark_blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/TransmutationCircleLoop_02_Dark_Blue_800x800.webm`,
                            dark_green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/TransmutationCircleLoop_02_Dark_Green_800x800.webm`,
                            dark_pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/TransmutationCircleLoop_02_Dark_Pink_800x800.webm`,
                            dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/TransmutationCircleLoop_02_Dark_Purple_800x800.webm`,
                            dark_red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/TransmutationCircleLoop_02_Dark_Red_800x800.webm`,
                            dark_yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/TransmutationCircleLoop_02_Dark_Yellow_800x800.webm`,
                            blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/TransmutationCircleLoop_02_Regular_Blue_800x800.webm`,
                            green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/TransmutationCircleLoop_02_Regular_Green_800x800.webm`,
                            pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/TransmutationCircleLoop_02_Regular_Pink_800x800.webm`,
                            purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/TransmutationCircleLoop_02_Regular_Purple_800x800.webm`,
                            red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/TransmutationCircleLoop_02_Regular_Red_800x800.webm`,
                            yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/TransmutationCircleLoop_02_Regular_Yellow_800x800.webm`
                        },
                        outro: {
                            dark_blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/TransmutationCircleOutro_02_Dark_Blue_800x800.webm`,
                            dark_green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/TransmutationCircleOutro_02_Dark_Green_800x800.webm`,
                            dark_pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/TransmutationCircleOutro_02_Dark_Pink_800x800.webm`,
                            dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/TransmutationCircleOutro_02_Dark_Purple_800x800.webm`,
                            dark_red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/TransmutationCircleOutro_02_Dark_Red_800x800.webm`,
                            dark_yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/TransmutationCircleOutro_02_Dark_Yellow_800x800.webm`,
                            blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/TransmutationCircleOutro_02_Regular_Blue_800x800.webm`,
                            green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/TransmutationCircleOutro_02_Regular_Green_800x800.webm`,
                            pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/TransmutationCircleOutro_02_Regular_Pink_800x800.webm`,
                            purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/TransmutationCircleOutro_02_Regular_Purple_800x800.webm`,
                            red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/TransmutationCircleOutro_02_Regular_Red_800x800.webm`,
                            yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/TransmutationCircleOutro_02_Regular_Yellow_800x800.webm`
                        }
                    }
                }
            },
            rune: {
                abjuration: {
                    intro: {
                        blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/AbjurationRuneIntro_01_Regular_Blue_400x400.webm`,
                        green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/AbjurationRuneIntro_01_Regular_Green_400x400.webm`,
                        pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/AbjurationRuneIntro_01_Regular_Pink_400x400.webm`,
                        purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/AbjurationRuneIntro_01_Regular_Purple_400x400.webm`,
                        red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/AbjurationRuneIntro_01_Regular_Red_400x400.webm`,
                        yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/AbjurationRuneIntro_01_Regular_Yellow_400x400.webm`
                    },
                    loop: {
                        blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/AbjurationRuneLoop_01_Regular_Blue_400x400.webm`,
                        green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/AbjurationRuneLoop_01_Regular_Green_400x400.webm`,
                        pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/AbjurationRuneLoop_01_Regular_Pink_400x400.webm`,
                        purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/AbjurationRuneLoop_01_Regular_Purple_400x400.webm`,
                        red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/AbjurationRuneLoop_01_Regular_Red_400x400.webm`,
                        yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/AbjurationRuneLoop_01_Regular_Yellow_400x400.webm`
                    },
                    outro: {
                        blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/AbjurationRuneOutro_01_Regular_Blue_400x400.webm`,
                        green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/AbjurationRuneOutro_01_Regular_Green_400x400.webm`,
                        pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/AbjurationRuneOutro_01_Regular_Pink_400x400.webm`,
                        purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/AbjurationRuneOutro_01_Regular_Purple_400x400.webm`,
                        red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/AbjurationRuneOutro_01_Regular_Red_400x400.webm`,
                        yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/AbjurationRuneOutro_01_Regular_Yellow_400x400.webm`
                    }
                },
                conjuration: {
                    intro: {
                        blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/ConjurationRuneIntro_01_Regular_Blue_400x400.webm`,
                        green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/ConjurationRuneIntro_01_Regular_Green_400x400.webm`,
                        pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/ConjurationRuneIntro_01_Regular_Pink_400x400.webm`,
                        purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/ConjurationRuneIntro_01_Regular_Purple_400x400.webm`,
                        red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/ConjurationRuneIntro_01_Regular_Red_400x400.webm`,
                        yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/ConjurationRuneIntro_01_Regular_Yellow_400x400.webm`
                    },
                    loop: {
                        blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/ConjurationRuneLoop_01_Regular_Blue_400x400.webm`,
                        green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/ConjurationRuneLoop_01_Regular_Green_400x400.webm`,
                        pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/ConjurationRuneLoop_01_Regular_Pink_400x400.webm`,
                        purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/ConjurationRuneLoop_01_Regular_Purple_400x400.webm`,
                        red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/ConjurationRuneLoop_01_Regular_Red_400x400.webm`,
                        yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/ConjurationRuneLoop_01_Regular_Yellow_400x400.webm`
                    },
                    outro: {
                        blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/ConjurationRuneOutro_01_Regular_Blue_400x400.webm`,
                        green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/ConjurationRuneOutro_01_Regular_Green_400x400.webm`,
                        pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/ConjurationRuneOutro_01_Regular_Pink_400x400.webm`,
                        purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/ConjurationRuneOutro_01_Regular_Purple_400x400.webm`,
                        red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/ConjurationRuneOutro_01_Regular_Red_400x400.webm`,
                        yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/ConjurationRuneOutro_01_Regular_Yellow_400x400.webm`
                    }
                },
                divination: {
                    intro: {
                        blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/DivinationRuneIntro_01_Regular_Blue_400x400.webm`,
                        green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/DivinationRuneIntro_01_Regular_Green_400x400.webm`,
                        pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/DivinationRuneIntro_01_Regular_Pink_400x400.webm`,
                        purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/DivinationRuneIntro_01_Regular_Purple_400x400.webm`,
                        red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/DivinationRuneIntro_01_Regular_Red_400x400.webm`,
                        yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/DivinationRuneIntro_01_Regular_Yellow_400x400.webm`
                    },
                    loop: {
                        blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/DivinationRuneLoop_01_Regular_Blue_400x400.webm`,
                        green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/DivinationRuneLoop_01_Regular_Green_400x400.webm`,
                        pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/DivinationRuneLoop_01_Regular_Pink_400x400.webm`,
                        purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/DivinationRuneLoop_01_Regular_Purple_400x400.webm`,
                        red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/DivinationRuneLoop_01_Regular_Red_400x400.webm`,
                        yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/DivinationRuneLoop_01_Regular_Yellow_400x400.webm`
                    },
                    outro: {
                        blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/DivinationRuneOutro_01_Regular_Blue_400x400.webm`,
                        green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/DivinationRuneOutro_01_Regular_Green_400x400.webm`,
                        pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/DivinationRuneOutro_01_Regular_Pink_400x400.webm`,
                        purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/DivinationRuneOutro_01_Regular_Purple_400x400.webm`,
                        red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/DivinationRuneOutro_01_Regular_Red_400x400.webm`,
                        yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/DivinationRuneOutro_01_Regular_Yellow_400x400.webm`
                    }
                },
                enchantment: {
                    intro: {
                        blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/EnchantmentRuneIntro_01_Regular_Blue_400x400.webm`,
                        green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/EnchantmentRuneIntro_01_Regular_Green_400x400.webm`,
                        pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/EnchantmentRuneIntro_01_Regular_Pink_400x400.webm`,
                        purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/EnchantmentRuneIntro_01_Regular_Purple_400x400.webm`,
                        red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/EnchantmentRuneIntro_01_Regular_Red_400x400.webm`,
                        yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/EnchantmentRuneIntro_01_Regular_Yellow_400x400.webm`
                    },
                    loop: {
                        blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/EnchantmentRuneLoop_01_Regular_Blue_400x400.webm`,
                        green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/EnchantmentRuneLoop_01_Regular_Green_400x400.webm`,
                        pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/EnchantmentRuneLoop_01_Regular_Pink_400x400.webm`,
                        purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/EnchantmentRuneLoop_01_Regular_Purple_400x400.webm`,
                        red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/EnchantmentRuneLoop_01_Regular_Red_400x400.webm`,
                        yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/EnchantmentRuneLoop_01_Regular_Yellow_400x400.webm`
                    },
                    outro: {
                        blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/EnchantmentRuneOutro_01_Regular_Blue_400x400.webm`,
                        green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/EnchantmentRuneOutro_01_Regular_Green_400x400.webm`,
                        pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/EnchantmentRuneOutro_01_Regular_Pink_400x400.webm`,
                        purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/EnchantmentRuneOutro_01_Regular_Purple_400x400.webm`,
                        red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/EnchantmentRuneOutro_01_Regular_Red_400x400.webm`,
                        yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/EnchantmentRuneOutro_01_Regular_Yellow_400x400.webm`
                    }
                },
                evocation: {
                    intro: {
                        blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/EvocationRuneIntro_01_Regular_Blue_400x400.webm`,
                        green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/EvocationRuneIntro_01_Regular_Green_400x400.webm`,
                        pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/EvocationRuneIntro_01_Regular_Pink_400x400.webm`,
                        purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/EvocationRuneIntro_01_Regular_Purple_400x400.webm`,
                        red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/EvocationRuneIntro_01_Regular_Red_400x400.webm`,
                        yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/EvocationRuneIntro_01_Regular_Yellow_400x400.webm`
                    },
                    loop: {
                        blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/EvocationRuneLoop_01_Regular_Blue_400x400.webm`,
                        green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/EvocationRuneLoop_01_Regular_Green_400x400.webm`,
                        pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/EvocationRuneLoop_01_Regular_Pink_400x400.webm`,
                        purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/EvocationRuneLoop_01_Regular_Purple_400x400.webm`,
                        red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/EvocationRuneLoop_01_Regular_Red_400x400.webm`,
                        yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/EvocationRuneLoop_01_Regular_Yellow_400x400.webm`
                    },
                    outro: {
                        blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/EvocationRuneOutro_01_Regular_Blue_400x400.webm`,
                        green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/EvocationRuneOutro_01_Regular_Green_400x400.webm`,
                        pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/EvocationRuneOutro_01_Regular_Pink_400x400.webm`,
                        purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/EvocationRuneOutro_01_Regular_Purple_400x400.webm`,
                        red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/EvocationRuneOutro_01_Regular_Red_400x400.webm`,
                        yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/EvocationRuneOutro_01_Regular_Yellow_400x400.webm`
                    }
                },
                illusion: {
                    intro: {
                        blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/IllusionRuneIntro_01_Regular_Blue_400x400.webm`,
                        green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/IllusionRuneIntro_01_Regular_Green_400x400.webm`,
                        pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/IllusionRuneIntro_01_Regular_Pink_400x400.webm`,
                        purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/IllusionRuneIntro_01_Regular_Purple_400x400.webm`,
                        red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/IllusionRuneIntro_01_Regular_Red_400x400.webm`,
                        yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/IllusionRuneIntro_01_Regular_Yellow_400x400.webm`
                    },
                    loop: {
                        blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/IllusionRuneLoop_01_Regular_Blue_400x400.webm`,
                        green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/IllusionRuneLoop_01_Regular_Green_400x400.webm`,
                        pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/IllusionRuneLoop_01_Regular_Pink_400x400.webm`,
                        purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/IllusionRuneLoop_01_Regular_Purple_400x400.webm`,
                        red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/IllusionRuneLoop_01_Regular_Red_400x400.webm`,
                        yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/IllusionRuneLoop_01_Regular_Yellow_400x400.webm`
                    },
                    outro: {
                        blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/IllusionRuneOutro_01_Regular_Blue_400x400.webm`,
                        green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/IllusionRuneOutro_01_Regular_Green_400x400.webm`,
                        pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/IllusionRuneOutro_01_Regular_Pink_400x400.webm`,
                        purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/IllusionRuneOutro_01_Regular_Purple_400x400.webm`,
                        red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/IllusionRuneOutro_01_Regular_Red_400x400.webm`,
                        yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/IllusionRuneOutro_01_Regular_Yellow_400x400.webm`
                    }
                },
                necromancy: {
                    intro: {
                        blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/NecromancyRuneIntro_01_Regular_Blue_400x400.webm`,
                        green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/NecromancyRuneIntro_01_Regular_Green_400x400.webm`,
                        pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/NecromancyRuneIntro_01_Regular_Pink_400x400.webm`,
                        purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/NecromancyRuneIntro_01_Regular_Purple_400x400.webm`,
                        red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/NecromancyRuneIntro_01_Regular_Red_400x400.webm`,
                        yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/NecromancyRuneIntro_01_Regular_Yellow_400x400.webm`
                    },
                    loop: {
                        blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/NecromancyRuneLoop_01_Regular_Blue_400x400.webm`,
                        green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/NecromancyRuneLoop_01_Regular_Green_400x400.webm`,
                        pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/NecromancyRuneLoop_01_Regular_Pink_400x400.webm`,
                        purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/NecromancyRuneLoop_01_Regular_Purple_400x400.webm`,
                        red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/NecromancyRuneLoop_01_Regular_Red_400x400.webm`,
                        yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/NecromancyRuneLoop_01_Regular_Yellow_400x400.webm`
                    },
                    outro: {
                        blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/NecromancyRuneOutro_01_Regular_Blue_400x400.webm`,
                        green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/NecromancyRuneOutro_01_Regular_Green_400x400.webm`,
                        pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/NecromancyRuneOutro_01_Regular_Pink_400x400.webm`,
                        purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/NecromancyRuneOutro_01_Regular_Purple_400x400.webm`,
                        red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/NecromancyRuneOutro_01_Regular_Red_400x400.webm`,
                        yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/NecromancyRuneOutro_01_Regular_Yellow_400x400.webm`
                    }
                },
                transmutation: {
                    intro: {
                        blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/TransmutationRuneIntro_01_Regular_Blue_400x400.webm`,
                        green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/TransmutationRuneIntro_01_Regular_Green_400x400.webm`,
                        pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/TransmutationRuneIntro_01_Regular_Pink_400x400.webm`,
                        purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/TransmutationRuneIntro_01_Regular_Purple_400x400.webm`,
                        red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/TransmutationRuneIntro_01_Regular_Red_400x400.webm`,
                        yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/TransmutationRuneIntro_01_Regular_Yellow_400x400.webm`
                    },
                    loop: {
                        blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/TransmutationRuneLoop_01_Regular_Blue_400x400.webm`,
                        green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/TransmutationRuneLoop_01_Regular_Green_400x400.webm`,
                        pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/TransmutationRuneLoop_01_Regular_Pink_400x400.webm`,
                        purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/TransmutationRuneLoop_01_Regular_Purple_400x400.webm`,
                        red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/TransmutationRuneLoop_01_Regular_Red_400x400.webm`,
                        yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/TransmutationRuneLoop_01_Regular_Yellow_400x400.webm`
                    },
                    outro: {
                        blue: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/TransmutationRuneOutro_01_Regular_Blue_400x400.webm`,
                        green: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/TransmutationRuneOutro_01_Regular_Green_400x400.webm`,
                        pink: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/TransmutationRuneOutro_01_Regular_Pink_400x400.webm`,
                        purple: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/TransmutationRuneOutro_01_Regular_Purple_400x400.webm`,
                        red: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/TransmutationRuneOutro_01_Regular_Red_400x400.webm`,
                        yellow: `${prefix}/jb2a_patreon/Library/Generic/Magic_Signs/Runes/TransmutationRuneOutro_01_Regular_Yellow_400x400.webm`
                    }
                }
            }
        },
        patreonDatabase.markers = {
            '01': {
                blueyellow: `${prefix}/jb2a_patreon/Library/Generic/Marker/Marker_01_Regular_BlueYellow_400x400.webm`,
                dark_bluewhite: `${prefix}/jb2a_patreon/Library/Generic/Marker/Marker_01_Dark_BlueWhite_400x400.webm`,
                greenorange: `${prefix}/jb2a_patreon/Library/Generic/Marker/Marker_01_Regular_GreenOrange_400x400.webm`,
                pink: `${prefix}/jb2a_patreon/Library/Generic/Marker/Marker_01_Regular_Pink_400x400.webm`,
                purplepink: `${prefix}/jb2a_patreon/Library/Generic/Marker/Marker_01_Regular_PurplePink_400x400.webm`,
                red: `${prefix}/jb2a_patreon/Library/Generic/Marker/Marker_01_Regular_Red_400x400.webm`
            },
            '02': {
                blueyellow: `${prefix}/jb2a_patreon/Library/Generic/Marker/Marker_02_Regular_BlueYellow_400x400.webm`,
                dark_bluewhite: `${prefix}/jb2a_patreon/Library/Generic/Marker/Marker_02_Dark_BlueWhite_400x400.webm`,
                greenorange: `${prefix}/jb2a_patreon/Library/Generic/Marker/Marker_02_Regular_GreenOrange_400x400.webm`,
                pink: `${prefix}/jb2a_patreon/Library/Generic/Marker/Marker_02_Regular_Pink_400x400.webm`,
                purplepink: `${prefix}/jb2a_patreon/Library/Generic/Marker/Marker_02_Regular_PurplePink_400x400.webm`,
                red: `${prefix}/jb2a_patreon/Library/Generic/Marker/Marker_02_Regular_Red_400x400.webm`
            },
            bubble: {
                intro: {
                    blue: `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerBubbleIntro_01_Regular_Blue_400x400.webm`,
                    green: `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerBubbleIntro_01_Regular_Green_400x400.webm`,
                    rainbow: `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerBubbleIntro_01_Regular_Rainbow_400x400.webm`
                },
                loop: {
                    blue: `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerBubble_01_Regular_Blue_400x400.webm`,
                    green: `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerBubble_01_Regular_Green_400x400.webm`,
                    rainbow: `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerBubble_01_Regular_Rainbow_400x400.webm`
                },
                outro: {
                    blue: `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerBubbleOutro_01_Regular_Blue_400x400.webm`,
                    green: `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerBubbleOutro_01_Regular_Green_400x400.webm`,
                    rainbow: `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerBubbleOutro_01_Regular_Rainbow_400x400.webm`
                }
            },
            circle_of_stars: {
                blue: `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerCircleOfStars_Regular_Blue_400x400.webm`,
                green: `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerCircleOfStars_Regular_Green_400x400.webm`,
                greenorange: `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerCircleOfStars_Regular_GreenOrange_400x400.webm`,
                orangepurple: `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerCircleOfStars_Regular_OrangePurple_400x400.webm`,
                purplegreen: `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerCircleOfStars_Regular_PurpleGreen_400x400.webm`,
                yellowblue: `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerCircleOfStars_Regular_YellowBlue_400x400.webm`
            },
            drop: {
                dark_green: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerDrop_01_Dark_Green_400x400.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerDrop_02_Dark_Green_400x400.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerDrop_03_Dark_Green_400x400.webm`
                },
                red: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerDrop_01_Regular_Red_400x400.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerDrop_02_Regular_Red_400x400.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerDrop_03_Regular_Red_400x400.webm`
                }
            },
            fear: {
                dark_orange: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerFear_01_Dark_Orange_400x400.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerFear_02_Dark_Orange_400x400.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerFear_03_Dark_Orange_400x400.webm`
                },
                dark_purple: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerFear_01_Dark_Purple_400x400.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerFear_02_Dark_Purple_400x400.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerFear_03_Dark_Purple_400x400.webm`
                },
                orange: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerFear_01_Regular_Orange_400x400.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerFear_02_Regular_Orange_400x400.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerFear_03_Regular_Orange_400x400.webm`
                }
            },
            heart: {
                dark_red: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerHeart_01_Dark_Red_400x400.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerHeart_02_Dark_Red_400x400.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerHeart_03_Dark_Red_400x400.webm`
                },
                pink: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerHeart_01_Regular_Pink_400x400.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerHeart_02_Regular_Pink_400x400.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerHeart_03_Regular_Pink_400x400.webm`
                },
                teal: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerHeart_01_Regular_Teal_400x400.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerHeart_02_Regular_Teal_400x400.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerHeart_03_Regular_Teal_400x400.webm`
                }
            },
            horror: {
                dark_teal: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerHorror_01_Dark_Teal_400x400.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerHorror_02_Dark_Teal_400x400.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerHorror_03_Dark_Teal_400x400.webm`
                },
                purple: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerHorror_01_Regular_Purple_400x400.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerHorror_02_Regular_Purple_400x400.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerHorror_03_Regular_Purple_400x400.webm`
                },
                teal: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerHorror_01_Regular_Teal_400x400.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerHorror_02_Regular_Teal_400x400.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerHorror_03_Regular_Teal_400x400.webm`
                }
            },
            music: {
                blueyellow: `${prefix}/jb2a_patreon/Library/Generic/Marker/MusicMarker_01_Regular_BlueYellow_400x400.webm`,
                dark_red: `${prefix}/jb2a_patreon/Library/Generic/Marker/MusicMarker_01_Dark_Red_400x400.webm`,
                greenorange: `${prefix}/jb2a_patreon/Library/Generic/Marker/MusicMarker_01_Regular_GreenOrange_400x400.webm`,
                purplepink: `${prefix}/jb2a_patreon/Library/Generic/Marker/MusicMarker_01_Regular_PurplePink_400x400.webm`,
                pink: `${prefix}/jb2a_patreon/Library/Generic/Marker/MusicMarker_01_Regular_Pink_400x400.webm`
            },
            music_note: {
                dark_red: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerMusicNote_01_Dark_Red_400x400.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerMusicNote_02_Dark_Red_400x400.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerMusicNote_03_Dark_Red_400x400.webm`
                },
                blue: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerMusicNote_01_Regular_Blue_400x400.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerMusicNote_02_Regular_Blue_400x400.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerMusicNote_03_Regular_Blue_400x400.webm`
                },
                purple: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerMusicNote_01_Regular_Purple_400x400.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerMusicNote_02_Regular_Purple_400x400.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerMusicNote_03_Regular_Purple_400x400.webm`
                }
            },
            light: {
                intro: {
                    blue: `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerLightIntro_01_Regular_Blue_400x400.webm`,
                    green: `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerLightIntro_01_Regular_Green_400x400.webm`,
                    yellow: `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerLightIntro_01_Regular_Yellow_400x400.webm`
                },
                loop: {
                    blue: `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerLight_01_Regular_Blue_400x400.webm`,
                    green: `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerLight_01_Regular_Green_400x400.webm`,
                    yellow: `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerLight_01_Regular_Yellow_400x400.webm`
                },
                nopulse: {
                    blue: `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerLightNoPulse_01_Regular_Blue_400x400.webm`,
                    green: `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerLightNoPulse_01_Regular_Green_400x400.webm`,
                    yellow: `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerLightNoPulse_01_Regular_Yellow_400x400.webm`
                },
                outro: {
                    blue: `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerLightOutro_01_Regular_Blue_400x400.webm`,
                    green: `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerLightOutro_01_Regular_Green_400x400.webm`,
                    yellow: `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerLightOutro_01_Regular_Yellow_400x400.webm`
                }
            },
            poison: {
                dark_green: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerPoison_01_Dark_Green_400x400.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerPoison_02_Dark_Green_400x400.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerPoison_03_Dark_Green_400x400.webm`
                },
                purple: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerPoison_01_Regular_Purple_400x400.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerPoison_02_Regular_Purple_400x400.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerPoison_03_Regular_Purple_400x400.webm`
                }
            },
            runes: {
                dark_black: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes_01_Dark_Black_400x400.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes_02_Dark_Black_400x400.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes_03_Dark_Black_400x400.webm`
                },
                dark_orange: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes_01_Dark_Orange_400x400.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes_02_Dark_Orange_400x400.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes_03_Dark_Orange_400x400.webm`
                },
                dark_red: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes_01_Dark_Red_400x400.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes_02_Dark_Red_400x400.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes_03_Dark_Red_400x400.webm`
                },
                blue: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes_01_Regular_Blue_400x400.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes_02_Regular_Blue_400x400.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes_03_Regular_Blue_400x400.webm`
                },
                green02: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes_01_Regular_Green02_400x400.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes_02_Regular_Green02_400x400.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes_03_Regular_Green02_400x400.webm`
                },
                orange: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes_01_Regular_Orange_400x400.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes_02_Regular_Orange_400x400.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes_03_Regular_Orange_400x400.webm`
                },
                red: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes_01_Regular_Red_400x400.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes_02_Regular_Red_400x400.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes_03_Regular_Red_400x400.webm`
                },
                white: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes_01_Regular_White_400x400.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes_02_Regular_White_400x400.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes_03_Regular_White_400x400.webm`
                },
                yellow: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes_01_Regular_Yellow_400x400.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes_02_Regular_Yellow_400x400.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes_03_Regular_Yellow_400x400.webm`
                },
            },
            runes02: {
                dark_black: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes02_01_Dark_Black_400x400.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes02_02_Dark_Black_400x400.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes02_03_Dark_Black_400x400.webm`
                },
                dark_orange: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes02_01_Dark_Orange_400x400.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes02_02_Dark_Orange_400x400.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes02_03_Dark_Orange_400x400.webm`
                },
                dark_red: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes02_01_Dark_Red_400x400.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes02_02_Dark_Red_400x400.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes02_03_Dark_Red_400x400.webm`
                },
                blue: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes02_01_Regular_Blue_400x400.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes02_02_Regular_Blue_400x400.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes02_03_Regular_Blue_400x400.webm`
                },
                green02: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes02_01_Regular_Green02_400x400.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes02_02_Regular_Green02_400x400.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes02_03_Regular_Green02_400x400.webm`
                },
                orange: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes02_01_Regular_Orange_400x400.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes02_02_Regular_Orange_400x400.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes02_03_Regular_Orange_400x400.webm`
                },
                red: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes02_01_Regular_Red_400x400.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes02_02_Regular_Red_400x400.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes02_03_Regular_Red_400x400.webm`
                },
                white: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes02_01_Regular_White_400x400.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes02_02_Regular_White_400x400.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes02_03_Regular_White_400x400.webm`
                },
                yellow: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes02_01_Regular_Yellow_400x400.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes02_02_Regular_Yellow_400x400.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes02_03_Regular_Yellow_400x400.webm`
                }
            },
            runes03: {
                dark_black: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes03_01_Dark_Black_400x400.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes03_02_Dark_Black_400x400.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes03_03_Dark_Black_400x400.webm`
                },
                dark_orange: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes03_01_Dark_Orange_400x400.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes03_02_Dark_Orange_400x400.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes03_03_Dark_Orange_400x400.webm`
                },
                dark_red: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes03_01_Dark_Red_400x400.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes03_02_Dark_Red_400x400.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes03_03_Dark_Red_400x400.webm`
                },
                blue: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes03_01_Regular_Blue_400x400.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes03_02_Regular_Blue_400x400.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes03_03_Regular_Blue_400x400.webm`
                },
                green02: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes03_01_Regular_Green02_400x400.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes03_02_Regular_Green02_400x400.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes03_03_Regular_Green02_400x400.webm`
                },
                orange: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes03_01_Regular_Orange_400x400.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes03_02_Regular_Orange_400x400.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes03_03_Regular_Orange_400x400.webm`
                },
                red: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes03_01_Regular_Red_400x400.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes03_02_Regular_Red_400x400.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes03_03_Regular_Red_400x400.webm`
                },
                white: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes03_01_Regular_White_400x400.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes03_02_Regular_White_400x400.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes03_03_Regular_White_400x400.webm`
                },
                yellow: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes03_01_Regular_Yellow_400x400.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes03_02_Regular_Yellow_400x400.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerRunes03_03_Regular_Yellow_400x400.webm`
                }
            },
            shield: {
                dark_red: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerShield_01_Dark_Red_400x400.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerShield_02_Dark_Red_400x400.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerShield_03_Dark_Red_400x400.webm`
                },
                green: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerShield_01_Regular_Green_400x400.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerShield_02_Regular_Green_400x400.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerShield_03_Regular_Green_400x400.webm`
                },
            },
            shield_cracked: {
                dark_red: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerShieldCracked_01_Dark_Red_400x400.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerShieldCracked_02_Dark_Red_400x400.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerShieldCracked_03_Dark_Red_400x400.webm`
                },
                purple: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerShieldCracked_01_Regular_Purple_400x400.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerShieldCracked_02_Regular_Purple_400x400.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerShieldCracked_03_Regular_Purple_400x400.webm`
                }
            },
            skull: {
                dark_green: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerSkull_01_Dark_Green_400x400.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerSkull_02_Dark_Green_400x400.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerSkull_03_Dark_Green_400x400.webm`
                },
                dark_orange: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerSkull_01_Dark_Orange_400x400.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerSkull_02_Dark_Orange_400x400.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerSkull_03_Dark_Orange_400x400.webm`
                },
                purple: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerSkull_01_Regular_Purple_400x400.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerSkull_02_Regular_Purple_400x400.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerSkull_03_Regular_Purple_400x400.webm`
                }
            },
            snowflake: {
                dark_blue: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerSnowflake_01_Dark_Blue_400x400.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerSnowflake_02_Dark_Blue_400x400.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerSnowflake_03_Dark_Blue_400x400.webm`
                },
                blue: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerSnowflake_01_Regular_Blue_400x400.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerSnowflake_02_Regular_Blue_400x400.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerSnowflake_03_Regular_Blue_400x400.webm`
                }
            },
            stun: {
                dark_teal: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerStun_01_Dark_Teal_400x400.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerStun_02_Dark_Teal_400x400.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerStun_03_Dark_Teal_400x400.webm`
                },
                purple: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerStun_01_Regular_Purple_400x400.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerStun_02_Regular_Purple_400x400.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Marker/MarkerStun_03_Regular_Purple_400x400.webm`
                }
            }
        },
        patreonDatabase.maul = {
            melee: {
                _template: 'melee',
                fire: {
                    blue: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Maul01_Fire_Regular_Blue_800x600.webm`,
                    dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Maul01_Fire_Dark_Purple_800x600.webm`,
                    green: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Maul01_Fire_Regular_Green_800x600.webm`,
                    orange: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Maul01_Fire_Regular_Orange_800x600.webm`,
                    pink: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Maul01_Fire_Regular_Pink_800x600.webm`,
                    red: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Maul01_Fire_Regular_Red_800x600.webm`,
                    yellow: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Maul01_Fire_Regular_Yellow_800x600.webm`
                },
                standard: {
                    white: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Maul01_01_Regular_White_800x600.webm`
                }
            }
        },
        patreonDatabase.melee_generic = {
            _template: "melee",
            bludgeoning: {
                one_handed: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/DmgBludgeoning_01_Regular_Yellow_1Handed_800x600.webm`,
                two_handed: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/DmgBludgeoning_01_Regular_Yellow_2Handed_800x600.webm`
            },
            piercing: {
                one_handed: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/DmgPiercing_01_Regular_Yellow_1Handed_800x600.webm`,
                two_handed: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/DmgPiercing_01_Regular_Yellow_2Handed_800x600.webm`
            },
            slashing: {
                one_handed: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/DmgSlashing_01_Regular_Yellow_1Handed_800x600.webm`,
                two_handed: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/DmgSlashing_01_Regular_Yellow_2Handed_800x600.webm`
            },
        },
        patreonDatabase.moonbeam = {
            '01': {
                loop: {
                    blue: `${prefix}/jb2a_patreon/Library/2nd_Level/Moonbeam/Moonbeam_01_Regular_Blue_400x400.webm`,
                    green: `${prefix}/jb2a_patreon/Library/2nd_Level/Moonbeam/Moonbeam_01_Regular_Green_400x400.webm`,
                    rainbow: `${prefix}/jb2a_patreon/Library/2nd_Level/Moonbeam/Moonbeam_01_Regular_Rainbow_400x400.webm`
                },
                no_pulse: {
                    blue: `${prefix}/jb2a_patreon/Library/2nd_Level/Moonbeam/MoonbeamNoPulse_01_Regular_Blue_400x400.webm`,
                    green: `${prefix}/jb2a_patreon/Library/2nd_Level/Moonbeam/MoonbeamNoPulse_01_Regular_Green_400x400.webm`,
                    rainbow: `${prefix}/jb2a_patreon/Library/2nd_Level/Moonbeam/MoonbeamNoPulse_01_Regular_Rainbow_400x400.webm`
                },
                intro: {
                    blue: `${prefix}/jb2a_patreon/Library/2nd_Level/Moonbeam/MoonbeamIntro_01_Regular_Blue_400x400.webm`,
                    green: `${prefix}/jb2a_patreon/Library/2nd_Level/Moonbeam/MoonbeamIntro_01_Regular_Green_400x400.webm`,
                    rainbow: `${prefix}/jb2a_patreon/Library/2nd_Level/Moonbeam/MoonbeamIntro_01_Regular_Rainbow_400x400.webm`
                },
                outro: {
                    blue: `${prefix}/jb2a_patreon/Library/2nd_Level/Moonbeam/MoonbeamOutro_01_Regular_Blue_400x400.webm`,
                    green: `${prefix}/jb2a_patreon/Library/2nd_Level/Moonbeam/MoonbeamOutro_01_Regular_Green_400x400.webm`,
                    rainbow: `${prefix}/jb2a_patreon/Library/2nd_Level/Moonbeam/MoonbeamOutro_01_Regular_Rainbow_400x400.webm`
                }
            }
        },
        patreonDatabase.misty_step = {
            '01': {
                blue: `${prefix}/jb2a_patreon/Library/2nd_Level/Misty_Step/MistyStep_01_Regular_Blue_400x400.webm`,
                dark_black: `${prefix}/jb2a_patreon/Library/2nd_Level/Misty_Step/MistyStep_01_Dark_Black_400x400.webm`,
                dark_green: `${prefix}/jb2a_patreon/Library/2nd_Level/Misty_Step/MistyStep_01_Dark_Green_400x400.webm`,
                dark_red: `${prefix}/jb2a_patreon/Library/2nd_Level/Misty_Step/MistyStep_01_Dark_Red_400x400.webm`,
                green: `${prefix}/jb2a_patreon/Library/2nd_Level/Misty_Step/MistyStep_01_Regular_Green_400x400.webm`,
                grey: `${prefix}/jb2a_patreon/Library/2nd_Level/Misty_Step/MistyStep_01_Regular_Grey_400x400.webm`,
                orange: `${prefix}/jb2a_patreon/Library/2nd_Level/Misty_Step/MistyStep_01_Regular_Orange_400x400.webm`,
                purple: `${prefix}/jb2a_patreon/Library/2nd_Level/Misty_Step/MistyStep_01_Regular_Purple_400x400.webm`
            },
            '02': {
                blue: `${prefix}/jb2a_patreon/Library/2nd_Level/Misty_Step/MistyStep_02_Regular_Blue_400x400.webm`,
                dark_black: `${prefix}/jb2a_patreon/Library/2nd_Level/Misty_Step/MistyStep_02_Dark_Black_400x400.webm`,
                dark_green: `${prefix}/jb2a_patreon/Library/2nd_Level/Misty_Step/MistyStep_02_Dark_Green_400x400.webm`,
                dark_red: `${prefix}/jb2a_patreon/Library/2nd_Level/Misty_Step/MistyStep_02_Dark_Red_400x400.webm`,
                green: `${prefix}/jb2a_patreon/Library/2nd_Level/Misty_Step/MistyStep_02_Regular_Green_400x400.webm`,
                grey: `${prefix}/jb2a_patreon/Library/2nd_Level/Misty_Step/MistyStep_02_Regular_Grey_400x400.webm`,
                orange: `${prefix}/jb2a_patreon/Library/2nd_Level/Misty_Step/MistyStep_02_Regular_Orange_400x400.webm`,
                purple: `${prefix}/jb2a_patreon/Library/2nd_Level/Misty_Step/MistyStep_02_Regular_Purple_400x400.webm`
            }
        },
        patreonDatabase.music_notations = {
            bass_clef: {
                blue: `${prefix}/jb2a_patreon/Library/Generic/Music_Notation/BassClef_01_Regular_Blue_200x200.webm`,
                green: `${prefix}/jb2a_patreon/Library/Generic/Music_Notation/BassClef_01_Regular_Green_200x200.webm`,
                orange: `${prefix}/jb2a_patreon/Library/Generic/Music_Notation/BassClef_01_Regular_Orange_200x200.webm`,
                purple: `${prefix}/jb2a_patreon/Library/Generic/Music_Notation/BassClef_01_Regular_Purple_200x200.webm`
            },
            beamed_quavers: {
                blue: `${prefix}/jb2a_patreon/Library/Generic/Music_Notation/BeamedQuavers_01_Regular_Blue_200x200.webm`,
                green: `${prefix}/jb2a_patreon/Library/Generic/Music_Notation/BeamedQuavers_01_Regular_Green_200x200.webm`,
                orange: `${prefix}/jb2a_patreon/Library/Generic/Music_Notation/BeamedQuavers_01_Regular_Orange_200x200.webm`,
                purple: `${prefix}/jb2a_patreon/Library/Generic/Music_Notation/BeamedQuavers_01_Regular_Purple_200x200.webm`
            },
            crotchet: {
                blue: `${prefix}/jb2a_patreon/Library/Generic/Music_Notation/Crotchet_01_Regular_Blue_200x200.webm`,
                green: `${prefix}/jb2a_patreon/Library/Generic/Music_Notation/Crotchet_01_Regular_Green_200x200.webm`,
                orange: `${prefix}/jb2a_patreon/Library/Generic/Music_Notation/Crotchet_01_Regular_Orange_200x200.webm`,
                purple: `${prefix}/jb2a_patreon/Library/Generic/Music_Notation/Crotchet_01_Regular_Purple_200x200.webm`
            },
            flat: {
                blue: `${prefix}/jb2a_patreon/Library/Generic/Music_Notation/Flat_01_Regular_Blue_200x200.webm`,
                green: `${prefix}/jb2a_patreon/Library/Generic/Music_Notation/Flat_01_Regular_Green_200x200.webm`,
                orange: `${prefix}/jb2a_patreon/Library/Generic/Music_Notation/Flat_01_Regular_Orange_200x200.webm`,
                purple: `${prefix}/jb2a_patreon/Library/Generic/Music_Notation/Flat_01_Regular_Purple_200x200.webm`
            },
            quaver: {
                blue: `${prefix}/jb2a_patreon/Library/Generic/Music_Notation/Quaver_01_Regular_Blue_200x200.webm`,
                green: `${prefix}/jb2a_patreon/Library/Generic/Music_Notation/Quaver_01_Regular_Green_200x200.webm`,
                orange: `${prefix}/jb2a_patreon/Library/Generic/Music_Notation/Quaver_01_Regular_Orange_200x200.webm`,
                purple: `${prefix}/jb2a_patreon/Library/Generic/Music_Notation/Quaver_01_Regular_Purple_200x200.webm`
            },
            sharp: {
                blue: `${prefix}/jb2a_patreon/Library/Generic/Music_Notation/Sharp_01_Regular_Blue_200x200.webm`,
                green: `${prefix}/jb2a_patreon/Library/Generic/Music_Notation/Sharp_01_Regular_Green_200x200.webm`,
                orange: `${prefix}/jb2a_patreon/Library/Generic/Music_Notation/Sharp_01_Regular_Orange_200x200.webm`,
                purple: `${prefix}/jb2a_patreon/Library/Generic/Music_Notation/Sharp_01_Regular_Purple_200x200.webm`
            },
            treble_clef: {
                blue: `${prefix}/jb2a_patreon/Library/Generic/Music_Notation/TrebleClef_01_Regular_Blue_200x200.webm`,
                green: `${prefix}/jb2a_patreon/Library/Generic/Music_Notation/TrebleClef_01_Regular_Green_200x200.webm`,
                orange: `${prefix}/jb2a_patreon/Library/Generic/Music_Notation/TrebleClef_01_Regular_Orange_200x200.webm`,
                purple: `${prefix}/jb2a_patreon/Library/Generic/Music_Notation/TrebleClef_01_Regular_Purple_200x200.webm`
            }
        },
        patreonDatabase.ouija_planchette = {
            pink: `${prefix}/jb2a_patreon/Library/Generic/Item/OuijaPlanchette_01_Regular_Pink_500x500.webm`
        },
        patreonDatabase.particles = {
            outward: {
                blue: {
                    '01': {
                        '01': `${prefix}/jb2a_patreon/Library/Generic/Particles/ParticlesOutward01_01_Regular_Blue_400x400.webm`,
                        '02': `${prefix}/jb2a_patreon/Library/Generic/Particles/ParticlesOutward01_02_Regular_Blue_400x400.webm`,
                        '03': `${prefix}/jb2a_patreon/Library/Generic/Particles/ParticlesOutward01_03_Regular_Blue_400x400.webm`,
                        '04': `${prefix}/jb2a_patreon/Library/Generic/Particles/ParticlesOutward01_04_Regular_Blue_400x400.webm`,
                        '05': `${prefix}/jb2a_patreon/Library/Generic/Particles/ParticlesOutward01_05_Regular_Blue_400x400.webm`
                    },
                    '02': {
                        '01': `${prefix}/jb2a_patreon/Library/Generic/Particles/ParticlesOutward02_01_Regular_Blue_400x400.webm`,
                        '02': `${prefix}/jb2a_patreon/Library/Generic/Particles/ParticlesOutward02_02_Regular_Blue_400x400.webm`,
                        '03': `${prefix}/jb2a_patreon/Library/Generic/Particles/ParticlesOutward02_03_Regular_Blue_400x400.webm`,
                        '04': `${prefix}/jb2a_patreon/Library/Generic/Particles/ParticlesOutward02_04_Regular_Blue_400x400.webm`,
                        '05': `${prefix}/jb2a_patreon/Library/Generic/Particles/ParticlesOutward02_05_Regular_Blue_400x400.webm`
                    }
                },
                greenyellow: {
                    '01': {
                        '01': `${prefix}/jb2a_patreon/Library/Generic/Particles/ParticlesOutward01_01_Regular_GreenYellow_400x400.webm`,
                        '02': `${prefix}/jb2a_patreon/Library/Generic/Particles/ParticlesOutward01_02_Regular_GreenYellow_400x400.webm`,
                        '03': `${prefix}/jb2a_patreon/Library/Generic/Particles/ParticlesOutward01_03_Regular_GreenYellow_400x400.webm`,
                        '04': `${prefix}/jb2a_patreon/Library/Generic/Particles/ParticlesOutward01_04_Regular_GreenYellow_400x400.webm`,
                        '05': `${prefix}/jb2a_patreon/Library/Generic/Particles/ParticlesOutward01_05_Regular_GreenYellow_400x400.webm`
                    },
                    '02': {
                        '01': `${prefix}/jb2a_patreon/Library/Generic/Particles/ParticlesOutward02_01_Regular_GreenYellow_400x400.webm`,
                        '02': `${prefix}/jb2a_patreon/Library/Generic/Particles/ParticlesOutward02_02_Regular_GreenYellow_400x400.webm`,
                        '03': `${prefix}/jb2a_patreon/Library/Generic/Particles/ParticlesOutward02_03_Regular_GreenYellow_400x400.webm`,
                        '04': `${prefix}/jb2a_patreon/Library/Generic/Particles/ParticlesOutward02_04_Regular_GreenYellow_400x400.webm`,
                        '05': `${prefix}/jb2a_patreon/Library/Generic/Particles/ParticlesOutward02_05_Regular_GreenYellow_400x400.webm`
                    }
                },
                orange: {
                    '01': {
                        '01': `${prefix}/jb2a_patreon/Library/Generic/Particles/ParticlesOutward01_01_Regular_Orange_400x400.webm`,
                        '02': `${prefix}/jb2a_patreon/Library/Generic/Particles/ParticlesOutward01_02_Regular_Orange_400x400.webm`,
                        '03': `${prefix}/jb2a_patreon/Library/Generic/Particles/ParticlesOutward01_03_Regular_Orange_400x400.webm`,
                        '04': `${prefix}/jb2a_patreon/Library/Generic/Particles/ParticlesOutward01_04_Regular_Orange_400x400.webm`,
                        '05': `${prefix}/jb2a_patreon/Library/Generic/Particles/ParticlesOutward01_05_Regular_Orange_400x400.webm`
                    },
                    '02': {
                        '01': `${prefix}/jb2a_patreon/Library/Generic/Particles/ParticlesOutward02_01_Regular_Orange_400x400.webm`,
                        '02': `${prefix}/jb2a_patreon/Library/Generic/Particles/ParticlesOutward02_02_Regular_Orange_400x400.webm`,
                        '03': `${prefix}/jb2a_patreon/Library/Generic/Particles/ParticlesOutward02_03_Regular_Orange_400x400.webm`,
                        '04': `${prefix}/jb2a_patreon/Library/Generic/Particles/ParticlesOutward02_04_Regular_Orange_400x400.webm`,
                        '05': `${prefix}/jb2a_patreon/Library/Generic/Particles/ParticlesOutward02_05_Regular_Orange_400x400.webm`
                    }
                }
            },
            swirl: {
                blue: {
                    '01': {
                        '01': `${prefix}/jb2a_patreon/Library/Generic/Particles/ParticlesSwirl01_01_Regular_Blue_400x400.webm`,
                    },
                    '02': {
                        '01': `${prefix}/jb2a_patreon/Library/Generic/Particles/ParticlesSwirl02_01_Regular_Blue_400x400.webm`
                    }
                },
                greenyellow: {
                    '01': {
                        '01': `${prefix}/jb2a_patreon/Library/Generic/Particles/ParticlesSwirl01_01_Regular_GreenYellow_400x400.webm`,
                    },
                    '02': {
                        '01': `${prefix}/jb2a_patreon/Library/Generic/Particles/ParticlesSwirl02_01_Regular_GreenYellow_400x400.webm`
                    }
                },
                orange: {
                    '01': {
                        '01': `${prefix}/jb2a_patreon/Library/Generic/Particles/ParticlesSwirl01_01_Regular_Orange_400x400.webm`
                    },
                    '02': {
                        '01': `${prefix}/jb2a_patreon/Library/Generic/Particles/ParticlesSwirl02_01_Regular_Orange_400x400.webm`
                    }
                }
            }
        },
        patreonDatabase.portals = {
            horizontal: {
                ring: {
                    blue: `${prefix}/jb2a_patreon/Library/Generic/Portals/Portal_Bright_Blue_H_400x400.webm`,
                    dark_blue: `${prefix}/jb2a_patreon/Library/Generic/Portals/Portal_Dark_Blue_H_400x400.webm`,
                    dark_green: `${prefix}/jb2a_patreon/Library/Generic/Portals/Portal_Dark_Green_H_400x400.webm`,
                    dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Portals/Portal_Dark_Purple_H_400x400.webm`,
                    dark_red: `${prefix}/jb2a_patreon/Library/Generic/Portals/Portal_Dark_Red_H_400x400.webm`,
                    dark_red_yellow: `${prefix}/jb2a_patreon/Library/Generic/Portals/Portal_Dark_RedYellow_H_400x400.webm`,
                    dark_yellow: `${prefix}/jb2a_patreon/Library/Generic/Portals/Portal_Dark_Yellow_H_400x400.webm`,
                    green: `${prefix}/jb2a_patreon/Library/Generic/Portals/Portal_Bright_Green_H_400x400.webm`,
                    orange: `${prefix}/jb2a_patreon/Library/Generic/Portals/Portal_Bright_Orange_H_400x400.webm`,
                    purple: `${prefix}/jb2a_patreon/Library/Generic/Portals/Portal_Bright_Purple_H_400x400.webm`,
                    red: `${prefix}/jb2a_patreon/Library/Generic/Portals/Portal_Bright_Red_H_400x400.webm`,
                    yellow: `${prefix}/jb2a_patreon/Library/Generic/Portals/Portal_Bright_Yellow_H_400x400.webm`
                },
                ring_masked: {
                    blue: `${prefix}/jb2a_patreon/Library/Generic/Portals/Masked/Portal_Bright_Blue_H_NoBG_400x400.webm`,
                    dark_blue: `${prefix}/jb2a_patreon/Library/Generic/Portals/Masked/Portal_Dark_Blue_H_NoBG_400x400.webm`,
                    dark_green: `${prefix}/jb2a_patreon/Library/Generic/Portals/Masked/Portal_Dark_Green_H_NoBG_400x400.webm`,
                    dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Portals/Masked/Portal_Dark_Purple_H_NoBG_400x400.webm`,
                    dark_red: `${prefix}/jb2a_patreon/Library/Generic/Portals/Masked/Portal_Dark_Red_H_NoBG_400x400.webm`,
                    dark_red_yellow: `${prefix}/jb2a_patreon/Library/Generic/Portals/Masked/Portal_Dark_RedYellow_H_NoBG_400x400.webm`,
                    dark_yellow: `${prefix}/jb2a_patreon/Library/Generic/Portals/Masked/Portal_Dark_Yellow_H_NoBG_400x400.webm`,
                    green: `${prefix}/jb2a_patreon/Library/Generic/Portals/Masked/Portal_Bright_Green_H_NoBG_400x400.webm`,
                    orange: `${prefix}/jb2a_patreon/Library/Generic/Portals/Masked/Portal_Bright_Orange_H_NoBG_400x400.webm`,
                    purple: `${prefix}/jb2a_patreon/Library/Generic/Portals/Masked/Portal_Bright_Purple_H_NoBG_400x400.webm`,
                    red: `${prefix}/jb2a_patreon/Library/Generic/Portals/Masked/Portal_Bright_Red_H_NoBG_400x400.webm`,
                    yellow: `${prefix}/jb2a_patreon/Library/Generic/Portals/Masked/Portal_Bright_Yellow_H_NoBG_400x400.webm`
                },
                vortex: {
                    black: `${prefix}/jb2a_patreon/Library/Generic/Portals/Portal_Vortex_Black_H_400x400.webm`,
                    blue: `${prefix}/jb2a_patreon/Library/Generic/Portals/Portal_Vortex_Blue_H_400x400.webm`,
                    green: `${prefix}/jb2a_patreon/Library/Generic/Portals/Portal_Vortex_Green_H_400x400.webm`,
                    orange: `${prefix}/jb2a_patreon/Library/Generic/Portals/Portal_Vortex_Orange_H_400x400.webm`,
                    purple: `${prefix}/jb2a_patreon/Library/Generic/Portals/Portal_Vortex_Purple_H_400x400.webm`,
                    red: `${prefix}/jb2a_patreon/Library/Generic/Portals/Portal_Vortex_Red_H_400x400.webm`,
                    yellow: `${prefix}/jb2a_patreon/Library/Generic/Portals/Portal_Vortex_Yellow_H_400x400.webm`
                },
                vortex_masked: {
                    blue: `${prefix}/jb2a_patreon/Library/Generic/Portals/Masked/Portal_Vortex_Blue_H_NoBG_400x400.webm`,
                    green: `${prefix}/jb2a_patreon/Library/Generic/Portals/Masked/Portal_Vortex_Green_H_NoBG_400x400.webm`,
                    orange: `${prefix}/jb2a_patreon/Library/Generic/Portals/Masked/Portal_Vortex_Orange_H_NoBG_400x400.webm`,
                    purple: `${prefix}/jb2a_patreon/Library/Generic/Portals/Masked/Portal_Vortex_Purple_H_NoBG_400x400.webm`,
                    red: `${prefix}/jb2a_patreon/Library/Generic/Portals/Masked/Portal_Vortex_Red_H_NoBG_400x400.webm`,
                    yellow: `${prefix}/jb2a_patreon/Library/Generic/Portals/Masked/Portal_Vortex_Yellow_H_NoBG_400x400.webm`
                }
            },
            vertical: {
                ring: {
                    blue: `${prefix}/jb2a_patreon/Library/Generic/Portals/Portal_Bright_Blue_V_400x250.webm`,
                    dark_blue: `${prefix}/jb2a_patreon/Library/Generic/Portals/Portal_Dark_Blue_V_400x250.webm`,
                    dark_green: `${prefix}/jb2a_patreon/Library/Generic/Portals/Portal_Dark_Green_V_400x250.webm`,
                    dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Portals/Portal_Dark_Purple_V_400x250.webm`,
                    dark_red: `${prefix}/jb2a_patreon/Library/Generic/Portals/Portal_Dark_Red_V_400x250.webm`,
                    dark_red_yellow: `${prefix}/jb2a_patreon/Library/Generic/Portals/Portal_Dark_RedYellow_V_400x250.webm`,
                    dark_yellow: `${prefix}/jb2a_patreon/Library/Generic/Portals/Portal_Dark_Yellow_V_400x250.webm`,
                    green: `${prefix}/jb2a_patreon/Library/Generic/Portals/Portal_Bright_Green_V_400x250.webm`,
                    orange: `${prefix}/jb2a_patreon/Library/Generic/Portals/Portal_Bright_Orange_V_400x250.webm`,
                    purple: `${prefix}/jb2a_patreon/Library/Generic/Portals/Portal_Bright_Purple_V_400x250.webm`,
                    red: `${prefix}/jb2a_patreon/Library/Generic/Portals/Portal_Bright_Red_V_400x250.webm`,
                    yellow: `${prefix}/jb2a_patreon/Library/Generic/Portals/Portal_Bright_Yellow_V_400x250.webm`
                },
                ring_masked: {
                    blue: `${prefix}/jb2a_patreon/Library/Generic/Portals/Masked/Portal_Bright_Blue_V_NoBG_400x250.webm`,
                    dark_blue: `${prefix}/jb2a_patreon/Library/Generic/Portals/Masked/Portal_Dark_Blue_V_NoBG_400x250.webm`,
                    dark_green: `${prefix}/jb2a_patreon/Library/Generic/Portals/Masked/Portal_Dark_Green_V_NoBG_400x250.webm`,
                    dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Portals/Masked/Portal_Dark_Purple_V_NoBG_400x250.webm`,
                    dark_red: `${prefix}/jb2a_patreon/Library/Generic/Portals/Masked/Portal_Dark_Red_V_NoBG_400x250.webm`,
                    dark_red_yellow: `${prefix}/jb2a_patreon/Library/Generic/Portals/Masked/Portal_Dark_RedYellow_V_NoBG_400x250.webm`,
                    dark_yellow: `${prefix}/jb2a_patreon/Library/Generic/Portals/Masked/Portal_Dark_Yellow_V_NoBG_400x250.webm`,
                    green: `${prefix}/jb2a_patreon/Library/Generic/Portals/Masked/Portal_Bright_Green_V_NoBG_400x250.webm`,
                    orange: `${prefix}/jb2a_patreon/Library/Generic/Portals/Masked/Portal_Bright_Orange_V_NoBG_400x250.webm`,
                    purple: `${prefix}/jb2a_patreon/Library/Generic/Portals/Masked/Portal_Bright_Purple_V_NoBG_400x250.webm`,
                    red: `${prefix}/jb2a_patreon/Library/Generic/Portals/Masked/Portal_Bright_Red_V_NoBG_400x250.webm`,
                    yellow: `${prefix}/jb2a_patreon/Library/Generic/Portals/Masked/Portal_Bright_Yellow_V_NoBG_400x250.webm`
                },
                vortex: {
                    black: `${prefix}/jb2a_patreon/Library/Generic/Portals/Portal_Vortex_Black_V_400x300.webm`,
                    blue: `${prefix}/jb2a_patreon/Library/Generic/Portals/Portal_Vortex_Blue_V_400x300.webm`,
                    green: `${prefix}/jb2a_patreon/Library/Generic/Portals/Portal_Vortex_Green_V_400x300.webm`,
                    orange: `${prefix}/jb2a_patreon/Library/Generic/Portals/Portal_Vortex_Orange_V_400x300.webm`,
                    purple: `${prefix}/jb2a_patreon/Library/Generic/Portals/Portal_Vortex_Purple_V_400x300.webm`,
                    red: `${prefix}/jb2a_patreon/Library/Generic/Portals/Portal_Vortex_Red_V_400x300.webm`,
                    yellow: `${prefix}/jb2a_patreon/Library/Generic/Portals/Portal_Vortex_Yellow_V_400x300.webm`
                },
                vortex_masked: {
                    blue: `${prefix}/jb2a_patreon/Library/Generic/Portals/Masked/Portal_Vortex_Blue_V_NoBG_400x300.webm`,
                    green: `${prefix}/jb2a_patreon/Library/Generic/Portals/Masked/Portal_Vortex_Green_V_NoBG_400x300.webm`,
                    orange: `${prefix}/jb2a_patreon/Library/Generic/Portals/Masked/Portal_Vortex_Orange_V_NoBG_400x300.webm`,
                    purple: `${prefix}/jb2a_patreon/Library/Generic/Portals/Masked/Portal_Vortex_Purple_V_NoBG_400x300.webm`,
                    red: `${prefix}/jb2a_patreon/Library/Generic/Portals/Masked/Portal_Vortex_Red_V_NoBG_400x300.webm`,
                    yellow: `${prefix}/jb2a_patreon/Library/Generic/Portals/Masked/Portal_Vortex_Yellow_V_NoBG_400x300.webm`
                }
            }
        },
        patreonDatabase.pumpkin = {
            _template: 'ranged',
            toss: {
                '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/PumpkinToss01_01_Regular_Orange_05ft_600x500.webm`,
                '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/PumpkinToss01_01_Regular_Orange_15ft_1000x500.webm`,
                '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/PumpkinToss01_01_Regular_Orange_30ft_1600x500.webm`,
                '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/PumpkinToss01_01_Regular_Orange_60ft_2800x500.webm`,
                '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/PumpkinToss01_01_Regular_Orange_90ft_4000x500.webm`
            }
        },
        patreonDatabase.quarterstaff = {
            melee: {
                _template: 'melee',
                '01': {
                    dark_orangepurple: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff01_01_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff01_02_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff01_03_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff01_04_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff01_05_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff01_06_Dark_OrangePurple_800x600.webm`
                    ],
                    blue: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff01_01_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff01_02_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff01_03_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff01_04_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff01_05_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff01_06_Regular_Blue_800x600.webm`
                    ],
                    orange: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff01_01_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff01_02_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff01_03_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff01_04_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff01_05_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff01_06_Regular_Orange_800x600.webm`
                    ],
                    purple: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff01_01_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff01_02_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff01_03_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff01_04_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff01_05_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff01_06_Regular_Purple_800x600.webm`
                    ],
                    white: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff01_01_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff01_02_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff01_03_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff01_04_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff01_05_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff01_06_Regular_White_800x600.webm`
                    ]
                },
                '02': {
                    dark_orangepurple: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff02_01_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff02_02_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff02_03_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff02_04_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff02_05_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff02_06_Dark_OrangePurple_800x600.webm`
                    ],
                    blue: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff02_01_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff02_02_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff02_03_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff02_04_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff02_05_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff02_06_Regular_Blue_800x600.webm`
                    ],
                    orange: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff02_01_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff02_02_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff02_03_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff02_04_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff02_05_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff02_06_Regular_Orange_800x600.webm`
                    ],
                    purple: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff02_01_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff02_02_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff02_03_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff02_04_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff02_05_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff02_06_Regular_Purple_800x600.webm`
                    ],
                    white: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff02_01_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff02_02_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff02_03_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff02_04_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff02_05_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff02_06_Regular_White_800x600.webm`
                    ]
                },
                '03': {
                    dark_orangepurple: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff03_01_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff03_02_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff03_03_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff03_04_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff03_05_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff03_06_Dark_OrangePurple_800x600.webm`
                    ],
                    blue: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff03_01_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff03_02_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff03_03_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff03_04_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff03_05_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff03_06_Regular_Blue_800x600.webm`
                    ],
                    orange: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff03_01_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff03_02_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff03_03_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff03_04_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff03_05_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff03_06_Regular_Orange_800x600.webm`
                    ],
                    purple: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff03_01_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff03_02_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff03_03_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff03_04_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff03_05_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff03_06_Regular_Purple_800x600.webm`
                    ],
                    white: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff03_01_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff03_02_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff03_03_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff03_04_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff03_05_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff03_06_Regular_White_800x600.webm`
                    ]
                },
                '04': {
                    dark_orangepurple: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff04_01_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff04_02_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff04_03_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff04_04_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff04_05_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff04_06_Dark_OrangePurple_800x600.webm`
                    ],
                    blue: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff04_01_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff04_02_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff04_03_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff04_04_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff04_05_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff04_06_Regular_Blue_800x600.webm`
                    ],
                    orange: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff04_01_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff04_02_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff04_03_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff04_04_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff04_05_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff04_06_Regular_Orange_800x600.webm`
                    ],
                    purple: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff04_01_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff04_02_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff04_03_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff04_04_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff04_05_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff04_06_Regular_Purple_800x600.webm`
                    ],
                    white: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff04_01_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff04_02_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff04_03_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff04_04_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff04_05_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Quarterstaff04_06_Regular_White_800x600.webm`
                    ]
                }
            }
        },
        patreonDatabase.rapier = {
            melee: {
                _template: 'melee',
                fire: {
                    blue: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Rapier01_Fire_Regular_Blue_800x600.webm`,
                    green: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Rapier01_Fire_Regular_Green_800x600.webm`,
                    orange: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Rapier01_Fire_Regular_Orange_800x600.webm`,
                    pink: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Rapier01_Fire_Regular_Pink_800x600.webm`,
                    purple: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Rapier01_Fire_Dark_Purple_800x600.webm`,
                    red: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Rapier01_Fire_Regular_Red_800x600.webm`,
                    yellow: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Rapier01_Fire_Regular_Yellow_800x600.webm`
                },
                '01': {
                    dark_orangepurple: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Rapier01_01_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Rapier01_02_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Rapier01_03_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Rapier01_04_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Rapier01_05_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Rapier01_06_Dark_OrangePurple_800x600.webm`
                    ],
                    blue: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Rapier01_01_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Rapier01_02_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Rapier01_03_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Rapier01_04_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Rapier01_05_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Rapier01_06_Regular_Blue_800x600.webm`
                    ],
                    orange: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Rapier01_01_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Rapier01_02_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Rapier01_03_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Rapier01_04_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Rapier01_05_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Rapier01_06_Regular_Orange_800x600.webm`
                    ],
                    purple: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Rapier01_01_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Rapier01_02_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Rapier01_03_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Rapier01_04_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Rapier01_05_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Rapier01_06_Regular_Purple_800x600.webm`
                    ],
                    white: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Rapier01_01_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Rapier01_02_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Rapier01_03_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Rapier01_04_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Rapier01_05_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Rapier01_06_Regular_White_800x600.webm`
                    ]
                }
            }
        },
        patreonDatabase.ray_of_frost = {
            _template: 'ranged',
            blue: {
                '05ft': `${prefix}/jb2a_patreon/Library/Cantrip/Ray_Of_Frost/RayOfFrost_01_Regular_Blue_05ft_600x400.webm`,
                '15ft': `${prefix}/jb2a_patreon/Library/Cantrip/Ray_Of_Frost/RayOfFrost_01_Regular_Blue_15ft_1000x400.webm`,
                '30ft': `${prefix}/jb2a_patreon/Library/Cantrip/Ray_Of_Frost/RayOfFrost_01_Regular_Blue_30ft_1600x400.webm`,
                '60ft': `${prefix}/jb2a_patreon/Library/Cantrip/Ray_Of_Frost/RayOfFrost_01_Regular_Blue_60ft_2800x400.webm`,
                '90ft': `${prefix}/jb2a_patreon/Library/Cantrip/Ray_Of_Frost/RayOfFrost_01_Regular_Blue_90ft_4000x400.webm`
            },
            blueyellow: {
                '05ft': `${prefix}/jb2a_patreon/Library/Cantrip/Ray_Of_Frost/RayOfFrost_01_Regular_BlueYellow_05ft_600x400.webm`,
                '15ft': `${prefix}/jb2a_patreon/Library/Cantrip/Ray_Of_Frost/RayOfFrost_01_Regular_BlueYellow_15ft_1000x400.webm`,
                '30ft': `${prefix}/jb2a_patreon/Library/Cantrip/Ray_Of_Frost/RayOfFrost_01_Regular_BlueYellow_30ft_1600x400.webm`,
                '60ft': `${prefix}/jb2a_patreon/Library/Cantrip/Ray_Of_Frost/RayOfFrost_01_Regular_BlueYellow_60ft_2800x400.webm`,
                '90ft': `${prefix}/jb2a_patreon/Library/Cantrip/Ray_Of_Frost/RayOfFrost_01_Regular_BlueYellow_90ft_4000x400.webm`
            },
            green: {
                '05ft': `${prefix}/jb2a_patreon/Library/Cantrip/Ray_Of_Frost/RayOfFrost_01_Regular_Green_05ft_600x400.webm`,
                '15ft': `${prefix}/jb2a_patreon/Library/Cantrip/Ray_Of_Frost/RayOfFrost_01_Regular_Green_15ft_1000x400.webm`,
                '30ft': `${prefix}/jb2a_patreon/Library/Cantrip/Ray_Of_Frost/RayOfFrost_01_Regular_Green_30ft_1600x400.webm`,
                '60ft': `${prefix}/jb2a_patreon/Library/Cantrip/Ray_Of_Frost/RayOfFrost_01_Regular_Green_60ft_2800x400.webm`,
                '90ft': `${prefix}/jb2a_patreon/Library/Cantrip/Ray_Of_Frost/RayOfFrost_01_Regular_Green_90ft_4000x400.webm`
            },
            purpleteal: {
                '05ft': `${prefix}/jb2a_patreon/Library/Cantrip/Ray_Of_Frost/RayOfFrost_01_Regular_PurpleTeal_05ft_600x400.webm`,
                '15ft': `${prefix}/jb2a_patreon/Library/Cantrip/Ray_Of_Frost/RayOfFrost_01_Regular_PurpleTeal_15ft_1000x400.webm`,
                '30ft': `${prefix}/jb2a_patreon/Library/Cantrip/Ray_Of_Frost/RayOfFrost_01_Regular_PurpleTeal_30ft_1600x400.webm`,
                '60ft': `${prefix}/jb2a_patreon/Library/Cantrip/Ray_Of_Frost/RayOfFrost_01_Regular_PurpleTeal_60ft_2800x400.webm`,
                '90ft': `${prefix}/jb2a_patreon/Library/Cantrip/Ray_Of_Frost/RayOfFrost_01_Regular_PurpleTeal_90ft_4000x400.webm`
            }
        },
        patreonDatabase.scimitar = {
            melee: {
                _template: 'melee',
                '01': {
                    dark_orangepurple: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Scimitar01_01_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Scimitar01_02_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Scimitar01_03_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Scimitar01_04_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Scimitar01_05_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Scimitar01_06_Dark_OrangePurple_800x600.webm`
                    ],
                    blue: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Scimitar01_01_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Scimitar01_02_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Scimitar01_03_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Scimitar01_04_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Scimitar01_05_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Scimitar01_06_Regular_Blue_800x600.webm`
                    ],
                    orange: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Scimitar01_01_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Scimitar01_02_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Scimitar01_03_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Scimitar01_04_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Scimitar01_05_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Scimitar01_06_Regular_Orange_800x600.webm`
                    ],
                    purple: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Scimitar01_01_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Scimitar01_02_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Scimitar01_03_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Scimitar01_04_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Scimitar01_05_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Scimitar01_06_Regular_Purple_800x600.webm`
                    ],
                    white: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Scimitar01_01_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Scimitar01_02_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Scimitar01_03_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Scimitar01_04_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Scimitar01_05_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Scimitar01_06_Regular_White_800x600.webm`
                    ]
                }
            }
        },
        patreonDatabase.scorched_earth = {
            black: `${prefix}/jb2a_patreon/Library/Generic/Fire/ScorchedEarth_01_Black_800x800.webm`,
            green: `${prefix}/jb2a_patreon/Library/Generic/Fire/ScorchedEarth_01_Green_800x800.webm`,
            orange: `${prefix}/jb2a_patreon/Library/Generic/Fire/ScorchedEarth_01_Orange_800x800.webm`,
            red: `${prefix}/jb2a_patreon/Library/Generic/Fire/ScorchedEarth_01_Red_800x800.webm`
        },
        patreonDatabase.scorching_ray = {
            _template: 'ranged',
            '01': {
                blue: {
                    '05ft': `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Blue_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Blue_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Blue_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Blue_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Blue_90ft_4000x400.webm`
                },
                green: {
                    '05ft': `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Green_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Green_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Green_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Green_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Green_90ft_4000x400.webm`
                },
                orange: {
                    '05ft': `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Orange_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Orange_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Orange_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Orange_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Orange_90ft_4000x400.webm`
                },
                purple: {
                    '05ft': `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Purple_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Purple_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Purple_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Purple_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Purple_90ft_4000x400.webm`
                },
                rainbow01: {
                    '05ft': `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Rainbow01_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Rainbow01_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Rainbow01_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Rainbow01_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Rainbow01_90ft_4000x400.webm`
                },
                rainbow02: {
                    '05ft': `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Rainbow02_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Rainbow02_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Rainbow02_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Rainbow02_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Rainbow02_90ft_4000x400.webm`
                },
                red: {
                    '05ft': `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Red_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Red_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Red_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Red_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Red_90ft_4000x400.webm`
                },
                yellow: {
                    '05ft': `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Yellow_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Yellow_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Yellow_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Yellow_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Yellow_90ft_4000x400.webm`
                }
            },
            '02': {
                blue: {
                    '05ft': [
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Blue_05ft_01_600x400.webm`,
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Blue_05ft_02_600x400.webm`,
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Blue_05ft_03_600x400.webm`
                    ],
                    '15ft': [
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Blue_15ft_01_1000x400.webm`,
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Blue_15ft_02_1000x400.webm`,
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Blue_15ft_03_1000x400.webm`
                    ],
                    '30ft': [
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Blue_30ft_01_1600x400.webm`,
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Blue_30ft_02_1600x400.webm`,
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Blue_30ft_03_1600x400.webm`
                    ],
                    '60ft': [
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Blue_60ft_01_2800x400.webm`,
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Blue_60ft_02_2800x400.webm`,
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Blue_60ft_03_2800x400.webm`
                    ],
                    '90ft': [
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Blue_90ft_01_4000x400.webm`,
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Blue_90ft_02_4000x400.webm`,
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Blue_90ft_03_4000x400.webm`
                    ]
                },
                green: {
                    '05ft': [
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Green_05ft_01_600x400.webm`,
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Green_05ft_02_600x400.webm`,
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Green_05ft_03_600x400.webm`
                    ],
                    '15ft': [
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Green_15ft_01_1000x400.webm`,
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Green_15ft_02_1000x400.webm`,
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Green_15ft_03_1000x400.webm`
                    ],
                    '30ft': [
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Green_30ft_01_1600x400.webm`,
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Green_30ft_02_1600x400.webm`,
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Green_30ft_03_1600x400.webm`
                    ],
                    '60ft': [
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Green_60ft_01_2800x400.webm`,
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Green_60ft_02_2800x400.webm`,
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Green_60ft_03_2800x400.webm`
                    ],
                    '90ft': [
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Green_90ft_01_4000x400.webm`,
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Green_90ft_02_4000x400.webm`,
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Green_90ft_03_4000x400.webm`
                    ]
                },
                orange: {
                    '05ft': [
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Orange_05ft_01_600x400.webm`,
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Orange_05ft_02_600x400.webm`,
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Orange_05ft_03_600x400.webm`
                    ],
                    '15ft': [
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Orange_15ft_01_1000x400.webm`,
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Orange_15ft_02_1000x400.webm`,
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Orange_15ft_03_1000x400.webm`
                    ],
                    '30ft': [
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Orange_30ft_01_1600x400.webm`,
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Orange_30ft_02_1600x400.webm`,
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Orange_30ft_03_1600x400.webm`
                    ],
                    '60ft': [
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Orange_60ft_01_2800x400.webm`,
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Orange_60ft_02_2800x400.webm`,
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Orange_60ft_03_2800x400.webm`
                    ],
                    '90ft': [
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Orange_90ft_01_4000x400.webm`,
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Orange_90ft_02_4000x400.webm`,
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Orange_90ft_03_4000x400.webm`
                    ]
                }
            },
            blue: {
                '01': {
                    '05ft': `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Blue_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Blue_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Blue_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Blue_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Blue_90ft_4000x400.webm`
                },
                '02': {
                    '05ft': [
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Blue_05ft_01_600x400.webm`,
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Blue_05ft_02_600x400.webm`,
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Blue_05ft_03_600x400.webm`
                    ],
                    '15ft': [
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Blue_15ft_01_1000x400.webm`,
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Blue_15ft_02_1000x400.webm`,
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Blue_15ft_03_1000x400.webm`
                    ],
                    '30ft': [
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Blue_30ft_01_1600x400.webm`,
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Blue_30ft_02_1600x400.webm`,
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Blue_30ft_03_1600x400.webm`
                    ],
                    '60ft': [
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Blue_60ft_01_2800x400.webm`,
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Blue_60ft_02_2800x400.webm`,
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Blue_60ft_03_2800x400.webm`
                    ],
                    '90ft': [
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Blue_90ft_01_4000x400.webm`,
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Blue_90ft_02_4000x400.webm`,
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Blue_90ft_03_4000x400.webm`
                    ]
                }
            },
            green: {
                '01': {
                    '05ft': `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Green_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Green_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Green_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Green_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Green_90ft_4000x400.webm`
                },
                '02': {
                    '05ft': [
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Green_05ft_01_600x400.webm`,
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Green_05ft_02_600x400.webm`,
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Green_05ft_03_600x400.webm`
                    ],
                    '15ft': [
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Green_15ft_01_1000x400.webm`,
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Green_15ft_02_1000x400.webm`,
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Green_15ft_03_1000x400.webm`
                    ],
                    '30ft': [
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Green_30ft_01_1600x400.webm`,
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Green_30ft_02_1600x400.webm`,
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Green_30ft_03_1600x400.webm`
                    ],
                    '60ft': [
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Green_60ft_01_2800x400.webm`,
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Green_60ft_02_2800x400.webm`,
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Green_60ft_03_2800x400.webm`
                    ],
                    '90ft': [
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Green_90ft_01_4000x400.webm`,
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Green_90ft_02_4000x400.webm`,
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Green_90ft_03_4000x400.webm`
                    ]
                }
            },
            orange: {
                '01': {
                    '05ft': `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Orange_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Orange_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Orange_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Orange_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Orange_90ft_4000x400.webm`
                },
                '02': {
                    '05ft': [
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Orange_05ft_01_600x400.webm`,
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Orange_05ft_02_600x400.webm`,
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Orange_05ft_03_600x400.webm`
                    ],
                    '15ft': [
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Orange_15ft_01_1000x400.webm`,
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Orange_15ft_02_1000x400.webm`,
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Orange_15ft_03_1000x400.webm`
                    ],
                    '30ft': [
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Orange_30ft_01_1600x400.webm`,
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Orange_30ft_02_1600x400.webm`,
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Orange_30ft_03_1600x400.webm`
                    ],
                    '60ft': [
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Orange_60ft_01_2800x400.webm`,
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Orange_60ft_02_2800x400.webm`,
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Orange_60ft_03_2800x400.webm`
                    ],
                    '90ft': [
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Orange_90ft_01_4000x400.webm`,
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Orange_90ft_02_4000x400.webm`,
                        `${prefix}/jb2a_patreon/Library/2nd_Level/Scorching_Ray/ScorchingRay_02_Regular_Orange_90ft_03_4000x400.webm`
                    ]
                }
            },
        },
        patreonDatabase.screen_overlay = {
            '01': {
                bad_omen: `${prefix}/jb2a_patreon/Library/Generic/Screen_Overlay/BadOmen01_01_Dark_Black_1920x1080.webm`
            }
        },
        patreonDatabase.shatter = {
            blue: `${prefix}/jb2a_patreon/Library/2nd_Level/Shatter/Shatter_01_Blue_400x400.webm`,
            green: `${prefix}/jb2a_patreon/Library/2nd_Level/Shatter/Shatter_01_Green_400x400.webm`,
            orange: `${prefix}/jb2a_patreon/Library/2nd_Level/Shatter/Shatter_01_Orange_400x400.webm`,
            purple: `${prefix}/jb2a_patreon/Library/2nd_Level/Shatter/Shatter_01_Purple_400x400.webm`,
            red: `${prefix}/jb2a_patreon/Library/2nd_Level/Shatter/Shatter_01_Red_400x400.webm`
        },
        patreonDatabase.shield = {
            '01': {
                intro: {
                    blue: `${prefix}/jb2a_patreon/Library/1st_Level/Shield/Shield_01_Regular_Blue_Intro_400x400.webm`,
                    green: `${prefix}/jb2a_patreon/Library/1st_Level/Shield/Shield_01_Regular_Green_Intro_400x400.webm`,
                    purple: `${prefix}/jb2a_patreon/Library/1st_Level/Shield/Shield_01_Regular_Purple_Intro_400x400.webm`,
                    red: `${prefix}/jb2a_patreon/Library/1st_Level/Shield/Shield_01_Regular_Red_Intro_400x400.webm`,
                    yellow: `${prefix}/jb2a_patreon/Library/1st_Level/Shield/Shield_01_Regular_Yellow_Intro_400x400.webm`
                },
                loop: {
                    blue: `${prefix}/jb2a_patreon/Library/1st_Level/Shield/Shield_01_Regular_Blue_Loop_400x400.webm`,
                    green: `${prefix}/jb2a_patreon/Library/1st_Level/Shield/Shield_01_Regular_Green_Loop_400x400.webm`,
                    purple: `${prefix}/jb2a_patreon/Library/1st_Level/Shield/Shield_01_Regular_Purple_Loop_400x400.webm`,
                    red: `${prefix}/jb2a_patreon/Library/1st_Level/Shield/Shield_01_Regular_Red_Loop_400x400.webm`,
                    yellow: `${prefix}/jb2a_patreon/Library/1st_Level/Shield/Shield_01_Regular_Yellow_Loop_400x400.webm`
                },
                outro_explode: {
                    blue: `${prefix}/jb2a_patreon/Library/1st_Level/Shield/Shield_01_Regular_Blue_OutroExplode_400x400.webm`,
                    green: `${prefix}/jb2a_patreon/Library/1st_Level/Shield/Shield_01_Regular_Green_OutroExplode_400x400.webm`,
                    purple: `${prefix}/jb2a_patreon/Library/1st_Level/Shield/Shield_01_Regular_Purple_OutroExplode_400x400.webm`,
                    red: `${prefix}/jb2a_patreon/Library/1st_Level/Shield/Shield_01_Regular_Red_OutroExplode_400x400.webm`,
                    yellow: `${prefix}/jb2a_patreon/Library/1st_Level/Shield/Shield_01_Regular_Yellow_OutroExplode_400x400.webm`
                },
                outro_fade: {
                    blue: `${prefix}/jb2a_patreon/Library/1st_Level/Shield/Shield_01_Regular_Blue_OutroFade_400x400.webm`,
                    green: `${prefix}/jb2a_patreon/Library/1st_Level/Shield/Shield_01_Regular_Green_OutroFade_400x400.webm`,
                    purple: `${prefix}/jb2a_patreon/Library/1st_Level/Shield/Shield_01_Regular_Purple_OutroFade_400x400.webm`,
                    red: `${prefix}/jb2a_patreon/Library/1st_Level/Shield/Shield_01_Regular_Red_OutroFade_400x400.webm`,
                    yellow: `${prefix}/jb2a_patreon/Library/1st_Level/Shield/Shield_01_Regular_Yellow_OutroFade_400x400.webm`
                }
            },
            '02': {
                intro: {
                    blue: `${prefix}/jb2a_patreon/Library/1st_Level/Shield/Shield_02_Regular_Blue_Intro_400x400.webm`,
                    green: `${prefix}/jb2a_patreon/Library/1st_Level/Shield/Shield_02_Regular_Green_Intro_400x400.webm`,
                    purple: `${prefix}/jb2a_patreon/Library/1st_Level/Shield/Shield_02_Regular_Purple_Intro_400x400.webm`,
                    red: `${prefix}/jb2a_patreon/Library/1st_Level/Shield/Shield_02_Regular_Red_Intro_400x400.webm`,
                    yellow: `${prefix}/jb2a_patreon/Library/1st_Level/Shield/Shield_02_Regular_Yellow_Intro_400x400.webm`
                },
                loop: {
                    blue: `${prefix}/jb2a_patreon/Library/1st_Level/Shield/Shield_02_Regular_Blue_Loop_400x400.webm`,
                    green: `${prefix}/jb2a_patreon/Library/1st_Level/Shield/Shield_02_Regular_Green_Loop_400x400.webm`,
                    purple: `${prefix}/jb2a_patreon/Library/1st_Level/Shield/Shield_02_Regular_Purple_Loop_400x400.webm`,
                    red: `${prefix}/jb2a_patreon/Library/1st_Level/Shield/Shield_02_Regular_Red_Loop_400x400.webm`,
                    yellow: `${prefix}/jb2a_patreon/Library/1st_Level/Shield/Shield_02_Regular_Yellow_Loop_400x400.webm`
                },
                outro_explode: {
                    blue: `${prefix}/jb2a_patreon/Library/1st_Level/Shield/Shield_02_Regular_Blue_OutroExplode_400x400.webm`,
                    green: `${prefix}/jb2a_patreon/Library/1st_Level/Shield/Shield_02_Regular_Green_OutroExplode_400x400.webm`,
                    purple: `${prefix}/jb2a_patreon/Library/1st_Level/Shield/Shield_02_Regular_Purple_OutroExplode_400x400.webm`,
                    red: `${prefix}/jb2a_patreon/Library/1st_Level/Shield/Shield_02_Regular_Red_OutroExplode_400x400.webm`,
                    yellow: `${prefix}/jb2a_patreon/Library/1st_Level/Shield/Shield_02_Regular_Yellow_OutroExplode_400x400.webm`
                },
                outro_fade: {
                    blue: `${prefix}/jb2a_patreon/Library/1st_Level/Shield/Shield_02_Regular_Blue_OutroFade_400x400.webm`,
                    green: `${prefix}/jb2a_patreon/Library/1st_Level/Shield/Shield_02_Regular_Green_OutroFade_400x400.webm`,
                    purple: `${prefix}/jb2a_patreon/Library/1st_Level/Shield/Shield_02_Regular_Purple_OutroFade_400x400.webm`,
                    red: `${prefix}/jb2a_patreon/Library/1st_Level/Shield/Shield_02_Regular_Red_OutroFade_400x400.webm`,
                    yellow: `${prefix}/jb2a_patreon/Library/1st_Level/Shield/Shield_02_Regular_Yellow_OutroFade_400x400.webm`
                }
            },
            '03': {
                intro: {
                    blue: `${prefix}/jb2a_patreon/Library/1st_Level/Shield/Shield_03_Regular_Blue_Intro_400x400.webm`,
                    green: `${prefix}/jb2a_patreon/Library/1st_Level/Shield/Shield_03_Regular_Green_Intro_400x400.webm`,
                    purple: `${prefix}/jb2a_patreon/Library/1st_Level/Shield/Shield_03_Regular_Purple_Intro_400x400.webm`,
                    red: `${prefix}/jb2a_patreon/Library/1st_Level/Shield/Shield_03_Regular_Red_Intro_400x400.webm`,
                    yellow: `${prefix}/jb2a_patreon/Library/1st_Level/Shield/Shield_03_Regular_Yellow_Intro_400x400.webm`
                },
                loop: {
                    blue: `${prefix}/jb2a_patreon/Library/1st_Level/Shield/Shield_03_Regular_Blue_Loop_400x400.webm`,
                    green: `${prefix}/jb2a_patreon/Library/1st_Level/Shield/Shield_03_Regular_Green_Loop_400x400.webm`,
                    purple: `${prefix}/jb2a_patreon/Library/1st_Level/Shield/Shield_03_Regular_Purple_Loop_400x400.webm`,
                    red: `${prefix}/jb2a_patreon/Library/1st_Level/Shield/Shield_03_Regular_Red_Loop_400x400.webm`,
                    yellow: `${prefix}/jb2a_patreon/Library/1st_Level/Shield/Shield_03_Regular_Yellow_Loop_400x400.webm`
                },
                outro_explode: {
                    blue: `${prefix}/jb2a_patreon/Library/1st_Level/Shield/Shield_03_Regular_Blue_OutroExplode_400x400.webm`,
                    green: `${prefix}/jb2a_patreon/Library/1st_Level/Shield/Shield_03_Regular_Green_OutroExplode_400x400.webm`,
                    purple: `${prefix}/jb2a_patreon/Library/1st_Level/Shield/Shield_03_Regular_Purple_OutroExplode_400x400.webm`,
                    red: `${prefix}/jb2a_patreon/Library/1st_Level/Shield/Shield_03_Regular_Red_OutroExplode_400x400.webm`,
                    yellow: `${prefix}/jb2a_patreon/Library/1st_Level/Shield/Shield_03_Regular_Yellow_OutroExplode_400x400.webm`
                },
                outro_fade: {
                    blue: `${prefix}/jb2a_patreon/Library/1st_Level/Shield/Shield_03_Regular_Blue_OutroFade_400x400.webm`,
                    green: `${prefix}/jb2a_patreon/Library/1st_Level/Shield/Shield_03_Regular_Green_OutroFade_400x400.webm`,
                    purple: `${prefix}/jb2a_patreon/Library/1st_Level/Shield/Shield_03_Regular_Purple_OutroFade_400x400.webm`,
                    red: `${prefix}/jb2a_patreon/Library/1st_Level/Shield/Shield_03_Regular_Red_OutroFade_400x400.webm`,
                    yellow: `${prefix}/jb2a_patreon/Library/1st_Level/Shield/Shield_03_Regular_Yellow_OutroFade_400x400.webm`
                }
            }
        },
        patreonDatabase.shield_themed = {
            above: {
                eldritch_web: {
                    '01': {
                        dark_green: `${prefix}/jb2a_patreon/Library/Generic/Energy/ShieldEldritchWebAbove01_01_Dark_Green_400x400.webm`,
                        dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Energy/ShieldEldritchWebAbove01_01_Dark_Purple_400x400.webm`
                    },
                    '03': {
                        dark_green: `${prefix}/jb2a_patreon/Library/Generic/Energy/ShieldEldritchWebAbove01_03_Dark_Green_400x400.webm`,
                        dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Energy/ShieldEldritchWebAbove01_03_Dark_Purple_400x400.webm`
                    },
                },
                fire: {
                    '01': {
                        dark_green: `${prefix}/jb2a_patreon/Library/Generic/Fire/ShieldFireAbove01_01_Dark_Green_400x400.webm`,
                        orange: `${prefix}/jb2a_patreon/Library/Generic/Fire/ShieldFireAbove01_01_Regular_Orange_400x400.webm`
                    },
                    '03': {
                        dark_green: `${prefix}/jb2a_patreon/Library/Generic/Fire/ShieldFireAbove01_03_Dark_Green_400x400.webm`,
                        orange: `${prefix}/jb2a_patreon/Library/Generic/Fire/ShieldFireAbove01_03_Regular_Orange_400x400.webm`
                    },
                },
                ice: {
                    '01': {
                        blue: `${prefix}/jb2a_patreon/Library/Generic/Ice/ShieldIceAbove01_01_Regular_Blue_400x400.webm`,
                        purple: `${prefix}/jb2a_patreon/Library/Generic/Ice/ShieldIceAbove01_01_Regular_Purple_400x400.webm`
                    },
                    '03': {
                        blue: `${prefix}/jb2a_patreon/Library/Generic/Ice/ShieldIceAbove01_03_Regular_Blue_400x400.webm`,
                        purple: `${prefix}/jb2a_patreon/Library/Generic/Ice/ShieldIceAbove01_03_Regular_Purple_400x400.webm`
                    }
                },
                molten_earth: {
                    '01': {
                        dark_orange: `${prefix}/jb2a_patreon/Library/Generic/Fire/ShieldMoltenEarthAbove01_01_Dark_Orange_400x400.webm`,
                        orange: `${prefix}/jb2a_patreon/Library/Generic/Fire/ShieldMoltenEarthAbove01_01_Regular_Orange_400x400.webm`
                    },
                    '03': {
                        dark_orange: `${prefix}/jb2a_patreon/Library/Generic/Fire/ShieldMoltenEarthAbove01_03_Dark_Orange_400x400.webm`,
                        orange: `${prefix}/jb2a_patreon/Library/Generic/Fire/ShieldMoltenEarthAbove01_03_Regular_Orange_400x400.webm`
                    },
                }
            },
            below: {
                eldritch_web: {
                    '01': {
                        dark_green: `${prefix}/jb2a_patreon/Library/Generic/Energy/ShieldEldritchWebBelow01_01_Dark_Green_400x400.webm`,
                        dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Energy/ShieldEldritchWebBelow01_01_Dark_Purple_400x400.webm`
                    },
                    '02': {
                        dark_green: `${prefix}/jb2a_patreon/Library/Generic/Energy/ShieldEldritchWebBelow01_02_Dark_Green_400x400.webm`,
                        dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Energy/ShieldEldritchWebBelow01_02_Dark_Purple_400x400.webm`
                    },
                    '03': {
                        dark_green: `${prefix}/jb2a_patreon/Library/Generic/Energy/ShieldEldritchWebBelow01_03_Dark_Green_400x400.webm`,
                        dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Energy/ShieldEldritchWebBelow01_03_Dark_Purple_400x400.webm`
                    }
                },
                fire: {
                    '01': {
                        dark_green: `${prefix}/jb2a_patreon/Library/Generic/Fire/ShieldFireBelow01_01_Dark_Green_400x400.webm`,
                        orange: `${prefix}/jb2a_patreon/Library/Generic/Fire/ShieldFireBelow01_01_Regular_Orange_400x400.webm`
                    },
                    '02': {
                        dark_green: `${prefix}/jb2a_patreon/Library/Generic/Fire/ShieldFireBelow01_02_Dark_Green_400x400.webm`,
                        orange: `${prefix}/jb2a_patreon/Library/Generic/Fire/ShieldFireBelow01_02_Regular_Orange_400x400.webm`
                    },
                    '03': {
                        dark_green: `${prefix}/jb2a_patreon/Library/Generic/Fire/ShieldFireBelow01_03_Dark_Green_400x400.webm`,
                        orange: `${prefix}/jb2a_patreon/Library/Generic/Fire/ShieldFireBelow01_03_Regular_Orange_400x400.webm`
                    }
                },
                ice: {
                    '01': {
                        blue: `${prefix}/jb2a_patreon/Library/Generic/Ice/ShieldIceBelow01_01_Regular_Blue_400x400.webm`,
                        purple: `${prefix}/jb2a_patreon/Library/Generic/Ice/ShieldIceBelow01_01_Regular_Purple_400x400.webm`
                    },
                    '02': {
                        blue: `${prefix}/jb2a_patreon/Library/Generic/Ice/ShieldIceBelow01_02_Regular_Blue_400x400.webm`,
                        purple: `${prefix}/jb2a_patreon/Library/Generic/Ice/ShieldIceBelow01_02_Regular_Purple_400x400.webm`
                    },
                    '03': {
                        blue: `${prefix}/jb2a_patreon/Library/Generic/Ice/ShieldIceBelow01_03_Regular_Blue_400x400.webm`,
                        purple: `${prefix}/jb2a_patreon/Library/Generic/Ice/ShieldIceBelow01_03_Regular_Purple_400x400.webm`
                    }
                },
                molten_earth: {
                    '01': {
                        dark_orange: `${prefix}/jb2a_patreon/Library/Generic/Fire/ShieldMoltenEarthBelow01_01_Dark_Orange_400x400.webm`,
                        orange: `${prefix}/jb2a_patreon/Library/Generic/Fire/ShieldMoltenEarthBelow01_01_Regular_Orange_400x400.webm`
                    },
                    '02': {
                        dark_orange: `${prefix}/jb2a_patreon/Library/Generic/Fire/ShieldMoltenEarthBelow01_02_Dark_Orange_400x400.webm`,
                        orange: `${prefix}/jb2a_patreon/Library/Generic/Fire/ShieldMoltenEarthBelow01_02_Regular_Orange_400x400.webm`
                    },
                    '03': {
                        dark_orange: `${prefix}/jb2a_patreon/Library/Generic/Fire/ShieldMoltenEarthBelow01_03_Dark_Orange_400x400.webm`,
                        orange: `${prefix}/jb2a_patreon/Library/Generic/Fire/ShieldMoltenEarthBelow01_03_Regular_Orange_400x400.webm`
                    }
                }
            }
        },
        patreonDatabase.shimmer = {
            '01': {
                blue: `${prefix}/jb2a_patreon/Library/Generic/Energy/Shimmer01_01_Regular_Blue_400x400.webm`,
                green: `${prefix}/jb2a_patreon/Library/Generic/Energy/Shimmer01_01_Regular_Green_400x400.webm`,
                orange: `${prefix}/jb2a_patreon/Library/Generic/Energy/Shimmer01_01_Regular_Orange_400x400.webm`,
                purple: `${prefix}/jb2a_patreon/Library/Generic/Energy/Shimmer01_01_Regular_Purple_400x400.webm`
            }
        },
        patreonDatabase.shortsword = {
            melee: {
                _template: 'melee',
                '01': {
                    dark_orangepurple: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Shortsword01_01_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Shortsword01_02_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Shortsword01_03_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Shortsword01_04_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Shortsword01_05_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Shortsword01_06_Dark_OrangePurple_800x600.webm`
                    ],
                    blue: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Shortsword01_01_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Shortsword01_02_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Shortsword01_03_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Shortsword01_04_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Shortsword01_05_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Shortsword01_06_Regular_Blue_800x600.webm`
                    ],
                    orange: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Shortsword01_01_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Shortsword01_02_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Shortsword01_03_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Shortsword01_04_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Shortsword01_05_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Shortsword01_06_Regular_Orange_800x600.webm`
                    ],
                    purple: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Shortsword01_01_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Shortsword01_02_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Shortsword01_03_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Shortsword01_04_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Shortsword01_05_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Shortsword01_06_Regular_Purple_800x600.webm`
                    ],
                    white: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Shortsword01_01_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Shortsword01_02_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Shortsword01_03_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Shortsword01_04_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Shortsword01_05_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Shortsword01_06_Regular_White_800x600.webm`
                    ],
                    yellow: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Shortsword01_01_Regular_Yellow_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Shortsword01_02_Regular_Yellow_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Shortsword01_03_Regular_Yellow_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Shortsword01_04_Regular_Yellow_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Shortsword01_05_Regular_Yellow_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Shortsword01_06_Regular_Yellow_800x600.webm`
                    ],
                }
            }
        }
    patreonDatabase.side_impact = {
        _template: 'side_impact',
        heart: {
            pink_yellow: `${prefix}/jb2a_patreon/Library/Generic/Impact/SideImpactHeart01_01_Regular_PinkYellow_600x600.webm`
        },
        ice_shard: {
            blue: `${prefix}/jb2a_patreon/Library/Generic/Impact/SideImpactIceShard01_01_Regular_Blue_600x600.webm`
        },
        music_note: {
            green_yellow: `${prefix}/jb2a_patreon/Library/Generic/Impact/SideImpactMusicNote01_01_Regular_GreenYellow_600x600.webm`
        },
        skull: {
            pink_purple: `${prefix}/jb2a_patreon/Library/Generic/Impact/SideImpactSkull01_01_Regular_PinkPurple_600x600.webm`
        },
        part: {
            fast: {
                ice_shard: {
                    blue: `${prefix}/jb2a_patreon/Library/Generic/Impact/PartSideImpactFastIceShard01_01_Regular_Blue_600x600.webm`,
                },
                triangle: {
                    blue: `${prefix}/jb2a_patreon/Library/Generic/Impact/PartSideImpactFastTriangle01_01_Regular_Blue_600x600.webm`,
                }
            },
            slow: {
                heart: {
                    pinkyellow: `${prefix}/jb2a_patreon/Library/Generic/Impact/PartSideImpactSlowHeart01_01_Regular_PinkYellow_600x600.webm`,
                },
                music_note: {
                    greenyellow: `${prefix}/jb2a_patreon/Library/Generic/Impact/PartSideImpactSlowMusicNote01_01_Regular_GreenYellow_600x600.webm`,
                },
                runes: {
                    greenyellow: `${prefix}/jb2a_patreon/Library/Generic/Impact/PartSideImpactSlowRunes01_01_Regular_GreenYellow_600x600.webm`,
                },
                skull: {
                    pinkpurple: `${prefix}/jb2a_patreon/Library/Generic/Impact/PartSideImpactSlowSkull01_01_Regular_PinkPurple_600x600.webm`,
                },
                snowflake: {
                    blue: `${prefix}/jb2a_patreon/Library/Generic/Impact/PartSideImpactSlowSnowflake01_01_Regular_Blue_600x600.webm`,
                },
                spiral: {
                    pinkpurple: `${prefix}/jb2a_patreon/Library/Generic/Impact/PartSideImpactSlowSpiral01_01_Regular_PinkPurple_600x600.webm`,
                },
                star: {
                    pinkyellow: `${prefix}/jb2a_patreon/Library/Generic/Impact/PartSideImpactSlowStar01_01_Regular_PinkYellow_600x600.webm`,
                },
            },
            smoke: {
                blue: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Impact/PartSideImpactSmoke01_01_Regular_Blue_600x600.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Impact/PartSideImpactSmoke02_01_Regular_Blue_600x600.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Impact/PartSideImpactSmoke03_01_Regular_Blue_600x600.webm`,
                },
                greenyellow: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Impact/PartSideImpactSmoke01_01_Regular_GreenYellow_600x600.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Impact/PartSideImpactSmoke02_01_Regular_GreenYellow_600x600.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Impact/PartSideImpactSmoke03_01_Regular_GreenYellow_600x600.webm`,
                },
                pinkpurple: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Impact/PartSideImpactSmoke01_01_Regular_PinkPurple_600x600.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Impact/PartSideImpactSmoke02_01_Regular_PinkPurple_600x600.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Impact/PartSideImpactSmoke03_01_Regular_PinkPurple_600x600.webm`,
                },
                pinkyellow: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Impact/PartSideImpactSmoke01_01_Regular_PinkYellow_600x600.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Impact/PartSideImpactSmoke02_01_Regular_PinkYellow_600x600.webm`,
                    '03': `${prefix}/jb2a_patreon/Library/Generic/Impact/PartSideImpactSmoke03_01_Regular_PinkYellow_600x600.webm`,
                },
            },
            shockwave: {
                blue: `${prefix}/jb2a_patreon/Library/Generic/Impact/PartSideImpactShockwave01_01_Regular_Blue_600x600.webm`,
                green: `${prefix}/jb2a_patreon/Library/Generic/Impact/PartSideImpactShockwave01_01_Regular_Green_600x600.webm`,
                purple: `${prefix}/jb2a_patreon/Library/Generic/Impact/PartSideImpactShockwave01_01_Regular_Purple_600x600.webm`,
                yellow: `${prefix}/jb2a_patreon/Library/Generic/Impact/PartSideImpactShockwave01_01_Regular_Yellow_600x600.webm`
            }
        }
    },
        patreonDatabase.sleep = {
            target: {
                dark_orangepurple: `${prefix}/jb2a_patreon/Library/1st_Level/Sleep/SleepMarker01_01_Dark_OrangePurple_400x400.webm`,
                dark_purple: `${prefix}/jb2a_patreon/Library/1st_Level/Sleep/SleepMarker01_01_Dark_Purple_400x400.webm`,
                blue: `${prefix}/jb2a_patreon/Library/1st_Level/Sleep/SleepMarker01_01_Regular_Blue_400x400.webm`,
                green: `${prefix}/jb2a_patreon/Library/1st_Level/Sleep/SleepMarker01_01_Regular_Green_400x400.webm`,
                pink: `${prefix}/jb2a_patreon/Library/1st_Level/Sleep/SleepMarker01_01_Regular_Pink_400x400.webm`,
                yellow: `${prefix}/jb2a_patreon/Library/1st_Level/Sleep/SleepMarker01_01_Regular_Yellow_400x400.webm`
            },
            symbol: {
                dark_green: `${prefix}/jb2a_patreon/Library/1st_Level/Sleep/SleepSymbol01_01_Dark_Green_400x400.webm`,
                dark_orangepurple: `${prefix}/jb2a_patreon/Library/1st_Level/Sleep/SleepSymbol01_01_Dark_OrangePurple_400x400.webm`,
                dark_pink: `${prefix}/jb2a_patreon/Library/1st_Level/Sleep/SleepSymbol01_01_Dark_Pink_400x400.webm`,
                dark_purple: `${prefix}/jb2a_patreon/Library/1st_Level/Sleep/SleepSymbol01_01_Dark_Purple_400x400.webm`,
                blue: `${prefix}/jb2a_patreon/Library/1st_Level/Sleep/SleepSymbol01_01_Regular_Blue_400x400.webm`,
                green: `${prefix}/jb2a_patreon/Library/1st_Level/Sleep/SleepSymbol01_01_Regular_Green_400x400.webm`,
                pink: `${prefix}/jb2a_patreon/Library/1st_Level/Sleep/SleepSymbol01_01_Regular_Pink_400x400.webm`,
                purple: `${prefix}/jb2a_patreon/Library/1st_Level/Sleep/SleepSymbol01_01_Regular_Purple_400x400.webm`,
                orangepurple: `${prefix}/jb2a_patreon/Library/1st_Level/Sleep/SleepSymbol01_01_Regular_OrangePurple_400x400.webm`,
                yellow: `${prefix}/jb2a_patreon/Library/1st_Level/Sleep/SleepSymbol01_01_Regular_Yellow_400x400.webm`
            },
            cloud: {
                '01': {
                    dark_orangepurple: `${prefix}/jb2a_patreon/Library/1st_Level/Sleep/Cloud01_01_Dark_OrangePurple_400x400.webm`,
                    dark_purple: `${prefix}/jb2a_patreon/Library/1st_Level/Sleep/Cloud01_01_Dark_Purple_400x400.webm`,
                    blue: `${prefix}/jb2a_patreon/Library/1st_Level/Sleep/Cloud01_01_Regular_Blue_400x400.webm`,
                    green: `${prefix}/jb2a_patreon/Library/1st_Level/Sleep/Cloud01_01_Regular_Green_400x400.webm`,
                    pink: `${prefix}/jb2a_patreon/Library/1st_Level/Sleep/Cloud01_01_Regular_Pink_400x400.webm`,
                    yellow: `${prefix}/jb2a_patreon/Library/1st_Level/Sleep/Cloud01_01_Regular_Yellow_400x400.webm`
                },
                '02': {
                    dark_orangepurple: `${prefix}/jb2a_patreon/Library/1st_Level/Sleep/Cloud01_02_Dark_OrangePurple_400x400.webm`,
                    dark_purple: `${prefix}/jb2a_patreon/Library/1st_Level/Sleep/Cloud01_02_Dark_Purple_400x400.webm`,
                    blue: `${prefix}/jb2a_patreon/Library/1st_Level/Sleep/Cloud01_02_Regular_Blue_400x400.webm`,
                    green: `${prefix}/jb2a_patreon/Library/1st_Level/Sleep/Cloud01_02_Regular_Green_400x400.webm`,
                    pink: `${prefix}/jb2a_patreon/Library/1st_Level/Sleep/Cloud01_02_Regular_Pink_400x400.webm`,
                    yellow: `${prefix}/jb2a_patreon/Library/1st_Level/Sleep/Cloud01_02_Regular_Yellow_400x400.webm`
                }
            }
        },
        patreonDatabase.sleet_storm = {
            blue: `${prefix}/jb2a_patreon/Library/3rd_Level/Sleet_Storm/SleetStorm_01_Blue_800x800.webm`,
            green: `${prefix}/jb2a_patreon/Library/3rd_Level/Sleet_Storm/SleetStorm_01_Green_800x800.webm`,
            purple: `${prefix}/jb2a_patreon/Library/3rd_Level/Sleet_Storm/SleetStorm_01_Purple_800x800.webm`,
            tealyellow: `${prefix}/jb2a_patreon/Library/3rd_Level/Sleet_Storm/SleetStorm_01_TealYellow_800x800.webm`
        },
        patreonDatabase.slingshot = {
            _template: 'ranged',
            '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/SlingShot_01_Regular_White_05ft_600x400.webm`,
            '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/SlingShot_01_Regular_White_15ft_1000x400.webm`,
            '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/SlingShot_01_Regular_White_30ft_1600x400.webm`,
            '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/SlingShot_01_Regular_White_60ft_2800x400.webm`,
            '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/SlingShot_01_Regular_White_90ft_4000x400.webm`
        },
        patreonDatabase.smoke = {
            puff: {
                side: {
                    blue: [
                        `${prefix}/jb2a_patreon/Library/Generic/Smoke/SmokePuffSide01_01_Regular_Blue_400x400.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Smoke/SmokePuffSide01_02_Regular_Blue_400x400.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Smoke/SmokePuffSide01_03_Regular_Blue_400x400.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Smoke/SmokePuffSide01_04_Regular_Blue_400x400.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Smoke/SmokePuffSide01_05_Regular_Blue_400x400.webm`,
                    ],
                    dark_black: [
                        `${prefix}/jb2a_patreon/Library/Generic/Smoke/SmokePuffSide01_01_Dark_Black_400x400.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Smoke/SmokePuffSide01_02_Dark_Black_400x400.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Smoke/SmokePuffSide01_03_Dark_Black_400x400.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Smoke/SmokePuffSide01_04_Dark_Black_400x400.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Smoke/SmokePuffSide01_05_Dark_Black_400x400.webm`,
                    ],
                    dark_green: [
                        `${prefix}/jb2a_patreon/Library/Generic/Smoke/SmokePuffSide01_01_Dark_Green_400x400.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Smoke/SmokePuffSide01_02_Dark_Green_400x400.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Smoke/SmokePuffSide01_03_Dark_Green_400x400.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Smoke/SmokePuffSide01_04_Dark_Green_400x400.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Smoke/SmokePuffSide01_05_Dark_Green_400x400.webm`,
                    ],
                    dark_purple: [
                        `${prefix}/jb2a_patreon/Library/Generic/Smoke/SmokePuffSide01_01_Dark_Purple_400x400.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Smoke/SmokePuffSide01_02_Dark_Purple_400x400.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Smoke/SmokePuffSide01_03_Dark_Purple_400x400.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Smoke/SmokePuffSide01_04_Dark_Purple_400x400.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Smoke/SmokePuffSide01_05_Dark_Purple_400x400.webm`,
                    ],
                    grey: [
                        `${prefix}/jb2a_patreon/Library/Generic/Smoke/SmokePuffSide01_01_Regular_Grey_400x400.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Smoke/SmokePuffSide01_02_Regular_Grey_400x400.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Smoke/SmokePuffSide01_03_Regular_Grey_400x400.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Smoke/SmokePuffSide01_04_Regular_Grey_400x400.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Smoke/SmokePuffSide01_05_Regular_Grey_400x400.webm`,
                    ]
                },
                centered: {
                    blue: [
                        `${prefix}/jb2a_patreon/Library/Generic/Smoke/SmokePuff01_01_Regular_Blue_400x400.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Smoke/SmokePuff01_02_Regular_Blue_400x400.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Smoke/SmokePuff01_03_Regular_Blue_400x400.webm`,
                    ],
                    dark_black: [
                        `${prefix}/jb2a_patreon/Library/Generic/Smoke/SmokePuff01_01_Dark_Black_400x400.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Smoke/SmokePuff01_02_Dark_Black_400x400.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Smoke/SmokePuff01_03_Dark_Black_400x400.webm`,
                    ],
                    dark_green: [
                        `${prefix}/jb2a_patreon/Library/Generic/Smoke/SmokePuff01_01_Dark_Green_400x400.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Smoke/SmokePuff01_02_Dark_Green_400x400.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Smoke/SmokePuff01_03_Dark_Green_400x400.webm`,
                    ],
                    dark_purple: [
                        `${prefix}/jb2a_patreon/Library/Generic/Smoke/SmokePuff01_01_Dark_Purple_400x400.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Smoke/SmokePuff01_02_Dark_Purple_400x400.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Smoke/SmokePuff01_03_Dark_Purple_400x400.webm`,
                    ],
                    grey: [
                        `${prefix}/jb2a_patreon/Library/Generic/Smoke/SmokePuff01_01_Regular_Grey_400x400.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Smoke/SmokePuff01_02_Regular_Grey_400x400.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Smoke/SmokePuff01_03_Regular_Grey_400x400.webm`,
                    ]
                }
            },
        },
        patreonDatabase.sneak_attack = {
            blue: `${prefix}/jb2a_patreon/Library/1st_Level/Sneak_Attack/Sneak_Attack_Regular_Blue_300x300.webm`,
            dark_green: `${prefix}/jb2a_patreon/Library/1st_Level/Sneak_Attack/Sneak_Attack_Dark_Green_300x300.webm`,
            dark_purple: `${prefix}/jb2a_patreon/Library/1st_Level/Sneak_Attack/Sneak_Attack_Dark_Purple_300x300.webm`,
            dark_red: `${prefix}/jb2a_patreon/Library/1st_Level/Sneak_Attack/Sneak_Attack_Dark_Red_300x300.webm`,
            orange: `${prefix}/jb2a_patreon/Library/1st_Level/Sneak_Attack/Sneak_Attack_Regular_Orange_300x300.webm`,
            pink: `${prefix}/jb2a_patreon/Library/1st_Level/Sneak_Attack/Sneak_Attack_Regular_Pink_300x300.webm`,
            yellow: `${prefix}/jb2a_patreon/Library/1st_Level/Sneak_Attack/Sneak_Attack_Regular_Yellow_300x300.webm`
        },
        patreonDatabase.sneak_attack_text = {
            '01': {
                dark_red: `${prefix}/jb2a_patreon/Library/Generic/UI/SneakAttackText_01_Dark_Red_400x400.webm`
            },
            '02': {
                dark_red: `${prefix}/jb2a_patreon/Library/Generic/UI/SneakAttackText_02_Dark_Red_400x400.webm`
            }
        },
        patreonDatabase.snowball_toss = {
            _template: 'ranged',
            white: {
                '01': {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/SnowballToss_01_Regular_White_05ft_600x500.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/SnowballToss_01_Regular_White_15ft_1000x500.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/SnowballToss_01_Regular_White_30ft_1600x500.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/SnowballToss_01_Regular_White_60ft_2800x500.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/SnowballToss_01_Regular_White_90ft_4000x500.webm`,
                }
            }
        },
        patreonDatabase.spear = {
            melee: {
                _template: 'melee',
                fire: {
                    blue: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Spear01_Fire_Regular_Blue_800x600.webm`,
                    dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Spear01_Fire_Dark_Purple_800x600.webm`,
                    green: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Spear01_Fire_Regular_Green_800x600.webm`,
                    orange: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Spear01_Fire_Regular_Orange_800x600.webm`,
                    pink: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Spear01_Fire_Regular_Pink_800x600.webm`,
                    red: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Spear01_Fire_Regular_Red_800x600.webm`,
                    yellow: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Spear01_Fire_Regular_Yellow_800x600.webm`
                },
                '01': {
                    dark_orangepurple: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Spear01_01_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Spear01_02_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Spear01_03_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Spear01_04_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Spear01_05_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Spear01_06_Dark_OrangePurple_800x600.webm`
                    ],
                    blue: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Spear01_01_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Spear01_02_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Spear01_03_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Spear01_04_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Spear01_05_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Spear01_06_Regular_Blue_800x600.webm`
                    ],
                    orange: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Spear01_01_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Spear01_02_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Spear01_03_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Spear01_04_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Spear01_05_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Spear01_06_Regular_Orange_800x600.webm`
                    ],
                    yellow: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Spear01_01_Regular_Yellow_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Spear01_02_Regular_Yellow_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Spear01_03_Regular_Yellow_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Spear01_04_Regular_Yellow_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Spear01_05_Regular_Yellow_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Spear01_06_Regular_Yellow_800x600.webm`
                    ],
                    purple: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Spear01_01_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Spear01_02_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Spear01_03_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Spear01_04_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Spear01_05_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Spear01_06_Regular_Purple_800x600.webm`
                    ],
                    white: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Spear01_01_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Spear01_02_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Spear01_03_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Spear01_04_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Spear01_05_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Spear01_06_Regular_White_800x600.webm`
                    ]
                }
            },
            throw: {
                _template: 'ranged',
                '01': {
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Spear01_01_Regular_White_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Spear01_01_Regular_White_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Spear01_01_Regular_White_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Spear01_01_Regular_White_90ft_4000x400.webm`
                }
            },
            return: {
                _template: 'ranged',
                '01': {
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Spear01_01_Regular_White_Return_15ft_1000x600.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Spear01_01_Regular_White_Return_30ft_1600x600.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Spear01_01_Regular_White_Return_60ft_2800x600.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Spear01_01_Regular_White_Return_90ft_4000x600.webm`
                }
            }
        },
        patreonDatabase.spell_projectile = {
            _template: 'ranged',
            heart: {
                pinkyellow: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/RangedSpell/ProjectileHeart01_01_Regular_PinkYellow_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/RangedSpell/ProjectileHeart01_01_Regular_PinkYellow_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/RangedSpell/ProjectileHeart01_01_Regular_PinkYellow_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/RangedSpell/ProjectileHeart01_01_Regular_PinkYellow_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/RangedSpell/ProjectileHeart01_01_Regular_PinkYellow_90ft_4000x400.webm`
                }
            },
            ice_shard: {
                blue: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/RangedSpell/ProjectileIceShard01_01_Regular_Blue_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/RangedSpell/ProjectileIceShard01_01_Regular_Blue_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/RangedSpell/ProjectileIceShard01_01_Regular_Blue_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/RangedSpell/ProjectileIceShard01_01_Regular_Blue_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/RangedSpell/ProjectileIceShard01_01_Regular_Blue_90ft_4000x400.webm`
                }
            },
            music_note: {
                greenyellow: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/RangedSpell/ProjectileMusicNote01_01_Regular_GreenYellow_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/RangedSpell/ProjectileMusicNote01_01_Regular_GreenYellow_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/RangedSpell/ProjectileMusicNote01_01_Regular_GreenYellow_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/RangedSpell/ProjectileMusicNote01_01_Regular_GreenYellow_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/RangedSpell/ProjectileMusicNote01_01_Regular_GreenYellow_90ft_4000x400.webm`
                }
            },
            skull: {
                pinkpurple: {
                    '05ft': `${prefix}/jb2a_patreon/Library/Generic/RangedSpell/ProjectileSkull01_01_Regular_PinkPurple_05ft_600x400.webm`,
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/RangedSpell/ProjectileSkull01_01_Regular_PinkPurple_15ft_1000x400.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/RangedSpell/ProjectileSkull01_01_Regular_PinkPurple_30ft_1600x400.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/RangedSpell/ProjectileSkull01_01_Regular_PinkPurple_60ft_2800x400.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/RangedSpell/ProjectileSkull01_01_Regular_PinkPurple_90ft_4000x400.webm`
                }
            }
        },
        patreonDatabase.sphere_of_annihilation = {
            '200px': {
                blue: `${prefix}/jb2a_patreon/Library/Generic/Item/SphereOfAnnihilation_01_Regular_Blue_200x200.webm`,
                green: `${prefix}/jb2a_patreon/Library/Generic/Item/SphereOfAnnihilation_01_Regular_Green_200x200.webm`,
                purple: `${prefix}/jb2a_patreon/Library/Generic/Item/SphereOfAnnihilation_01_Regular_Purple_200x200.webm`,
                white: `${prefix}/jb2a_patreon/Library/Generic/Item/SphereOfAnnihilation_01_Regular_White_200x200.webm`
            },
            '600px': {
                blue: `${prefix}/jb2a_patreon/Library/Generic/Item/SphereOfAnnihilation_01_Regular_Blue_600x600.webm`,
                green: `${prefix}/jb2a_patreon/Library/Generic/Item/SphereOfAnnihilation_01_Regular_Green_600x600.webm`,
                purple: `${prefix}/jb2a_patreon/Library/Generic/Item/SphereOfAnnihilation_01_Regular_Purple_600x600.webm`,
                white: `${prefix}/jb2a_patreon/Library/Generic/Item/SphereOfAnnihilation_01_Regular_White_600x600.webm`
            }
        },
        patreonDatabase.spirit_guardians = {
            blue: {
                ring: `${prefix}/jb2a_patreon/Library/3rd_Level/Spirit_Guardians/SpiritGuardians_01_Light_Blue_600x600.webm`,
                no_ring: `${prefix}/jb2a_patreon/Library/3rd_Level/Spirit_Guardians/SpiritGuardiansNoRing_01_Light_Blue_600x600.webm`,
                particles: `${prefix}/jb2a_patreon/Library/3rd_Level/Spirit_Guardians/SpiritGuardiansParticles_01_Light_Blue_600x600.webm`,
                spirits: `${prefix}/jb2a_patreon/Library/3rd_Level/Spirit_Guardians/SpiritGuardiansSpirits_01_Light_Blue_600x600.webm`
            },
            blueyellow: `${prefix}/jb2a_patreon/Library/3rd_Level/Spirit_Guardians/SpiritGuardians_01_Light_BlueYellow_600x600.webm`,
            dark_black: {
                ring: `${prefix}/jb2a_patreon/Library/3rd_Level/Spirit_Guardians/SpiritGuardians_01_Dark_Black_600x600.webm`,
                no_ring: `${prefix}/jb2a_patreon/Library/3rd_Level/Spirit_Guardians/SpiritGuardiansNoRing_01_Dark_Black_600x600.webm`,
                particles: `${prefix}/jb2a_patreon/Library/3rd_Level/Spirit_Guardians/SpiritGuardiansParticles_01_Dark_Black_600x600.webm`,
                spirits: `${prefix}/jb2a_patreon/Library/3rd_Level/Spirit_Guardians/SpiritGuardiansSpirits_01_Dark_Black_600x600.webm`
            },
            dark_blue: `${prefix}/jb2a_patreon/Library/3rd_Level/Spirit_Guardians/SpiritGuardians_01_Dark_Blue_600x600.webm`,
            dark_purple: {
                ring: `${prefix}/jb2a_patreon/Library/3rd_Level/Spirit_Guardians/SpiritGuardians_01_Dark_Purple_600x600.webm`,
                no_ring: `${prefix}/jb2a_patreon/Library/3rd_Level/Spirit_Guardians/SpiritGuardiansNoRing_01_Dark_Purple_600x600.webm`,
                particles: `${prefix}/jb2a_patreon/Library/3rd_Level/Spirit_Guardians/SpiritGuardiansParticles_01_Dark_Purple_600x600.webm`,
                spirits: `${prefix}/jb2a_patreon/Library/3rd_Level/Spirit_Guardians/SpiritGuardiansSpirits_01_Dark_Purple_600x600.webm`
            },
            dark_red: {
                ring: `${prefix}/jb2a_patreon/Library/3rd_Level/Spirit_Guardians/SpiritGuardians_01_Dark_Red_600x600.webm`,
                no_ring: `${prefix}/jb2a_patreon/Library/3rd_Level/Spirit_Guardians/SpiritGuardiansNoRing_01_Dark_Red_600x600.webm`,
                particles: `${prefix}/jb2a_patreon/Library/3rd_Level/Spirit_Guardians/SpiritGuardiansParticles_01_Dark_Red_600x600.webm`,
                spirits: `${prefix}/jb2a_patreon/Library/3rd_Level/Spirit_Guardians/SpiritGuardiansSpirits_01_Dark_Red_600x600.webm`
            },
            dark_whiteblue: {
                ring: `${prefix}/jb2a_patreon/Library/3rd_Level/Spirit_Guardians/SpiritGuardians_01_Dark_WhiteBlue_600x600.webm`,
                no_ring: `${prefix}/jb2a_patreon/Library/3rd_Level/Spirit_Guardians/SpiritGuardiansNoRing_01_Dark_WhiteBlue_600x600.webm`,
                particles: `${prefix}/jb2a_patreon/Library/3rd_Level/Spirit_Guardians/SpiritGuardiansParticles_01_Dark_WhiteBlue_600x600.webm`,
                spirits: `${prefix}/jb2a_patreon/Library/3rd_Level/Spirit_Guardians/SpiritGuardiansSpirits_01_Dark_WhiteBlue_600x600.webm`
            },
            green: {
                ring: `${prefix}/jb2a_patreon/Library/3rd_Level/Spirit_Guardians/SpiritGuardians_01_Light_Green_600x600.webm`,
                no_ring: `${prefix}/jb2a_patreon/Library/3rd_Level/Spirit_Guardians/SpiritGuardiansNoRing_01_Light_Green_600x600.webm`,
                particles: `${prefix}/jb2a_patreon/Library/3rd_Level/Spirit_Guardians/SpiritGuardiansParticles_01_Light_Green_600x600.webm`,
                spirits: `${prefix}/jb2a_patreon/Library/3rd_Level/Spirit_Guardians/SpiritGuardiansSpirits_01_Light_Green_600x600.webm`
            },
            orange: {
                ring: `${prefix}/jb2a_patreon/Library/3rd_Level/Spirit_Guardians/SpiritGuardians_01_Light_Orange_600x600.webm`,
                no_ring: `${prefix}/jb2a_patreon/Library/3rd_Level/Spirit_Guardians/SpiritGuardiansNoRing_01_Light_Orange_600x600.webm`,
                particles: `${prefix}/jb2a_patreon/Library/3rd_Level/Spirit_Guardians/SpiritGuardiansParticles_01_Light_Orange_600x600.webm`,
                spirits: `${prefix}/jb2a_patreon/Library/3rd_Level/Spirit_Guardians/SpiritGuardiansSpirits_01_Light_Orange_600x600.webm`
            },
            greenorange: {
                ring: `${prefix}/jb2a_patreon/Library/3rd_Level/Spirit_Guardians/SpiritGuardians_01_Light_GreenOrange_600x600.webm`,
                no_ring: `${prefix}/jb2a_patreon/Library/3rd_Level/Spirit_Guardians/SpiritGuardiansNoRing_01_Light_GreenOrange_600x600.webm`,
                particles: `${prefix}/jb2a_patreon/Library/3rd_Level/Spirit_Guardians/SpiritGuardiansParticles_01_Light_GreenOrange_600x600.webm`,
                spirits: `${prefix}/jb2a_patreon/Library/3rd_Level/Spirit_Guardians/SpiritGuardiansSpirits_01_Light_GreenOrange_600x600.webm`
            },
            pinkpurple: {
                ring: `${prefix}/jb2a_patreon/Library/3rd_Level/Spirit_Guardians/SpiritGuardians_01_Light_PinkPurple_600x600.webm`,
                no_ring: `${prefix}/jb2a_patreon/Library/3rd_Level/Spirit_Guardians/SpiritGuardiansNoRing_01_Light_PinkPurple_600x600.webm`,
                particles: `${prefix}/jb2a_patreon/Library/3rd_Level/Spirit_Guardians/SpiritGuardiansParticles_01_Light_PinkPurple_600x600.webm`,
                spirits: `${prefix}/jb2a_patreon/Library/3rd_Level/Spirit_Guardians/SpiritGuardiansSpirits_01_Light_PinkPurple_600x600.webm`
            },
        },
        patreonDatabase.spiritual_weapon = {
            mace: {
                flaming: {
                    blue: `${prefix}/jb2a_patreon/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Mace01_01_Flaming_Blue_200x200.webm`,
                    green: `${prefix}/jb2a_patreon/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Mace01_01_Flaming_Green_200x200.webm`,
                    orange: `${prefix}/jb2a_patreon/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Mace01_01_Flaming_Orange_200x200.webm`,
                    purple: `${prefix}/jb2a_patreon/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Mace01_01_Flaming_Purple_200x200.webm`,
                    red: `${prefix}/jb2a_patreon/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Mace01_01_Flaming_Red_200x200.webm`,
                    yellow: `${prefix}/jb2a_patreon/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Mace01_01_Flaming_Yellow_200x200.webm`
                },
                spectral: {
                    blue: `${prefix}/jb2a_patreon/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Mace01_01_Spectral_Blue_200x200.webm`,
                    green: `${prefix}/jb2a_patreon/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Mace01_01_Spectral_Green_200x200.webm`,
                    orange: `${prefix}/jb2a_patreon/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Mace01_01_Spectral_Orange_200x200.webm`,
                    purple: `${prefix}/jb2a_patreon/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Mace01_01_Spectral_Purple_200x200.webm`,
                    red: `${prefix}/jb2a_patreon/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Mace01_01_Spectral_Red_200x200.webm`
                }
            },
            maul: {
                flaming: {
                    blue: `${prefix}/jb2a_patreon/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Maul01_01_Flaming_Blue_200x200.webm`,
                    green: `${prefix}/jb2a_patreon/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Maul01_01_Flaming_Green_200x200.webm`,
                    orange: `${prefix}/jb2a_patreon/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Maul01_01_Flaming_Orange_200x200.webm`,
                    purple: `${prefix}/jb2a_patreon/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Maul01_01_Flaming_Purple_200x200.webm`,
                    red: `${prefix}/jb2a_patreon/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Maul01_01_Flaming_Red_200x200.webm`,
                    yellow: `${prefix}/jb2a_patreon/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Maul01_01_Flaming_Yellow_200x200.webm`
                },
                spectral: {
                    blue: `${prefix}/jb2a_patreon/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Maul01_01_Spectral_Blue_200x200.webm`,
                    green: `${prefix}/jb2a_patreon/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Maul01_01_Spectral_Green_200x200.webm`,
                    orange: `${prefix}/jb2a_patreon/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Maul01_01_Spectral_Orange_200x200.webm`,
                    purple: `${prefix}/jb2a_patreon/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Maul01_01_Spectral_Purple_200x200.webm`,
                    red: `${prefix}/jb2a_patreon/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Maul01_01_Spectral_Red_200x200.webm`
                }
            },
            scythe: {
                dark: {
                    blue: `${prefix}/jb2a_patreon/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Scythe01_02_Dark_Blue_300x300.webm`,
                    green: `${prefix}/jb2a_patreon/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Scythe01_02_Dark_Green_300x300.webm`,
                    green02: `${prefix}/jb2a_patreon/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Scythe01_02_Dark_Green02_300x300.webm`,
                    pink: `${prefix}/jb2a_patreon/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Scythe01_02_Dark_Pink_300x300.webm`,
                    purple: `${prefix}/jb2a_patreon/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Scythe01_02_Dark_Purple_300x300.webm`,
                    red: `${prefix}/jb2a_patreon/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Scythe01_02_Dark_Red_300x300.webm`
                },
                spectral: {
                    blue: `${prefix}/jb2a_patreon/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Scythe01_02_Spectral_Blue_300x300.webm`,
                    green: `${prefix}/jb2a_patreon/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Scythe01_02_Spectral_Green_300x300.webm`,
                    orange: `${prefix}/jb2a_patreon/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Scythe01_02_Spectral_Orange_300x300.webm`,
                    purple: `${prefix}/jb2a_patreon/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Scythe01_02_Spectral_Purple_300x300.webm`,
                    red: `${prefix}/jb2a_patreon/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Scythe01_02_Spectral_Red_300x300.webm`
                }
            },
            sword: {
                dark: {
                    blue: `${prefix}/jb2a_patreon/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Sword01_01_Dark_Blue_200x200.webm`,
                    green: `${prefix}/jb2a_patreon/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Sword01_01_Dark_Green_200x200.webm`,
                    purple: `${prefix}/jb2a_patreon/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Sword01_01_Dark_Purple_200x200.webm`,
                    red: `${prefix}/jb2a_patreon/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Sword01_01_Dark_Red_200x200.webm`,
                    white: `${prefix}/jb2a_patreon/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Sword01_01_Dark_White_200x200.webm`
                },
                flaming: {
                    blue: `${prefix}/jb2a_patreon/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Sword01_01_Flaming_Blue_200x200.webm`,
                    green: `${prefix}/jb2a_patreon/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Sword01_01_Flaming_Green_200x200.webm`,
                    orange: `${prefix}/jb2a_patreon/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Sword01_01_Flaming_Orange_200x200.webm`,
                    purple: `${prefix}/jb2a_patreon/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Sword01_01_Flaming_Purple_200x200.webm`,
                    red: `${prefix}/jb2a_patreon/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Sword01_01_Flaming_Red_200x200.webm`,
                    yellow: `${prefix}/jb2a_patreon/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Sword01_01_Flaming_Yellow_200x200.webm`
                },
                spectral: {
                    blue: `${prefix}/jb2a_patreon/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Sword01_01_Spectral_Blue_200x200.webm`,
                    green: `${prefix}/jb2a_patreon/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Sword01_01_Spectral_Green_200x200.webm`,
                    orange: `${prefix}/jb2a_patreon/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Sword01_01_Spectral_Orange_200x200.webm`,
                    purple: `${prefix}/jb2a_patreon/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Sword01_01_Spectral_Purple_200x200.webm`,
                    red: `${prefix}/jb2a_patreon/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Sword01_01_Spectral_Red_200x200.webm`
                }
            }
        },
        patreonDatabase.static_electricity = {
            '01': {
                blue: `${prefix}/jb2a_patreon/Library/Generic/Lightning/StaticElectricity_01_Regular_Blue_400x400.webm`,
                dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Lightning/StaticElectricity_01_Dark_Purple_400x400.webm`,
                dark_red: `${prefix}/jb2a_patreon/Library/Generic/Lightning/StaticElectricity_01_Dark_Red_400x400.webm`,
                green: `${prefix}/jb2a_patreon/Library/Generic/Lightning/StaticElectricity_01_Regular_Green_400x400.webm`,
                green02: `${prefix}/jb2a_patreon/Library/Generic/Lightning/StaticElectricity_01_Regular_Green02_400x400.webm`,
                orange: `${prefix}/jb2a_patreon/Library/Generic/Lightning/StaticElectricity_01_Regular_Orange_400x400.webm`,
                red: `${prefix}/jb2a_patreon/Library/Generic/Lightning/StaticElectricity_01_Regular_Red_400x400.webm`,
                purple: `${prefix}/jb2a_patreon/Library/Generic/Lightning/StaticElectricity_01_Regular_Purple_400x400.webm`,
                yellow: `${prefix}/jb2a_patreon/Library/Generic/Lightning/StaticElectricity_01_Regular_Yellow_400x400.webm`
            },
            '02': {
                blue: `${prefix}/jb2a_patreon/Library/Generic/Lightning/StaticElectricity_02_Regular_Blue_400x400.webm`,
                dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Lightning/StaticElectricity_02_Dark_Purple_400x400.webm`,
                dark_red: `${prefix}/jb2a_patreon/Library/Generic/Lightning/StaticElectricity_02_Dark_Red_400x400.webm`,
                green: `${prefix}/jb2a_patreon/Library/Generic/Lightning/StaticElectricity_02_Regular_Green_400x400.webm`,
                green02: `${prefix}/jb2a_patreon/Library/Generic/Lightning/StaticElectricity_02_Regular_Green02_400x400.webm`,
                orange: `${prefix}/jb2a_patreon/Library/Generic/Lightning/StaticElectricity_02_Regular_Orange_400x400.webm`,
                red: `${prefix}/jb2a_patreon/Library/Generic/Lightning/StaticElectricity_02_Regular_Red_400x400.webm`,
                purple: `${prefix}/jb2a_patreon/Library/Generic/Lightning/StaticElectricity_02_Regular_Purple_400x400.webm`,
                yellow: `${prefix}/jb2a_patreon/Library/Generic/Lightning/StaticElectricity_02_Regular_Yellow_400x400.webm`
            },
            '03': {
                blue: `${prefix}/jb2a_patreon/Library/Generic/Lightning/StaticElectricity_03_Regular_Blue_400x400.webm`,
                dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Lightning/StaticElectricity_03_Dark_Purple_400x400.webm`,
                dark_red: `${prefix}/jb2a_patreon/Library/Generic/Lightning/StaticElectricity_03_Dark_Red_400x400.webm`,
                green: `${prefix}/jb2a_patreon/Library/Generic/Lightning/StaticElectricity_03_Regular_Green_400x400.webm`,
                green02: `${prefix}/jb2a_patreon/Library/Generic/Lightning/StaticElectricity_03_Regular_Green02_400x400.webm`,
                orange: `${prefix}/jb2a_patreon/Library/Generic/Lightning/StaticElectricity_03_Regular_Orange_400x400.webm`,
                red: `${prefix}/jb2a_patreon/Library/Generic/Lightning/StaticElectricity_03_Regular_Red_400x400.webm`,
                purple: `${prefix}/jb2a_patreon/Library/Generic/Lightning/StaticElectricity_03_Regular_Purple_400x400.webm`,
                yellow: `${prefix}/jb2a_patreon/Library/Generic/Lightning/StaticElectricity_03_Regular_Yellow_400x400.webm`
            }
        },
        patreonDatabase.swirling_sparkles = {
            '01': {
                blue: `${prefix}/jb2a_patreon/Library/Generic/Energy/SwirlingSparkles_01_Regular_Blue_400x400.webm`,
                bluepink: `${prefix}/jb2a_patreon/Library/Generic/Energy/SwirlingSparkles_01_Regular_BluePink_400x400.webm`,
                greenorange: `${prefix}/jb2a_patreon/Library/Generic/Energy/SwirlingSparkles_01_Regular_GreenOrange_400x400.webm`,
                orangepurple: `${prefix}/jb2a_patreon/Library/Generic/Energy/SwirlingSparkles_01_Regular_OrangePurple_400x400.webm`
            }
        },
        patreonDatabase.sword = {
            melee: {
                _template: 'melee',
                fire: {
                    black: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Sword01_Fire_Regular_Black_800x600.webm`,
                    blue: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Sword01_Fire_Regular_Blue_800x600.webm`,
                    green: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Sword01_Fire_Regular_Green_800x600.webm`,
                    orange: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Sword01_Fire_Regular_Orange_800x600.webm`,
                    pink: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Sword01_Fire_Regular_Pink_800x600.webm`,
                    purple: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Sword01_Fire_Dark_Purple_800x600.webm`,
                    red: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Sword01_Fire_Regular_Red_800x600.webm`,
                    yellow: `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Sword01_Fire_Regular_Yellow_800x600.webm`
                },
                '01': {
                    dark_orangepurple: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Sword01_01_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Sword01_02_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Sword01_03_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Sword01_04_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Sword01_05_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Sword01_06_Dark_OrangePurple_800x600.webm`
                    ],
                    blue: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Sword01_01_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Sword01_02_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Sword01_03_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Sword01_04_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Sword01_05_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Sword01_06_Regular_Blue_800x600.webm`
                    ],
                    orange: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Sword01_01_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Sword01_02_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Sword01_03_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Sword01_04_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Sword01_05_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Sword01_06_Regular_Orange_800x600.webm`
                    ],
                    purple: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Sword01_01_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Sword01_02_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Sword01_03_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Sword01_04_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Sword01_05_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Sword01_06_Regular_Purple_800x600.webm`
                    ],
                    white: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Sword01_01_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Sword01_02_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Sword01_03_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Sword01_04_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Sword01_05_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Sword01_06_Regular_White_800x600.webm`
                    ],
                    yellow: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Sword01_01_Regular_Yellow_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Sword01_02_Regular_Yellow_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Sword01_03_Regular_Yellow_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Sword01_04_Regular_Yellow_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Sword01_05_Regular_Yellow_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Sword01_06_Regular_Yellow_800x600.webm`
                    ],
                }
            },
            throw: {
                _template: 'ranged',
                blue: {
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Sword01_02_Regular_Blue_15ft_1000x600.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Sword01_02_Regular_Blue_30ft_1600x600.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Sword01_02_Regular_Blue_60ft_2800x600.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Sword01_02_Regular_Blue_90ft_4000x600.webm`
                },
                white: {
                    '15ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Sword01_01_Regular_White_15ft_1000x600.webm`,
                    '30ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Sword01_01_Regular_White_30ft_1600x600.webm`,
                    '60ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Sword01_01_Regular_White_60ft_2800x600.webm`,
                    '90ft': `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Sword01_01_Regular_White_90ft_4000x600.webm`
                }
            }
        },
        patreonDatabase.template_circle = {
            symbol: {
                normal: {
                    drop: {
                        dark_green: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/TemplateDropCircle_01_Dark_Green_800x800.webm`,
                        red: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/TemplateDropCircle_01_Regular_Red_800x800.webm`
                    },
                    fear: {
                        dark_orange: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/TemplateFearCircle_01_Dark_Orange_800x800.webm`,
                        dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/TemplateFearCircle_01_Dark_Purple_800x800.webm`,
                        orange: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/TemplateFearCircle_01_Regular_Orange_800x800.webm`
                    },
                    heart: {
                        dark_red: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/TemplateHeartCircle_01_Dark_Red_800x800.webm`,
                        pink: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/TemplateHeartCircle_01_Regular_Pink_800x800.webm`,
                        teal: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/TemplateHeartCircle_01_Regular_Teal_800x800.webm`
                    },
                    horror: {
                        dark_teal: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/TemplateHorrorCircle_01_Dark_Teal_800x800.webm`,
                        purple: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/TemplateHorrorCircle_01_Regular_Purple_800x800.webm`,
                        teal: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/TemplateHorrorCircle_01_Regular_Teal_800x800.webm`
                    },
                    music_note: {
                        dark_red: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/TemplateMusicNoteCircle_01_Dark_Red_800x800.webm`,
                        blue: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/TemplateMusicNoteCircle_01_Regular_Blue_800x800.webm`,
                        purple: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/TemplateMusicNoteCircle_01_Regular_Purple_800x800.webm`
                    },
                    poison: {
                        dark_green: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/TemplatePoisonCircle_01_Dark_Green_800x800.webm`,
                        purple: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/TemplatePoisonCircle_01_Regular_Purple_800x800.webm`
                    },
                    runes: {
                        dark_orange: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/TemplateRunesCircle_01_Dark_Orange_800x800.webm`,
                        dark_red: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/TemplateRunesCircle_01_Dark_Red_800x800.webm`,
                        blue: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/TemplateRunesCircle_01_Regular_Blue_800x800.webm`,
                        green02: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/TemplateRunesCircle_01_Regular_Green02_800x800.webm`,
                        orange: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/TemplateRunesCircle_01_Regular_Orange_800x800.webm`
                    },
                    shield: {
                        dark_red: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/TemplateShieldCircle_01_Dark_Red_800x800.webm`,
                        green: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/TemplateShieldCircle_01_Regular_Green_800x800.webm`
                    },
                    shield_cracked: {
                        dark_red: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/TemplateShieldCrackedCircle_01_Dark_Red_800x800.webm`,
                        purple: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/TemplateShieldCrackedCircle_01_Regular_Purple_800x800.webm`
                    },
                    skull: {
                        dark_green: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/TemplateSkullCircle_01_Dark_Green_800x800.webm`,
                        dark_orange: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/TemplateSkullCircle_01_Dark_Orange_800x800.webm`,
                        purple: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/TemplateSkullCircle_01_Regular_Purple_800x800.webm`
                    },
                    snowflake: {
                        dark_blue: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/TemplateSnowflakeCircle_01_Dark_Blue_800x800.webm`,
                        blue: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/TemplateSnowflakeCircle_01_Regular_Blue_800x800.webm`
                    },
                    stun: {
                        dark_teal: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/TemplateStunCircle_01_Dark_Teal_800x800.webm`,
                        purple: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/TemplateStunCircle_01_Regular_Purple_800x800.webm`
                    }
                },
                out_flow: {
                    drop: {
                        dark_green: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutFlow/TemplateDropCircleOutFlow_01_Dark_Green_800x800.webm`,
                        red: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutFlow/TemplateDropCircleOutFlow_01_Regular_Red_800x800.webm`
                    },
                    fear: {
                        dark_orange: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutFlow/TemplateFearCircleOutFlow_01_Dark_Orange_800x800.webm`,
                        dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutFlow/TemplateFearCircleOutFlow_01_Dark_Purple_800x800.webm`,
                        orange: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutFlow/TemplateFearCircleOutFlow_01_Regular_Orange_800x800.webm`
                    },
                    heart: {
                        dark_red: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutFlow/TemplateHeartCircleOutFlow_01_Dark_Red_800x800.webm`,
                        pink: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutFlow/TemplateHeartCircleOutFlow_01_Regular_Pink_800x800.webm`,
                        teal: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutFlow/TemplateHeartCircleOutFlow_01_Regular_Teal_800x800.webm`
                    },
                    horror: {
                        dark_teal: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutFlow/TemplateHorrorCircleOutFlow_01_Dark_Teal_800x800.webm`,
                        purple: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutFlow/TemplateHorrorCircleOutFlow_01_Regular_Purple_800x800.webm`,
                        teal: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutFlow/TemplateHorrorCircleOutFlow_01_Regular_Teal_800x800.webm`
                    },
                    music_note: {
                        dark_red: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutFlow/TemplateMusicNoteCircleOutFlow_01_Dark_Red_800x800.webm`,
                        blue: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutFlow/TemplateMusicNoteCircleOutFlow_01_Regular_Blue_800x800.webm`,
                        purple: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutFlow/TemplateMusicNoteCircleOutFlow_01_Regular_Purple_800x800.webm`
                    },
                    poison: {
                        dark_green: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutFlow/TemplatePoisonCircleOutFlow_01_Dark_Green_800x800.webm`,
                        purple: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutFlow/TemplatePoisonCircleOutFlow_01_Regular_Purple_800x800.webm`
                    },
                    runes: {
                        dark_orange: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutFlow/TemplateRunesCircleOutFlow_01_Dark_Orange_800x800.webm`,
                        dark_red: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutFlow/TemplateRunesCircleOutFlow_01_Dark_Red_800x800.webm`,
                        blue: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutFlow/TemplateRunesCircleOutFlow_01_Regular_Blue_800x800.webm`,
                        green02: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutFlow/TemplateRunesCircleOutFlow_01_Regular_Green02_800x800.webm`,
                        orange: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutFlow/TemplateRunesCircleOutFlow_01_Regular_Orange_800x800.webm`
                    },
                    shield: {
                        dark_red: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutFlow/TemplateShieldCircleOutFlow_01_Dark_Red_800x800.webm`,
                        green: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutFlow/TemplateShieldCircleOutFlow_01_Regular_Green_800x800.webm`
                    },
                    shield_cracked: {
                        dark_red: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutFlow/TemplateShieldCrackedCircleOutFlow_01_Dark_Red_800x800.webm`,
                        purple: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutFlow/TemplateShieldCrackedCircleOutFlow_01_Regular_Purple_800x800.webm`
                    },
                    skull: {
                        dark_green: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutFlow/TemplateSkullCircleOutFlow_01_Dark_Green_800x800.webm`,
                        dark_orange: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutFlow/TemplateSkullCircleOutFlow_01_Dark_Orange_800x800.webm`,
                        purple: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutFlow/TemplateSkullCircleOutFlow_01_Regular_Purple_800x800.webm`
                    },
                    snowflake: {
                        dark_blue: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutFlow/TemplateSnowflakeCircleOutFlow_01_Dark_Blue_800x800.webm`,
                        blue: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutFlow/TemplateSnowflakeCircleOutFlow_01_Regular_Blue_800x800.webm`
                    },
                    stun: {
                        dark_teal: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutFlow/TemplateStunCircleOutFlow_01_Dark_Teal_800x800.webm`,
                        purple: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutFlow/TemplateStunCircleOutFlow_01_Regular_Purple_800x800.webm`
                    }
                }
            },
            out_pulse: {
                '01': {
                    burst: {
                        bluewhite: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutPulse/OutPulse_01_Regular_BlueWhite_Burst_600x600.webm`,
                        greenorange: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutPulse/OutPulse_01_Regular_GreenOrange_Burst_600x600.webm`,
                        purplepink: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutPulse/OutPulse_01_Regular_PurplePink_Burst_600x600.webm`,
                        tealyellow: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutPulse/OutPulse_01_Regular_TealYellow_Burst_600x600.webm`
                    },
                    loop: {
                        bluewhite: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutPulse/OutPulse_01_Regular_BlueWhite_Loop_600x600.webm`,
                        greenorange: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutPulse/OutPulse_01_Regular_GreenOrange_Loop_600x600.webm`,
                        purplepink: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutPulse/OutPulse_01_Regular_PurplePink_Loop_600x600.webm`,
                        tealyellow: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutPulse/OutPulse_01_Regular_TealYellow_Loop_600x600.webm`
                    }
                },
                '02': {
                    burst: {
                        bluewhite: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutPulse/OutPulse_02_Regular_BlueWhite_Burst_600x600.webm`,
                        greenorange: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutPulse/OutPulse_02_Regular_GreenOrange_Burst_600x600.webm`,
                        purplepink: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutPulse/OutPulse_02_Regular_PurplePink_Burst_600x600.webm`,
                        tealyellow: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutPulse/OutPulse_02_Regular_TealYellow_Burst_600x600.webm`
                    },
                    loop: {
                        bluewhite: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutPulse/OutPulse_02_Regular_BlueWhite_Loop_600x600.webm`,
                        greenorange: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutPulse/OutPulse_02_Regular_GreenOrange_Loop_600x600.webm`,
                        purplepink: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutPulse/OutPulse_02_Regular_PurplePink_Loop_600x600.webm`,
                        tealyellow: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/OutPulse/OutPulse_02_Regular_TealYellow_Loop_600x600.webm`
                    }
                }
            },
            vortex: {
                loop: {
                    dark_black: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/Vortex_01_Dark_Black_600x600.webm`,
                    blue: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/Vortex_01_Regular_Blue_600x600.webm`,
                    green: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/Vortex_01_Regular_Green_600x600.webm`,
                    purple: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/Vortex_01_Regular_Purple_600x600.webm`
                },
                intro: {
                    dark_black: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/VortexIntro_01_Dark_Black_600x600.webm`,
                    blue: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/VortexIntro_01_Regular_Blue_600x600.webm`,
                    green: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/VortexIntro_01_Regular_Green_600x600.webm`,
                    purple: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/VortexIntro_01_Regular_Purple_600x600.webm`
                },
                outro: {
                    dark_black: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/VortexOutro_01_Dark_Black_600x600.webm`,
                    blue: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/VortexOutro_01_Regular_Blue_600x600.webm`,
                    green: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/VortexOutro_01_Regular_Green_600x600.webm`,
                    purple: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/VortexOutro_01_Regular_Purple_600x600.webm`
                }
            },
            whirl: {
                loop: {
                    dark_black: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/Whirl_01_Dark_Black_600x600.webm`,
                    blue: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/Whirl_01_Regular_Blue_600x600.webm`,
                    green: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/Whirl_01_Regular_Green_600x600.webm`,
                    purple: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/Whirl_01_Regular_Purple_600x600.webm`
                },
                intro: {
                    dark_black: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/WhirlIntro_01_Dark_Black_600x600.webm`,
                    blue: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/WhirlIntro_01_Regular_Blue_600x600.webm`,
                    green: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/WhirlIntro_01_Regular_Green_600x600.webm`,
                    purple: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/WhirlIntro_01_Regular_Purple_600x600.webm`
                },
                outro: {
                    dark_black: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/WhirlOutro_01_Dark_Black_600x600.webm`,
                    blue: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/WhirlOutro_01_Regular_Blue_600x600.webm`,
                    green: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/WhirlOutro_01_Regular_Green_600x600.webm`,
                    purple: `${prefix}/jb2a_patreon/Library/Generic/Template/Circle/WhirlOutro_01_Regular_Purple_600x600.webm`
                }
            },
        },
        patreonDatabase.template_square = {
            symbol: {
                normal: {
                    drop: {
                        dark_green: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/TemplateDropSquare_01_Dark_Green_600x600.webm`,
                        red: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/TemplateDropSquare_01_Regular_Red_600x600.webm`
                    },
                    fear: {
                        dark_orange: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/TemplateFearSquare_01_Dark_Orange_600x600.webm`,
                        dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/TemplateFearSquare_01_Dark_Purple_600x600.webm`,
                        orange: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/TemplateFearSquare_01_Regular_Orange_600x600.webm`
                    },
                    heart: {
                        dark_red: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/TemplateHeartSquare_01_Dark_Red_600x600.webm`,
                        pink: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/TemplateHeartSquare_01_Regular_Pink_600x600.webm`,
                        teal: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/TemplateHeartSquare_01_Regular_Teal_600x600.webm`
                    },
                    horror: {
                        dark_teal: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/TemplateHorrorSquare_01_Dark_Teal_600x600.webm`,
                        purple: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/TemplateHorrorSquare_01_Regular_Purple_600x600.webm`,
                        teal: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/TemplateHorrorSquare_01_Regular_Teal_600x600.webm`
                    },
                    music_note: {
                        dark_red: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/TemplateMusicNoteSquare_01_Dark_Red_600x600.webm`,
                        blue: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/TemplateMusicNoteSquare_01_Regular_Blue_600x600.webm`,
                        purple: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/TemplateMusicNoteSquare_01_Regular_Purple_600x600.webm`
                    },
                    poison: {
                        dark_green: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/TemplatePoisonSquare_01_Dark_Green_600x600.webm`,
                        purple: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/TemplatePoisonSquare_01_Regular_Purple_600x600.webm`
                    },
                    runes: {
                        dark_orange: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/TemplateRunesSquare_01_Dark_Orange_600x600.webm`,
                        dark_red: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/TemplateRunesSquare_01_Dark_Red_600x600.webm`,
                        blue: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/TemplateRunesSquare_01_Regular_Blue_600x600.webm`,
                        green02: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/TemplateRunesSquare_01_Regular_Green02_600x600.webm`,
                        orange: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/TemplateRunesSquare_01_Regular_Orange_600x600.webm`
                    },
                    shield: {
                        dark_red: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/TemplateShieldSquare_01_Dark_Red_600x600.webm`,
                        green: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/TemplateShieldSquare_01_Regular_Green_600x600.webm`,
                    },
                    shield_cracked: {
                        dark_red: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/TemplateShieldCrackedSquare_01_Dark_Red_600x600.webm`,
                        purple: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/TemplateShieldCrackedSquare_01_Regular_Purple_600x600.webm`,
                    },
                    skull: {
                        dark_green: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/TemplateSkullSquare_01_Dark_Green_600x600.webm`,
                        dark_orange: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/TemplateSkullSquare_01_Dark_Orange_600x600.webm`,
                        purple: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/TemplateSkullSquare_01_Regular_Purple_600x600.webm`,
                    },
                    snowflake: {
                        dark_blue: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/TemplateSnowflakeSquare_01_Dark_Blue_600x600.webm`,
                        blue: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/TemplateSnowflakeSquare_01_Regular_Blue_600x600.webm`
                    },
                    stun: {
                        dark_teal: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/TemplateStunSquare_01_Dark_Teal_600x600.webm`,
                        purple: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/TemplateStunSquare_01_Regular_Purple_600x600.webm`
                    }
                },
                out_flow: {
                    drop: {
                        dark_green: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/OutFlow/TemplateDropSquareOutFlow_01_Dark_Green_600x600.webm`,
                        red: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/OutFlow/TemplateDropSquareOutFlow_01_Regular_Red_600x600.webm`
                    },
                    fear: {
                        dark_orange: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/OutFlow/TemplateFearSquareOutFlow_01_Dark_Orange_600x600.webm`,
                        dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/OutFlow/TemplateFearSquareOutFlow_01_Dark_Purple_600x600.webm`,
                        orange: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/OutFlow/TemplateFearSquareOutFlow_01_Regular_Orange_600x600.webm`
                    },
                    heart: {
                        dark_red: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/OutFlow/TemplateHeartSquareOutFlow_01_Dark_Red_600x600.webm`,
                        pink: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/OutFlow/TemplateHeartSquareOutFlow_01_Regular_Pink_600x600.webm`,
                        teal: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/OutFlow/TemplateHeartSquareOutFlow_01_Regular_Teal_600x600.webm`
                    },
                    horror: {
                        dark_teal: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/OutFlow/TemplateHorrorSquareOutFlow_01_Dark_Teal_600x600.webm`,
                        purple: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/OutFlow/TemplateHorrorSquareOutFlow_01_Regular_Purple_600x600.webm`,
                        teal: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/OutFlow/TemplateHorrorSquareOutFlow_01_Regular_Teal_600x600.webm`
                    },
                    music_note: {
                        dark_red: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/OutFlow/TemplateMusicNoteSquareOutFlow_01_Dark_Red_600x600.webm`,
                        blue: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/OutFlow/TemplateMusicNoteSquareOutFlow_01_Regular_Blue_600x600.webm`,
                        purple: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/OutFlow/TemplateMusicNoteSquareOutFlow_01_Regular_Purple_600x600.webm`
                    },
                    poison: {
                        dark_green: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/OutFlow/TemplatePoisonSquareOutFlow_01_Dark_Green_600x600.webm`,
                        purple: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/OutFlow/TemplatePoisonSquareOutFlow_01_Regular_Purple_600x600.webm`
                    },
                    runes: {
                        dark_orange: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/OutFlow/TemplateRunesSquareOutFlow_01_Dark_Orange_600x600.webm`,
                        dark_red: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/OutFlow/TemplateRunesSquareOutFlow_01_Dark_Red_600x600.webm`,
                        blue: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/OutFlow/TemplateRunesSquareOutFlow_01_Regular_Blue_600x600.webm`,
                        green02: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/OutFlow/TemplateRunesSquareOutFlow_01_Regular_Green02_600x600.webm`,
                        orange: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/OutFlow/TemplateRunesSquareOutFlow_01_Regular_Orange_600x600.webm`
                    },
                    shield: {
                        dark_red: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/OutFlow/TemplateShieldSquareOutFlow_01_Dark_Red_600x600.webm`,
                        green: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/OutFlow/TemplateShieldSquareOutFlow_01_Regular_Green_600x600.webm`
                    },
                    shield_cracked: {
                        dark_red: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/OutFlow/TemplateShieldCrackedSquareOutFlow_01_Dark_Red_600x600.webm`,
                        purple: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/OutFlow/TemplateShieldCrackedSquareOutFlow_01_Regular_Purple_600x600.webm`,
                    },
                    skull: {
                        dark_green: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/OutFlow/TemplateSkullSquareOutFlow_01_Dark_Green_600x600.webm`,
                        dark_orange: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/OutFlow/TemplateSkullSquareOutFlow_01_Dark_Orange_600x600.webm`,
                        purple: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/OutFlow/TemplateSkullSquareOutFlow_01_Regular_Purple_600x600.webm`
                    },
                    snowflake: {
                        dark_blue: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/OutFlow/TemplateSnowflakeSquareOutFlow_01_Dark_Blue_600x600.webm`,
                        blue: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/OutFlow/TemplateSnowflakeSquareOutFlow_01_Regular_Blue_600x600.webm`
                    },
                    stun: {
                        dark_teal: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/OutFlow/TemplateStunSquareOutFlow_01_Dark_Teal_600x600.webm`,
                        purple: `${prefix}/jb2a_patreon/Library/Generic/Template/Square/OutFlow/TemplateStunSquareOutFlow_01_Regular_Purple_600x600.webm`,
                    }
                }
            }
        },
        patreonDatabase.token_border = {
            circle: {
                static: {
                    blue: {
                        '001': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircle_01_Regular_Blue_400x400.webm`,
                        '002': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircle_02_Regular_Blue_400x400.webm`,
                        '003': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircle_03_Regular_Blue_400x400.webm`,
                        '004': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircle_04_Regular_Blue_400x400.webm`,
                        '005': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircle_05_Regular_Blue_400x400.webm`,
                        '006': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircle_06_Regular_Blue_400x400.webm`,
                        '007': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircle_07_Regular_Blue_400x400.webm`,
                        '008': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircle_08_Regular_Blue_400x400.webm`,
                        '009': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircle_09_Regular_Blue_400x400.webm`,
                        '010': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircle_10_Regular_Blue_400x400.webm`,
                        '011': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircle_11_Regular_Blue_400x400.webm`,
                        '012': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircle_12_Regular_Blue_400x400.webm`,
                        '013': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircle_13_Regular_Blue_400x400.webm`
                    },
                    orange: {
                        '001': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircle_01_Regular_Orange_400x400.webm`,
                        '002': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircle_02_Regular_Orange_400x400.webm`,
                        '003': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircle_03_Regular_Orange_400x400.webm`,
                        '004': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircle_04_Regular_Orange_400x400.webm`,
                        '005': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircle_05_Regular_Orange_400x400.webm`,
                        '006': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircle_06_Regular_Orange_400x400.webm`,
                        '007': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircle_07_Regular_Orange_400x400.webm`,
                        '008': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircle_08_Regular_Orange_400x400.webm`,
                        '009': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircle_09_Regular_Orange_400x400.webm`,
                        '010': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircle_10_Regular_Orange_400x400.webm`,
                        '011': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircle_11_Regular_Orange_400x400.webm`,
                        '012': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircle_12_Regular_Orange_400x400.webm`,
                        '013': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircle_13_Regular_Orange_400x400.webm`
                    },
                    purple: {
                        '001': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircle_01_Regular_Purple_400x400.webm`,
                        '002': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircle_02_Regular_Purple_400x400.webm`,
                        '003': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircle_03_Regular_Purple_400x400.webm`,
                        '004': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircle_04_Regular_Purple_400x400.webm`,
                        '005': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircle_05_Regular_Purple_400x400.webm`,
                        '006': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircle_06_Regular_Purple_400x400.webm`,
                        '007': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircle_07_Regular_Purple_400x400.webm`,
                        '008': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircle_08_Regular_Purple_400x400.webm`,
                        '009': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircle_09_Regular_Purple_400x400.webm`,
                        '010': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircle_10_Regular_Purple_400x400.webm`,
                        '011': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircle_11_Regular_Purple_400x400.webm`,
                        '012': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircle_12_Regular_Purple_400x400.webm`,
                        '013': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircle_13_Regular_Purple_400x400.webm`
                    }
                },
                spinning: {
                    blue: {
                        '001': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircleSpin_01_Regular_Blue_400x400.webm`,
                        '002': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircleSpin_02_Regular_Blue_400x400.webm`,
                        '003': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircleSpin_03_Regular_Blue_400x400.webm`,
                        '004': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircleSpin_04_Regular_Blue_400x400.webm`,
                        '005': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircleSpin_05_Regular_Blue_400x400.webm`,
                        '006': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircleSpin_06_Regular_Blue_400x400.webm`,
                        '007': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircleSpin_07_Regular_Blue_400x400.webm`,
                        '008': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircleSpin_08_Regular_Blue_400x400.webm`,
                        '009': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircleSpin_09_Regular_Blue_400x400.webm`,
                        '010': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircleSpin_10_Regular_Blue_400x400.webm`,
                        '011': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircleSpin_11_Regular_Blue_400x400.webm`,
                        '012': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircleSpin_12_Regular_Blue_400x400.webm`,
                        '013': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircleSpin_13_Regular_Blue_400x400.webm`
                    },
                    orange: {
                        '001': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircleSpin_01_Regular_Orange_400x400.webm`,
                        '002': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircleSpin_02_Regular_Orange_400x400.webm`,
                        '003': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircleSpin_03_Regular_Orange_400x400.webm`,
                        '004': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircleSpin_04_Regular_Orange_400x400.webm`,
                        '005': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircleSpin_05_Regular_Orange_400x400.webm`,
                        '006': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircleSpin_06_Regular_Orange_400x400.webm`,
                        '007': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircleSpin_07_Regular_Orange_400x400.webm`,
                        '008': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircleSpin_08_Regular_Orange_400x400.webm`,
                        '009': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircleSpin_09_Regular_Orange_400x400.webm`,
                        '010': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircleSpin_10_Regular_Orange_400x400.webm`,
                        '011': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircleSpin_11_Regular_Orange_400x400.webm`,
                        '012': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircleSpin_12_Regular_Orange_400x400.webm`,
                        '013': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircleSpin_13_Regular_Orange_400x400.webm`
                    },
                    purple: {
                        '001': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircleSpin_01_Regular_Purple_400x400.webm`,
                        '002': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircleSpin_02_Regular_Purple_400x400.webm`,
                        '003': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircleSpin_03_Regular_Purple_400x400.webm`,
                        '004': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircleSpin_04_Regular_Purple_400x400.webm`,
                        '005': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircleSpin_05_Regular_Purple_400x400.webm`,
                        '006': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircleSpin_06_Regular_Purple_400x400.webm`,
                        '007': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircleSpin_07_Regular_Purple_400x400.webm`,
                        '008': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircleSpin_08_Regular_Purple_400x400.webm`,
                        '009': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircleSpin_09_Regular_Purple_400x400.webm`,
                        '010': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircleSpin_10_Regular_Purple_400x400.webm`,
                        '011': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircleSpin_11_Regular_Purple_400x400.webm`,
                        '012': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircleSpin_12_Regular_Purple_400x400.webm`,
                        '013': `${prefix}/jb2a_patreon/Library/Generic/Token_Border/TokenBorderCircleSpin_13_Regular_Purple_400x400.webm`
                    }
                }
            }
        },
        patreonDatabase.token_stage = {
            hex: {
                blue: {
                    '01': {
                        '01': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageHex01_01_Regular_Blue_400x400.webm`,
                        '02': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageHex01_02_Regular_Blue_400x400.webm`,
                        '03': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageHex01_03_Regular_Blue_400x400.webm`,
                        '04': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageHex01_04_Regular_Blue_400x400.webm`,
                        '05': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageHex01_05_Regular_Blue_400x400.webm`,
                        '06': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageHex01_06_Regular_Blue_400x400.webm`
                    },
                    '02': {
                        '01': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageHex02_01_Regular_Blue_400x400.webm`,
                        '02': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageHex02_02_Regular_Blue_400x400.webm`,
                        '03': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageHex02_03_Regular_Blue_400x400.webm`
                    }
                },
                green: {
                    '01': {
                        '01': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageHex01_01_Regular_Green_400x400.webm`,
                        '02': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageHex01_02_Regular_Green_400x400.webm`,
                        '03': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageHex01_03_Regular_Green_400x400.webm`,
                        '04': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageHex01_04_Regular_Green_400x400.webm`,
                        '05': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageHex01_05_Regular_Green_400x400.webm`,
                        '06': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageHex01_06_Regular_Green_400x400.webm`
                    },
                    '02': {
                        '01': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageHex02_01_Regular_Green_400x400.webm`,
                        '02': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageHex02_02_Regular_Green_400x400.webm`,
                        '03': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageHex02_03_Regular_Green_400x400.webm`
                    }
                },
                red: {
                    '01': {
                        '01': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageHex01_01_Regular_Red_400x400.webm`,
                        '02': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageHex01_02_Regular_Red_400x400.webm`,
                        '03': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageHex01_03_Regular_Red_400x400.webm`,
                        '04': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageHex01_04_Regular_Red_400x400.webm`,
                        '05': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageHex01_05_Regular_Red_400x400.webm`,
                        '06': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageHex01_06_Regular_Red_400x400.webm`
                    },
                    '02': {
                        '01': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageHex02_01_Regular_Red_400x400.webm`,
                        '02': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageHex02_02_Regular_Red_400x400.webm`,
                        '03': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageHex02_03_Regular_Red_400x400.webm`
                    }
                }
            },
            round: {
                blue: {
                    '01': {
                        '01': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageRound01_01_Regular_Blue_400x400.webm`,
                        '02': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageRound01_02_Regular_Blue_400x400.webm`,
                        '03': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageRound01_03_Regular_Blue_400x400.webm`,
                        '04': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageRound01_04_Regular_Blue_400x400.webm`,
                        '05': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageRound01_05_Regular_Blue_400x400.webm`,
                        '06': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageRound01_06_Regular_Blue_400x400.webm`
                    },
                    '02': {
                        '01': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageRound02_01_Regular_Blue_400x400.webm`,
                        '02': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageRound02_02_Regular_Blue_400x400.webm`,
                        '03': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageRound02_03_Regular_Blue_400x400.webm`
                    }
                },
                green: {
                    '01': {
                        '01': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageRound01_01_Regular_Green_400x400.webm`,
                        '02': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageRound01_02_Regular_Green_400x400.webm`,
                        '03': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageRound01_03_Regular_Green_400x400.webm`,
                        '04': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageRound01_04_Regular_Green_400x400.webm`,
                        '05': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageRound01_05_Regular_Green_400x400.webm`,
                        '06': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageRound01_06_Regular_Green_400x400.webm`
                    },
                    '02': {
                        '01': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageRound02_01_Regular_Green_400x400.webm`,
                        '02': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageRound02_02_Regular_Green_400x400.webm`,
                        '03': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageRound02_03_Regular_Green_400x400.webm`
                    }
                },
                red: {
                    '01': {
                        '01': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageRound01_01_Regular_Red_400x400.webm`,
                        '02': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageRound01_02_Regular_Red_400x400.webm`,
                        '03': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageRound01_03_Regular_Red_400x400.webm`,
                        '04': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageRound01_04_Regular_Red_400x400.webm`,
                        '05': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageRound01_05_Regular_Red_400x400.webm`,
                        '06': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageRound01_06_Regular_Red_400x400.webm`
                    },
                    '02': {
                        '01': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageRound02_01_Regular_Red_400x400.webm`,
                        '02': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageRound02_02_Regular_Red_400x400.webm`,
                        '03': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageRound02_03_Regular_Red_400x400.webm`
                    }
                }
            },
            square: {
                blue: {
                    '01': {
                        '01': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageSquare01_01_Regular_Blue_400x400.webm`,
                        '02': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageSquare01_02_Regular_Blue_400x400.webm`,
                        '03': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageSquare01_03_Regular_Blue_400x400.webm`,
                        '04': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageSquare01_04_Regular_Blue_400x400.webm`,
                        '05': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageSquare01_05_Regular_Blue_400x400.webm`,
                        '06': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageSquare01_06_Regular_Blue_400x400.webm`
                    },
                    '02': {
                        '01': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageSquare02_01_Regular_Blue_400x400.webm`,
                        '02': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageSquare02_02_Regular_Blue_400x400.webm`,
                        '03': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageSquare02_03_Regular_Blue_400x400.webm`
                    }
                },
                green: {
                    '01': {
                        '01': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageSquare01_01_Regular_Green_400x400.webm`,
                        '02': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageSquare01_02_Regular_Green_400x400.webm`,
                        '03': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageSquare01_03_Regular_Green_400x400.webm`,
                        '04': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageSquare01_04_Regular_Green_400x400.webm`,
                        '05': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageSquare01_05_Regular_Green_400x400.webm`,
                        '06': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageSquare01_06_Regular_Green_400x400.webm`
                    },
                    '02': {
                        '01': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageSquare02_01_Regular_Green_400x400.webm`,
                        '02': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageSquare02_02_Regular_Green_400x400.webm`,
                        '03': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageSquare02_03_Regular_Green_400x400.webm`
                    }
                },
                red: {
                    '01': {
                        '01': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageSquare01_01_Regular_Red_400x400.webm`,
                        '02': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageSquare01_02_Regular_Red_400x400.webm`,
                        '03': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageSquare01_03_Regular_Red_400x400.webm`,
                        '04': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageSquare01_04_Regular_Red_400x400.webm`,
                        '05': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageSquare01_05_Regular_Red_400x400.webm`,
                        '06': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageSquare01_06_Regular_Red_400x400.webm`
                    },
                    '02': {
                        '01': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageSquare02_01_Regular_Red_400x400.webm`,
                        '02': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageSquare02_02_Regular_Red_400x400.webm`,
                        '03': `${prefix}/jb2a_patreon/Library/Generic/Token_Stage/TokenStageSquare02_03_Regular_Red_400x400.webm`
                    }
                }
            }
        },
        patreonDatabase.toll_the_dead = {
            blue: {
                bell: `${prefix}/jb2a_patreon/Library/Cantrip/Toll_The_Dead/TollTheDeadBell_01_Regular_Blue_400x400.webm`,
                complete: `${prefix}/jb2a_patreon/Library/Cantrip/Toll_The_Dead/TollTheDead_01_Regular_Blue_400x400.webm`,
                shockwave: `${prefix}/jb2a_patreon/Library/Cantrip/Toll_The_Dead/TollTheDeadShockwave_01_Regular_Blue_400x400.webm`,
                skull_smoke: `${prefix}/jb2a_patreon/Library/Cantrip/Toll_The_Dead/TollTheDeadSkullSmoke_01_Regular_Blue_400x400.webm`
            },
            green: {
                bell: `${prefix}/jb2a_patreon/Library/Cantrip/Toll_The_Dead/TollTheDeadBell_01_Regular_Green_400x400.webm`,
                complete: `${prefix}/jb2a_patreon/Library/Cantrip/Toll_The_Dead/TollTheDead_01_Regular_Green_400x400.webm`,
                shockwave: `${prefix}/jb2a_patreon/Library/Cantrip/Toll_The_Dead/TollTheDeadShockwave_01_Regular_Green_400x400.webm`,
                skull_smoke: `${prefix}/jb2a_patreon/Library/Cantrip/Toll_The_Dead/TollTheDeadSkullSmoke_01_Regular_Green_400x400.webm`
            },
            purple: {
                bell: `${prefix}/jb2a_patreon/Library/Cantrip/Toll_The_Dead/TollTheDeadBell_01_Regular_Purple_400x400.webm`,
                complete: `${prefix}/jb2a_patreon/Library/Cantrip/Toll_The_Dead/TollTheDead_01_Regular_Purple_400x400.webm`,
                shockwave: `${prefix}/jb2a_patreon/Library/Cantrip/Toll_The_Dead/TollTheDeadShockwave_01_Regular_Purple_400x400.webm`,
                skull_smoke: `${prefix}/jb2a_patreon/Library/Cantrip/Toll_The_Dead/TollTheDeadSkullSmoke_01_Regular_Purple_400x400.webm`
            },
            red: {
                bell: `${prefix}/jb2a_patreon/Library/Cantrip/Toll_The_Dead/TollTheDeadBell_01_Regular_Red_400x400.webm`,
                complete: `${prefix}/jb2a_patreon/Library/Cantrip/Toll_The_Dead/TollTheDead_01_Regular_Red_400x400.webm`,
                shockwave: `${prefix}/jb2a_patreon/Library/Cantrip/Toll_The_Dead/TollTheDeadShockwave_01_Regular_Red_400x400.webm`,
                skull_smoke: `${prefix}/jb2a_patreon/Library/Cantrip/Toll_The_Dead/TollTheDeadSkullSmoke_01_Regular_Red_400x400.webm`
            }
        },
        patreonDatabase.thunderwave = {
            bottom_left: {
                blue: `${prefix}/jb2a_patreon/Library/1st_Level/Thunderwave/Thunderwave_01_Bright_Blue_BLeft_600x600.webm`,
                dark_purple: `${prefix}/jb2a_patreon/Library/1st_Level/Thunderwave/Thunderwave_01_Dark_Purple_BLeft_600x600.webm`,
                dark_red: `${prefix}/jb2a_patreon/Library/1st_Level/Thunderwave/Thunderwave_01_Dark_Red_BLeft_600x600.webm`,
                green: `${prefix}/jb2a_patreon/Library/1st_Level/Thunderwave/Thunderwave_01_Bright_Green_BLeft_600x600.webm`,
                orange: `${prefix}/jb2a_patreon/Library/1st_Level/Thunderwave/Thunderwave_01_Bright_Orange_BLeft_600x600.webm`
            },
            bottom_middle: {
                blue: `${prefix}/jb2a_patreon/Library/1st_Level/Thunderwave/Thunderwave_01_Bright_Blue_BMid_600x600.webm`,
                dark_purple: `${prefix}/jb2a_patreon/Library/1st_Level/Thunderwave/Thunderwave_01_Dark_Purple_BMid_600x600.webm`,
                dark_red: `${prefix}/jb2a_patreon/Library/1st_Level/Thunderwave/Thunderwave_01_Dark_Red_BMid_600x600.webm`,
                green: `${prefix}/jb2a_patreon/Library/1st_Level/Thunderwave/Thunderwave_01_Bright_Green_BMid_600x600.webm`,
                orange: `${prefix}/jb2a_patreon/Library/1st_Level/Thunderwave/Thunderwave_01_Bright_Orange_BMid_600x600.webm`
            },
            center: {
                blue: `${prefix}/jb2a_patreon/Library/1st_Level/Thunderwave/Thunderwave_01_Bright_Blue_Center_600x600.webm`,
                dark_purple: `${prefix}/jb2a_patreon/Library/1st_Level/Thunderwave/Thunderwave_01_Dark_Purple_Center_600x600.webm`,
                dark_red: `${prefix}/jb2a_patreon/Library/1st_Level/Thunderwave/Thunderwave_01_Dark_Red_Center_600x600.webm`,
                green: `${prefix}/jb2a_patreon/Library/1st_Level/Thunderwave/Thunderwave_01_Bright_Green_Center_600x600.webm`,
                orange: `${prefix}/jb2a_patreon/Library/1st_Level/Thunderwave/Thunderwave_01_Bright_Orange_Center_600x600.webm`
            }
        },
        patreonDatabase.twinkling_stars = {
            points04: {
                orange: `${prefix}/jb2a_patreon/Library/Generic/Twinkling_Stars/TwinklingStars_04_Orange_100x100.webm`,
                white: `${prefix}/jb2a_patreon/Library/Generic/Twinkling_Stars/TwinklingStars_04_100x100.webm`
            },
            points05: {
                orange: `${prefix}/jb2a_patreon/Library/Generic/Twinkling_Stars/TwinklingStars_05_Orange_100x100.webm`,
                white: `${prefix}/jb2a_patreon/Library/Generic/Twinkling_Stars/TwinklingStars_05_100x100.webm`
            },
            points06: {
                orange: `${prefix}/jb2a_patreon/Library/Generic/Twinkling_Stars/TwinklingStars_06_Orange_100x100.webm`,
                white: `${prefix}/jb2a_patreon/Library/Generic/Twinkling_Stars/TwinklingStars_06_100x100.webm`
            },
            points07: {
                orange: `${prefix}/jb2a_patreon/Library/Generic/Twinkling_Stars/TwinklingStars_07_Orange_100x100.webm`,
                white: `${prefix}/jb2a_patreon/Library/Generic/Twinkling_Stars/TwinklingStars_07_100x100.webm`
            },
            points08: {
                orange: `${prefix}/jb2a_patreon/Library/Generic/Twinkling_Stars/TwinklingStars_08_Orange_100x100.webm`,
                white: `${prefix}/jb2a_patreon/Library/Generic/Twinkling_Stars/TwinklingStars_08_100x100.webm`
            },
            points09: {
                orange: `${prefix}/jb2a_patreon/Library/Generic/Twinkling_Stars/TwinklingStars_09_Orange_100x100.webm`,
                white: `${prefix}/jb2a_patreon/Library/Generic/Twinkling_Stars/TwinklingStars_09_100x100.webm`
            }
        },
        patreonDatabase.ui = {
            chevrons3: {
                green: `${prefix}/jb2a_patreon/Library/Generic/UI/3Chevrons_01_Regular_Green_200x200.webm`,
                purple: `${prefix}/jb2a_patreon/Library/Generic/UI/3Chevrons_01_Regular_Purple_200x200.webm`,
                red: `${prefix}/jb2a_patreon/Library/Generic/UI/3Chevrons_01_Regular_Red_200x200.webm`,
                yellow: `${prefix}/jb2a_patreon/Library/Generic/UI/3Chevrons_01_Regular_Yellow_200x200.webm`
            },
            critical: {
                red: `${prefix}/jb2a_patreon/Library/Generic/UI/Critical_02_Red_200x200.webm`,
                yellow: `${prefix}/jb2a_patreon/Library/Generic/UI/Critical_01_Yellow_200x200.webm`
            },
            indicator: {
                green: {
                    '01': {
                        '01': `${prefix}/jb2a_patreon/Library/Generic/UI/Indicator_01_Regular_Green_200x200.webm`
                    }
                },
                purple: {
                    '01': {
                        '01': `${prefix}/jb2a_patreon/Library/Generic/UI/Indicator_01_Regular_Purple_200x200.webm`
                    }
                },
                red: {
                    '01': {
                        '01': `${prefix}/jb2a_patreon/Library/Generic/UI/Indicator_01_Regular_Red_200x200.webm`
                    }
                },
                yellow: {
                    '01': {
                        '01': `${prefix}/jb2a_patreon/Library/Generic/UI/Indicator_01_Regular_Yellow_200x200.webm`
                    }
                },
                bluegreen: {
                    '02': {
                        '01': `${prefix}/jb2a_patreon/Library/Generic/UI/Indicator01_02_Regular_BlueGreen_400x400.webm`,
                        '02': `${prefix}/jb2a_patreon/Library/Generic/UI/Indicator02_02_Regular_BlueGreen_400x400.webm`,
                        '03': `${prefix}/jb2a_patreon/Library/Generic/UI/Indicator03_02_Regular_BlueGreen_400x400.webm`
                    },
                    '03': {
                        '01': `${prefix}/jb2a_patreon/Library/Generic/UI/Indicator01_03_Regular_BlueGreen_200x200.webm`,
                        '02': `${prefix}/jb2a_patreon/Library/Generic/UI/Indicator02_03_Regular_BlueGreen_200x200.webm`,
                        '03': `${prefix}/jb2a_patreon/Library/Generic/UI/Indicator03_03_Regular_BlueGreen_200x200.webm`
                    }
                },
                redyellow: {
                    '02': {
                        '01': `${prefix}/jb2a_patreon/Library/Generic/UI/Indicator01_02_Regular_RedYellow_400x400.webm`,
                        '02': `${prefix}/jb2a_patreon/Library/Generic/UI/Indicator02_02_Regular_RedYellow_400x400.webm`,
                        '03': `${prefix}/jb2a_patreon/Library/Generic/UI/Indicator03_02_Regular_RedYellow_400x400.webm`
                    },
                    '03': {
                        '01': `${prefix}/jb2a_patreon/Library/Generic/UI/Indicator01_03_Regular_RedYellow_200x200.webm`,
                        '02': `${prefix}/jb2a_patreon/Library/Generic/UI/Indicator02_03_Regular_RedYellow_200x200.webm`,
                        '03': `${prefix}/jb2a_patreon/Library/Generic/UI/Indicator03_03_Regular_RedYellow_200x200.webm`
                    }
                }
            },
            miss: {
                red: `${prefix}/jb2a_patreon/Library/Generic/UI/Miss_01_Red_200x200.webm`,
                white: `${prefix}/jb2a_patreon/Library/Generic/UI/Miss_02_White_200x200.webm`
            }
        },
        patreonDatabase.unarmed_strike = {
            _template: 'melee',
            magical: {
                '01': {
                    blue: `${prefix}/jb2a_patreon/Library/Generic/Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_Blue_Magical01_800x600.webm`,
                    dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Dark_Purple_Magical01_800x600.webm`,
                    dark_red: `${prefix}/jb2a_patreon/Library/Generic/Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Dark_Red_Magical01_800x600.webm`,
                    green: `${prefix}/jb2a_patreon/Library/Generic/Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_Green_Magical01_800x600.webm`,
                    orange: `${prefix}/jb2a_patreon/Library/Generic/Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_Orange_Magical01_800x600.webm`,
                    pinkpurple: `${prefix}/jb2a_patreon/Library/Generic/Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_PinkPurple_Magical01_800x600.webm`,
                    yellow: `${prefix}/jb2a_patreon/Library/Generic/Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_Yellow_Magical01_800x600.webm`
                },
                '02': {
                    blue: `${prefix}/jb2a_patreon/Library/Generic/Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_Blue_Magical02_800x600.webm`,
                    dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Dark_Purple_Magical02_800x600.webm`,
                    dark_red: `${prefix}/jb2a_patreon/Library/Generic/Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Dark_Red_Magical02_800x600.webm`,
                    green: `${prefix}/jb2a_patreon/Library/Generic/Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_Green_Magical02_800x600.webm`,
                    orange: `${prefix}/jb2a_patreon/Library/Generic/Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_Orange_Magical02_800x600.webm`,
                    pinkpurple: `${prefix}/jb2a_patreon/Library/Generic/Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_PinkPurple_Magical02_800x600.webm`,
                    yellow: `${prefix}/jb2a_patreon/Library/Generic/Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_Yellow_Magical02_800x600.webm`
                }
            },
            physical: {
                '01': {
                    blue: `${prefix}/jb2a_patreon/Library/Generic/Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_Blue_Physical01_800x600.webm`,
                    dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Dark_Purple_Physical01_800x600.webm`,
                    dark_red: `${prefix}/jb2a_patreon/Library/Generic/Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Dark_Red_Physical01_800x600.webm`,
                    green: `${prefix}/jb2a_patreon/Library/Generic/Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_Green_Physical01_800x600.webm`,
                    orange: `${prefix}/jb2a_patreon/Library/Generic/Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_Orange_Physical01_800x600.webm`,
                    pinkpurple: `${prefix}/jb2a_patreon/Library/Generic/Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_PinkPurple_Physical01_800x600.webm`,
                    yellow: `${prefix}/jb2a_patreon/Library/Generic/Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_Yellow_Physical01_800x600.webm`
                },
                '02': {
                    blue: `${prefix}/jb2a_patreon/Library/Generic/Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_Blue_Physical02_800x600.webm`,
                    dark_purple: `${prefix}/jb2a_patreon/Library/Generic/Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Dark_Purple_Physical02_800x600.webm`,
                    dark_red: `${prefix}/jb2a_patreon/Library/Generic/Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Dark_Red_Physical02_800x600.webm`,
                    green: `${prefix}/jb2a_patreon/Library/Generic/Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_Green_Physical02_800x600.webm`,
                    orange: `${prefix}/jb2a_patreon/Library/Generic/Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_Orange_Physical02_800x600.webm`,
                    pinkpurple: `${prefix}/jb2a_patreon/Library/Generic/Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_PinkPurple_Physical02_800x600.webm`,
                    yellow: `${prefix}/jb2a_patreon/Library/Generic/Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_Yellow_Physical02_800x600.webm`
                },
            },
            no_hit: {
                '01': {
                    blue: `${prefix}/jb2a_patreon/Library/Generic/Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_Blue_Physical01_800x600.webm`,
                    yellow: `${prefix}/jb2a_patreon/Library/Generic/Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_Yellow_Physical01_800x600.webm`
                }
            }
        },
        patreonDatabase.wall_of_fire = {
            '100x100': {
                blue: `${prefix}/jb2a_patreon/Library/4th_Level/Wall_Of_Fire/WallOfFire_01_Blue_100x100.webm`,
                yellow: `${prefix}/jb2a_patreon/Library/4th_Level/Wall_Of_Fire/WallOfFire_01_Yellow_100x100.webm`
            },
            '200x100': {
                blue: `${prefix}/jb2a_patreon/Library/4th_Level/Wall_Of_Fire/WallOfFire_01_Blue_200x100.webm`,
                yellow: `${prefix}/jb2a_patreon/Library/4th_Level/Wall_Of_Fire/WallOfFire_01_Yellow_200x100.webm`
            },
            '300x100': {
                blue: `${prefix}/jb2a_patreon/Library/4th_Level/Wall_Of_Fire/WallOfFire_01_Blue_300x100.webm`,
                yellow: `${prefix}/jb2a_patreon/Library/4th_Level/Wall_Of_Fire/WallOfFire_01_Yellow_300x100.webm`
            },
            '500x100': {
                blue: `${prefix}/jb2a_patreon/Library/4th_Level/Wall_Of_Fire/WallOfFire_01_Blue_Ring_400x400.webm`,
                yellow: `${prefix}/jb2a_patreon/Library/4th_Level/Wall_Of_Fire/WallOfFire_01_Yellow_Ring_400x400.webm`
            },
            ring: {
                blue: `${prefix}/jb2a_patreon/Library/4th_Level/Wall_Of_Fire/WallOfFire_01_Blue_Ring_400x400.webm`,
                yellow: `${prefix}/jb2a_patreon/Library/4th_Level/Wall_Of_Fire/WallOfFire_01_Yellow_Ring_400x400.webm`
            }
        },
        patreonDatabase.wall_of_force = {
            horizontal: {
                blue: `${prefix}/jb2a_patreon/Library/5th_Level/Wall_Of_Force/WallOfForce_01_Blue_H_200x200.webm`,
                green: `${prefix}/jb2a_patreon/Library/5th_Level/Wall_Of_Force/WallOfForce_01_Green_H_200x200.webm`,
                grey: `${prefix}/jb2a_patreon/Library/5th_Level/Wall_Of_Force/WallOfForce_01_Grey_H_200x200.webm`,
                orange: `${prefix}/jb2a_patreon/Library/5th_Level/Wall_Of_Force/WallOfForce_01_Orange_H_200x200.webm`,
                purple: `${prefix}/jb2a_patreon/Library/5th_Level/Wall_Of_Force/WallOfForce_01_Purple_H_200x200.webm`,
                red: `${prefix}/jb2a_patreon/Library/5th_Level/Wall_Of_Force/WallOfForce_01_Red_H_200x200.webm`,
                yellow: `${prefix}/jb2a_patreon/Library/5th_Level/Wall_Of_Force/WallOfForce_01_Yellow_H_200x200.webm`
            },
            sphere: {
                blue: `${prefix}/jb2a_patreon/Library/5th_Level/Wall_Of_Force/WallOfForce_01_Blue_Sphere_400x400.webm`,
                green: `${prefix}/jb2a_patreon/Library/5th_Level/Wall_Of_Force/WallOfForce_01_Green_Sphere_400x400.webm`,
                grey: `${prefix}/jb2a_patreon/Library/5th_Level/Wall_Of_Force/WallOfForce_01_Grey_Sphere_400x400.webm`,
                orange: `${prefix}/jb2a_patreon/Library/5th_Level/Wall_Of_Force/WallOfForce_01_Orange_Sphere_400x400.webm`,
                purple: `${prefix}/jb2a_patreon/Library/5th_Level/Wall_Of_Force/WallOfForce_01_Purple_Sphere_400x400.webm`,
                red: `${prefix}/jb2a_patreon/Library/5th_Level/Wall_Of_Force/WallOfForce_01_Red_Sphere_400x400.webm`,
                yellow: `${prefix}/jb2a_patreon/Library/5th_Level/Wall_Of_Force/WallOfForce_01_Yellow_Sphere_400x400.webm`
            },
            vertical: {
                blue: `${prefix}/jb2a_patreon/Library/5th_Level/Wall_Of_Force/WallOfForce_01_Blue_V_200x25.webm`,
                green: `${prefix}/jb2a_patreon/Library/5th_Level/Wall_Of_Force/WallOfForce_01_Green_V_200x25.webm`,
                grey: `${prefix}/jb2a_patreon/Library/5th_Level/Wall_Of_Force/WallOfForce_01_Grey_V_200x25.webm`,
                orange: `${prefix}/jb2a_patreon/Library/5th_Level/Wall_Of_Force/WallOfForce_01_Orange_V_200x25.webm`,
                purple: `${prefix}/jb2a_patreon/Library/5th_Level/Wall_Of_Force/WallOfForce_01_Purple_V_200x25.webm`,
                red: `${prefix}/jb2a_patreon/Library/5th_Level/Wall_Of_Force/WallOfForce_01_Red_V_200x25.webm`,
                yellow: `${prefix}/jb2a_patreon/Library/5th_Level/Wall_Of_Force/WallOfForce_01_Yellow_V_200x25.webm`
            }
        },
        patreonDatabase.ward = {
            rune: {
                dark_purple: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/WardRune_01_Dark_Purple_600x600.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Marker/WardRune_02_Dark_Purple_600x600.webm`
                },
                yellow: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/WardRune_01_Regular_Yellow_600x600.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Marker/WardRune_02_Regular_Yellow_600x600.webm`
                }
            },
            skull: {
                dark_purple: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/WardSkull_01_Dark_Purple_600x600.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Marker/WardSkull_02_Dark_Purple_600x600.webm`
                }
            },
            star: {
                yellow: {
                    '01': `${prefix}/jb2a_patreon/Library/Generic/Marker/WardStar_01_Regular_Yellow_600x600.webm`,
                    '02': `${prefix}/jb2a_patreon/Library/Generic/Marker/WardStar_02_Regular_Yellow_600x600.webm`
                }
            }
        },
        patreonDatabase.warhammer = {
            melee: {
                _template: 'melee',
                '01': {
                    dark_orangepurple: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Warhammer01_01_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Warhammer01_02_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Warhammer01_03_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Warhammer01_04_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Warhammer01_05_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Warhammer01_06_Dark_OrangePurple_800x600.webm`
                    ],
                    blue: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Warhammer01_01_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Warhammer01_02_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Warhammer01_03_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Warhammer01_04_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Warhammer01_05_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Warhammer01_06_Regular_Blue_800x600.webm`
                    ],
                    orange: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Warhammer01_01_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Warhammer01_02_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Warhammer01_03_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Warhammer01_04_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Warhammer01_05_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Warhammer01_06_Regular_Orange_800x600.webm`
                    ],
                    purple: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Warhammer01_01_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Warhammer01_02_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Warhammer01_03_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Warhammer01_04_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Warhammer01_05_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Warhammer01_06_Regular_Purple_800x600.webm`
                    ],
                    white: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Warhammer01_01_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Warhammer01_02_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Warhammer01_03_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Warhammer01_04_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Warhammer01_05_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Warhammer01_06_Regular_White_800x600.webm`
                    ]
                }
            }
        },
        patreonDatabase.wrench = {
            melee: {
                _template: 'melee',
                '01': {
                    dark_orangepurple: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Wrench01_01_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Wrench01_02_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Wrench01_03_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Wrench01_04_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Wrench01_05_Dark_OrangePurple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Wrench01_06_Dark_OrangePurple_800x600.webm`
                    ],
                    blue: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Wrench01_01_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Wrench01_02_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Wrench01_03_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Wrench01_04_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Wrench01_05_Regular_Blue_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Wrench01_06_Regular_Blue_800x600.webm`
                    ],
                    orange: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Wrench01_01_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Wrench01_02_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Wrench01_03_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Wrench01_04_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Wrench01_05_Regular_Orange_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Wrench01_06_Regular_Orange_800x600.webm`
                    ],
                    purple: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Wrench01_01_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Wrench01_02_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Wrench01_03_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Wrench01_04_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Wrench01_05_Regular_Purple_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Wrench01_06_Regular_Purple_800x600.webm`
                    ],
                    white: [
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Wrench01_01_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Wrench01_02_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Wrench01_03_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Wrench01_04_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Wrench01_05_Regular_White_800x600.webm`,
                        `${prefix}/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Wrench01_06_Regular_White_800x600.webm`
                    ]
                }
            }
        },
        patreonDatabase.web = {
            '01': `${prefix}/jb2a_patreon/Library/2nd_Level/Web/Web_01_White_01_400x400.webm`,
            '02': `${prefix}/jb2a_patreon/Library/2nd_Level/Web/Web_01_White_02_400x400.webm`
        },
        patreonDatabase.whirlwind = {
            blue: `${prefix}/jb2a_patreon/Library/7th_Level/Whirlwind/Whirlwind_01_Blue_400x400.webm`,
            bluegrey: `${prefix}/jb2a_patreon/Library/7th_Level/Whirlwind/Whirlwind_01_BlueGrey_01_400x400.webm`,
            bluegrey02: `${prefix}/jb2a_patreon/Library/7th_Level/Whirlwind/Whirlwind_01_BlueGrey_02_400x400.webm`,
            green: `${prefix}/jb2a_patreon/Library/7th_Level/Whirlwind/Whirlwind_01_Green_400x400.webm`,
            purple: `${prefix}/jb2a_patreon/Library/7th_Level/Whirlwind/Whirlwind_01_Purple_400x400.webm`,
            red: `${prefix}/jb2a_patreon/Library/7th_Level/Whirlwind/Whirlwind_01_Red_400x400.webm`
        },
        patreonDatabase.wind_wall = {
            '100x100': `${prefix}/jb2a_patreon/Library/3rd_Level/Wind_Wall/WindWall_01_100x100.webm`,
            '200x100': `${prefix}/jb2a_patreon/Library/3rd_Level/Wind_Wall/WindWall_01_200x100.webm`,
            '300x100': `${prefix}/jb2a_patreon/Library/3rd_Level/Wind_Wall/WindWall_01_300x100.webm`,
            '500x100': `${prefix}/jb2a_patreon/Library/3rd_Level/Wind_Wall/WindWall_01_500x100.webm`
        },
        patreonDatabase.wind_stream = {
            white: `${prefix}/jb2a_patreon/Library/Generic/Wind/WindStreams_01_White_20OPA_1200x1200.webm`
        },
        patreonDatabase.witch_bolt = {
            _template: 'ranged',
            blue: {
                '05ft': `${prefix}/jb2a_patreon/Library/1st_Level/Witch_Bolt/WitchBolt_01_Regular_Blue_05ft_600x400.webm`,
                '15ft': `${prefix}/jb2a_patreon/Library/1st_Level/Witch_Bolt/WitchBolt_01_Regular_Blue_15ft_1000x400.webm`,
                '30ft': `${prefix}/jb2a_patreon/Library/1st_Level/Witch_Bolt/WitchBolt_01_Regular_Blue_30ft_1600x400.webm`,
                '60ft': `${prefix}/jb2a_patreon/Library/1st_Level/Witch_Bolt/WitchBolt_01_Regular_Blue_60ft_2800x400.webm`,
                '90ft': `${prefix}/jb2a_patreon/Library/1st_Level/Witch_Bolt/WitchBolt_01_Regular_Blue_90ft_4000x400.webm`
            },
            dark_green: {
                '05ft': `${prefix}/jb2a_patreon/Library/1st_Level/Witch_Bolt/WitchBolt_01_Dark_Green_05ft_600x400.webm`,
                '15ft': `${prefix}/jb2a_patreon/Library/1st_Level/Witch_Bolt/WitchBolt_01_Dark_Green_15ft_1000x400.webm`,
                '30ft': `${prefix}/jb2a_patreon/Library/1st_Level/Witch_Bolt/WitchBolt_01_Dark_Green_30ft_1600x400.webm`,
                '60ft': `${prefix}/jb2a_patreon/Library/1st_Level/Witch_Bolt/WitchBolt_01_Dark_Green_60ft_2800x400.webm`,
                '90ft': `${prefix}/jb2a_patreon/Library/1st_Level/Witch_Bolt/WitchBolt_01_Dark_Green_90ft_4000x400.webm`
            },
            dark_purple: {
                '05ft': `${prefix}/jb2a_patreon/Library/1st_Level/Witch_Bolt/WitchBolt_01_Dark_Purple_05ft_600x400.webm`,
                '15ft': `${prefix}/jb2a_patreon/Library/1st_Level/Witch_Bolt/WitchBolt_01_Dark_Purple_15ft_1000x400.webm`,
                '30ft': `${prefix}/jb2a_patreon/Library/1st_Level/Witch_Bolt/WitchBolt_01_Dark_Purple_30ft_1600x400.webm`,
                '60ft': `${prefix}/jb2a_patreon/Library/1st_Level/Witch_Bolt/WitchBolt_01_Dark_Purple_60ft_2800x400.webm`,
                '90ft': `${prefix}/jb2a_patreon/Library/1st_Level/Witch_Bolt/WitchBolt_01_Dark_Purple_90ft_4000x400.webm`
            },
            dark_red: {
                '05ft': `${prefix}/jb2a_patreon/Library/1st_Level/Witch_Bolt/WitchBolt_01_Dark_Red_05ft_600x400.webm`,
                '15ft': `${prefix}/jb2a_patreon/Library/1st_Level/Witch_Bolt/WitchBolt_01_Dark_Red_15ft_1000x400.webm`,
                '30ft': `${prefix}/jb2a_patreon/Library/1st_Level/Witch_Bolt/WitchBolt_01_Dark_Red_30ft_1600x400.webm`,
                '60ft': `${prefix}/jb2a_patreon/Library/1st_Level/Witch_Bolt/WitchBolt_01_Dark_Red_60ft_2800x400.webm`,
                '90ft': `${prefix}/jb2a_patreon/Library/1st_Level/Witch_Bolt/WitchBolt_01_Dark_Red_90ft_4000x400.webm`
            },
            green: {
                '05ft': `${prefix}/jb2a_patreon/Library/1st_Level/Witch_Bolt/WitchBolt_01_Regular_Green_05ft_600x400.webm`,
                '15ft': `${prefix}/jb2a_patreon/Library/1st_Level/Witch_Bolt/WitchBolt_01_Regular_Green_15ft_1000x400.webm`,
                '30ft': `${prefix}/jb2a_patreon/Library/1st_Level/Witch_Bolt/WitchBolt_01_Regular_Green_30ft_1600x400.webm`,
                '60ft': `${prefix}/jb2a_patreon/Library/1st_Level/Witch_Bolt/WitchBolt_01_Regular_Green_60ft_2800x400.webm`,
                '90ft': `${prefix}/jb2a_patreon/Library/1st_Level/Witch_Bolt/WitchBolt_01_Regular_Green_90ft_4000x400.webm`
            },
            red: {
                '05ft': `${prefix}/jb2a_patreon/Library/1st_Level/Witch_Bolt/WitchBolt_01_Regular_Red_05ft_600x400.webm`,
                '15ft': `${prefix}/jb2a_patreon/Library/1st_Level/Witch_Bolt/WitchBolt_01_Regular_Red_15ft_1000x400.webm`,
                '30ft': `${prefix}/jb2a_patreon/Library/1st_Level/Witch_Bolt/WitchBolt_01_Regular_Red_30ft_1600x400.webm`,
                '60ft': `${prefix}/jb2a_patreon/Library/1st_Level/Witch_Bolt/WitchBolt_01_Regular_Red_60ft_2800x400.webm`,
                '90ft': `${prefix}/jb2a_patreon/Library/1st_Level/Witch_Bolt/WitchBolt_01_Regular_Red_90ft_4000x400.webm`
            },
            yellow: {
                '05ft': `${prefix}/jb2a_patreon/Library/1st_Level/Witch_Bolt/WitchBolt_01_Regular_Yellow_05ft_600x400.webm`,
                '15ft': `${prefix}/jb2a_patreon/Library/1st_Level/Witch_Bolt/WitchBolt_01_Regular_Yellow_15ft_1000x400.webm`,
                '30ft': `${prefix}/jb2a_patreon/Library/1st_Level/Witch_Bolt/WitchBolt_01_Regular_Yellow_30ft_1600x400.webm`,
                '60ft': `${prefix}/jb2a_patreon/Library/1st_Level/Witch_Bolt/WitchBolt_01_Regular_Yellow_60ft_2800x400.webm`,
                '90ft': `${prefix}/jb2a_patreon/Library/1st_Level/Witch_Bolt/WitchBolt_01_Regular_Yellow_90ft_4000x400.webm`
            }
        },
        patreonDatabase.zoning = {
            ground: {
                circle: {
                    '01': {
                        '01': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningCircle01_01_600x600.webp`
                    }
                },
                square: {
                    '01': {
                        '01': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningSquare01_01_600x600.webp`,
                        '02': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningSquare02_01_600x600.webp`,
                        '03': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningSquare03_01_600x600.webp`
                    }
                },
                indicator: {
                    inward: {
                        '01': {
                            '01': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningIndicator01In_01_600x600.webp`,
                            '02': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningIndicator02In_01_600x600.webp`,
                            '03': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningIndicator03In_01_600x600.webp`
                        },
                        '02': {
                            '01': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningIndicator01In_02_600x600.webp`,
                            '02': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningIndicator02In_02_600x600.webp`,
                            '03': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningIndicator03In_02_600x600.webp`
                        }
                    },
                    outward: {
                        '01': {
                            '01': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningIndicator01Out_01_600x600.webp`,
                            '02': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningIndicator02Out_01_600x600.webp`,
                            '03': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningIndicator03Out_01_600x600.webp`
                        },
                        '02': {
                            '01': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningIndicator01Out_02_600x600.webp`,
                            '02': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningIndicator02Out_02_600x600.webp`,
                            '03': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningIndicator03Out_02_600x600.webp`
                        }
                    }
                },
                directional: {
                    line200: {
                        '01': `${prefix}/jb2a_patreon/Library/Generic/Zoning/DirectionalIndicator01Line_01_200x200.webp`,
                        '02': `${prefix}/jb2a_patreon/Library/Generic/Zoning/DirectionalIndicator02Line_01_200x200.webp`,
                        '03': `${prefix}/jb2a_patreon/Library/Generic/Zoning/DirectionalIndicator03Line_01_200x200.webp`
                    },
                    line400: {
                        '01': `${prefix}/jb2a_patreon/Library/Generic/Zoning/DirectionalIndicator01Line_02_400x200.webp`,
                        '02': `${prefix}/jb2a_patreon/Library/Generic/Zoning/DirectionalIndicator02Line_02_400x200.webp`,
                        '03': `${prefix}/jb2a_patreon/Library/Generic/Zoning/DirectionalIndicator03Line_02_400x200.webp`
                    },
                    single: {
                        '01': `${prefix}/jb2a_patreon/Library/Generic/Zoning/DirectionalIndicator01Single_01_200x200.webp`,
                        '02': `${prefix}/jb2a_patreon/Library/Generic/Zoning/DirectionalIndicator02Single_01_200x200.webp`,
                        '03': `${prefix}/jb2a_patreon/Library/Generic/Zoning/DirectionalIndicator03Single_01_200x200.webp`
                    }
                }
            },
            inward: {
                circle: {
                    once: {
                        bluegreen: {
                            '01': {
                                '01': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningCircle01In_01_Regular_BlueGreen_600x600.webm`,
                                '02': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningCircle02In_01_Regular_BlueGreen_600x600.webm`,
                                '03': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningCircle03In_01_Regular_BlueGreen_600x600.webm`
                            }
                        },
                        redyellow: {
                            '01': {
                                '01': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningCircle01In_01_Regular_RedYellow_600x600.webm`,
                                '02': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningCircle02In_01_Regular_RedYellow_600x600.webm`,
                                '03': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningCircle03In_01_Regular_RedYellow_600x600.webm`
                            }
                        }
                    },
                    loop: {
                        bluegreen: {
                            '01': {
                                '01': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningCircle01In_01_Regular_BlueGreen_Loop_600x600.webm`,
                                '02': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningCircle02In_01_Regular_BlueGreen_Loop_600x600.webm`,
                                '03': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningCircle03In_01_Regular_BlueGreen_Loop_600x600.webm`
                            }
                        },
                        redyellow: {
                            '01': {
                                '01': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningCircle01In_01_Regular_RedYellow_Loop_600x600.webm`,
                                '02': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningCircle02In_01_Regular_RedYellow_Loop_600x600.webm`,
                                '03': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningCircle03In_01_Regular_RedYellow_Loop_600x600.webm`
                            }
                        }
                    }
                },
                square: {
                    once: {
                        bluegreen: {
                            '01': {
                                '01': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningSquare01In_01_Regular_BlueGreen_600x600.webm`,
                                '02': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningSquare02In_01_Regular_BlueGreen_600x600.webm`,
                                '03': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningSquare03In_01_Regular_BlueGreen_600x600.webm`
                            }
                        },
                        redyellow: {
                            '01': {
                                '01': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningSquare01In_01_Regular_RedYellow_600x600.webm`,
                                '02': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningSquare02In_01_Regular_RedYellow_600x600.webm`,
                                '03': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningSquare03In_01_Regular_RedYellow_600x600.webm`
                            }
                        }
                    },
                    loop: {
                        bluegreen: {
                            '01': {
                                '01': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningSquare01In_01_Regular_BlueGreen_Loop_600x600.webm`,
                                '02': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningSquare02In_01_Regular_BlueGreen_Loop_600x600.webm`,
                                '03': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningSquare03In_01_Regular_BlueGreen_Loop_600x600.webm`
                            }
                        },
                        redyellow: {
                            '01': {
                                '01': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningSquare01In_01_Regular_RedYellow_Loop_600x600.webm`,
                                '02': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningSquare02In_01_Regular_RedYellow_Loop_600x600.webm`,
                                '03': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningSquare03In_01_Regular_RedYellow_Loop_600x600.webm`
                            }
                        }
                    }
                },
                indicator: {
                    once: {
                        bluegreen: {
                            '01': {
                                '01': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningIndicator01In_01_Regular_BlueGreen_600x600.webm`,
                                '02': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningIndicator02In_01_Regular_BlueGreen_600x600.webm`,
                                '03': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningIndicator03In_01_Regular_BlueGreen_600x600.webm`
                            },
                            '02': {
                                '01': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningIndicator01In_02_Regular_BlueGreen_600x600.webm`,
                                '02': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningIndicator02In_02_Regular_BlueGreen_600x600.webm`,
                                '03': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningIndicator03In_02_Regular_BlueGreen_600x600.webm`
                            }
                        },
                        redyellow: {
                            '01': {
                                '01': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningIndicator01In_01_Regular_RedYellow_600x600.webm`,
                                '02': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningIndicator02In_01_Regular_RedYellow_600x600.webm`,
                                '03': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningIndicator03In_01_Regular_RedYellow_600x600.webm`
                            },
                            '02': {
                                '01': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningIndicator01In_02_Regular_RedYellow_600x600.webm`,
                                '02': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningIndicator02In_02_Regular_RedYellow_600x600.webm`,
                                '03': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningIndicator03In_02_Regular_RedYellow_600x600.webm`
                            }
                        }
                    },
                    loop: {
                        bluegreen: {
                            '01': {
                                '01': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningIndicator01In_01_Regular_BlueGreen_Loop_600x600.webm`,
                                '02': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningIndicator02In_01_Regular_BlueGreen_Loop_600x600.webm`,
                                '03': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningIndicator03In_01_Regular_BlueGreen_Loop_600x600.webm`
                            },
                            '02': {
                                '01': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningIndicator01In_02_Regular_BlueGreen_Loop_600x600.webm`,
                                '02': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningIndicator02In_02_Regular_BlueGreen_Loop_600x600.webm`,
                                '03': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningIndicator03In_02_Regular_BlueGreen_Loop_600x600.webm`
                            }
                        },
                        redyellow: {
                            '01': {
                                '01': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningIndicator01In_01_Regular_RedYellow_Loop_600x600.webm`,
                                '02': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningIndicator02In_01_Regular_RedYellow_Loop_600x600.webm`,
                                '03': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningIndicator03In_01_Regular_RedYellow_Loop_600x600.webm`
                            },
                            '02': {
                                '01': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningIndicator01In_02_Regular_RedYellow_Loop_600x600.webm`,
                                '02': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningIndicator02In_02_Regular_RedYellow_Loop_600x600.webm`,
                                '03': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningIndicator03In_02_Regular_RedYellow_Loop_600x600.webm`
                            }
                        }
                    }
                }
            },
            outward: {
                circle: {
                    once: {
                        bluegreen: {
                            '01': {
                                '01': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningCircle01Out_01_Regular_BlueGreen_600x600.webm`,
                                '02': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningCircle02Out_01_Regular_BlueGreen_600x600.webm`,
                                '03': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningCircle03Out_01_Regular_BlueGreen_600x600.webm`
                            }
                        },
                        redyellow: {
                            '01': {
                                '01': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningCircle01Out_01_Regular_RedYellow_600x600.webm`,
                                '02': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningCircle02Out_01_Regular_RedYellow_600x600.webm`,
                                '03': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningCircle03Out_01_Regular_RedYellow_600x600.webm`
                            }
                        }
                    },
                    loop: {
                        bluegreen: {
                            '01': {
                                '01': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningCircle01Out_01_Regular_BlueGreen_Loop_600x600.webm`,
                                '02': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningCircle02Out_01_Regular_BlueGreen_Loop_600x600.webm`,
                                '03': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningCircle03Out_01_Regular_BlueGreen_Loop_600x600.webm`
                            }
                        },
                        redyellow: {
                            '01': {
                                '01': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningCircle01Out_01_Regular_RedYellow_Loop_600x600.webm`,
                                '02': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningCircle02Out_01_Regular_RedYellow_Loop_600x600.webm`,
                                '03': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningCircle03Out_01_Regular_RedYellow_Loop_600x600.webm`
                            }
                        }
                    }
                },
                square: {
                    once: {
                        bluegreen: {
                            '01': {
                                '01': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningSquare01Out_01_Regular_BlueGreen_600x600.webm`,
                                '02': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningSquare02Out_01_Regular_BlueGreen_600x600.webm`,
                                '03': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningSquare03Out_01_Regular_BlueGreen_600x600.webm`
                            }
                        },
                        redyellow: {
                            '01': {
                                '01': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningSquare01Out_01_Regular_RedYellow_600x600.webm`,
                                '02': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningSquare02Out_01_Regular_RedYellow_600x600.webm`,
                                '03': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningSquare03Out_01_Regular_RedYellow_600x600.webm`
                            }
                        }
                    },
                    loop: {
                        bluegreen: {
                            '01': {
                                '01': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningSquare01Out_01_Regular_BlueGreen_Loop_600x600.webm`,
                                '02': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningSquare02Out_01_Regular_BlueGreen_Loop_600x600.webm`,
                                '03': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningSquare03Out_01_Regular_BlueGreen_Loop_600x600.webm`
                            }
                        },
                        redyellow: {
                            '01': {
                                '01': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningSquare01Out_01_Regular_RedYellow_Loop_600x600.webm`,
                                '02': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningSquare02Out_01_Regular_RedYellow_Loop_600x600.webm`,
                                '03': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningSquare03Out_01_Regular_RedYellow_Loop_600x600.webm`
                            }
                        }
                    }
                },
                indicator: {
                    once: {
                        bluegreen: {
                            '01': {
                                '01': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningIndicator01Out_01_Regular_BlueGreen_600x600.webm`,
                                '02': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningIndicator02Out_01_Regular_BlueGreen_600x600.webm`,
                                '03': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningIndicator03Out_01_Regular_BlueGreen_600x600.webm`
                            },
                            '02': {
                                '01': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningIndicator01Out_02_Regular_BlueGreen_600x600.webm`,
                                '02': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningIndicator02Out_02_Regular_BlueGreen_600x600.webm`,
                                '03': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningIndicator03Out_02_Regular_BlueGreen_600x600.webm`
                            }
                        },
                        redyellow: {
                            '01': {
                                '01': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningIndicator01Out_01_Regular_RedYellow_600x600.webm`,
                                '02': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningIndicator02Out_01_Regular_RedYellow_600x600.webm`,
                                '03': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningIndicator03Out_01_Regular_RedYellow_600x600.webm`
                            },
                            '02': {
                                '01': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningIndicator01Out_02_Regular_RedYellow_600x600.webm`,
                                '02': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningIndicator02Out_02_Regular_RedYellow_600x600.webm`,
                                '03': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningIndicator03Out_02_Regular_RedYellow_600x600.webm`
                            }
                        }
                    },
                    loop: {
                        bluegreen: {
                            '01': {
                                '01': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningIndicator01Out_01_Regular_BlueGreen_Loop_600x600.webm`,
                                '02': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningIndicator02Out_01_Regular_BlueGreen_Loop_600x600.webm`,
                                '03': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningIndicator03Out_01_Regular_BlueGreen_Loop_600x600.webm`
                            },
                            '02': {
                                '01': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningIndicator01Out_02_Regular_BlueGreen_Loop_600x600.webm`,
                                '02': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningIndicator02Out_02_Regular_BlueGreen_Loop_600x600.webm`,
                                '03': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningIndicator03Out_02_Regular_BlueGreen_Loop_600x600.webm`
                            }
                        },
                        redyellow: {
                            '01': {
                                '01': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningIndicator01Out_01_Regular_RedYellow_Loop_600x600.webm`,
                                '02': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningIndicator02Out_01_Regular_RedYellow_Loop_600x600.webm`,
                                '03': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningIndicator03Out_01_Regular_RedYellow_Loop_600x600.webm`
                            },
                            '02': {
                                '01': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningIndicator01Out_02_Regular_RedYellow_Loop_600x600.webm`,
                                '02': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningIndicator02Out_02_Regular_RedYellow_Loop_600x600.webm`,
                                '03': `${prefix}/jb2a_patreon/Library/Generic/Zoning/ZoningIndicator03Out_02_Regular_RedYellow_Loop_600x600.webm`
                            }
                        }
                    }
                }
            },
            directional: {
                once: {
                    bluegreen: {
                        line200: {
                            '01': `${prefix}/jb2a_patreon/Library/Generic/Zoning/DirectionalIndicator01Line_01_Regular_BlueGreen_200x200.webm`,
                            '02': `${prefix}/jb2a_patreon/Library/Generic/Zoning/DirectionalIndicator02Line_01_Regular_BlueGreen_200x200.webm`,
                            '03': `${prefix}/jb2a_patreon/Library/Generic/Zoning/DirectionalIndicator03Line_01_Regular_BlueGreen_200x200.webm`
                        },
                        line400: {
                            '01': `${prefix}/jb2a_patreon/Library/Generic/Zoning/DirectionalIndicator01Line_02_Regular_BlueGreen_400x200.webm`,
                            '02': `${prefix}/jb2a_patreon/Library/Generic/Zoning/DirectionalIndicator02Line_02_Regular_BlueGreen_400x200.webm`,
                            '03': `${prefix}/jb2a_patreon/Library/Generic/Zoning/DirectionalIndicator03Line_02_Regular_BlueGreen_400x200.webm`
                        },
                        single: {
                            '01': `${prefix}/jb2a_patreon/Library/Generic/Zoning/DirectionalIndicator01Single_01_Regular_BlueGreen_200x200.webm`,
                            '02': `${prefix}/jb2a_patreon/Library/Generic/Zoning/DirectionalIndicator02Single_01_Regular_BlueGreen_200x200.webm`,
                            '03': `${prefix}/jb2a_patreon/Library/Generic/Zoning/DirectionalIndicator03Single_01_Regular_BlueGreen_200x200.webm`
                        }
                    },
                    redyellow: {
                        line200: {
                            '01': `${prefix}/jb2a_patreon/Library/Generic/Zoning/DirectionalIndicator01Line_01_Regular_RedYellow_200x200.webm`,
                            '02': `${prefix}/jb2a_patreon/Library/Generic/Zoning/DirectionalIndicator02Line_01_Regular_RedYellow_200x200.webm`,
                            '03': `${prefix}/jb2a_patreon/Library/Generic/Zoning/DirectionalIndicator03Line_01_Regular_RedYellow_200x200.webm`
                        },
                        line400: {
                            '01': `${prefix}/jb2a_patreon/Library/Generic/Zoning/DirectionalIndicator01Line_02_Regular_RedYellow_400x200.webm`,
                            '02': `${prefix}/jb2a_patreon/Library/Generic/Zoning/DirectionalIndicator02Line_02_Regular_RedYellow_400x200.webm`,
                            '03': `${prefix}/jb2a_patreon/Library/Generic/Zoning/DirectionalIndicator03Line_02_Regular_RedYellow_400x200.webm`
                        },
                        single: {
                            '01': `${prefix}/jb2a_patreon/Library/Generic/Zoning/DirectionalIndicator01Single_01_Regular_RedYellow_200x200.webm`,
                            '02': `${prefix}/jb2a_patreon/Library/Generic/Zoning/DirectionalIndicator02Single_01_Regular_RedYellow_200x200.webm`,
                            '03': `${prefix}/jb2a_patreon/Library/Generic/Zoning/DirectionalIndicator03Single_01_Regular_RedYellow_200x200.webm`
                        }
                    }
                },
                loop: {
                    bluegreen: {
                        line200: {
                            '01': `${prefix}/jb2a_patreon/Library/Generic/Zoning/DirectionalIndicator01Line_01_Regular_BlueGreen_Loop_200x200.webm`,
                            '02': `${prefix}/jb2a_patreon/Library/Generic/Zoning/DirectionalIndicator02Line_01_Regular_BlueGreen_Loop_200x200.webm`,
                            '03': `${prefix}/jb2a_patreon/Library/Generic/Zoning/DirectionalIndicator03Line_01_Regular_BlueGreen_Loop_200x200.webm`
                        },
                        line400: {
                            '01': `${prefix}/jb2a_patreon/Library/Generic/Zoning/DirectionalIndicator01Line_02_Regular_BlueGreen_Loop_400x200.webm`,
                            '02': `${prefix}/jb2a_patreon/Library/Generic/Zoning/DirectionalIndicator02Line_02_Regular_BlueGreen_Loop_400x200.webm`,
                            '03': `${prefix}/jb2a_patreon/Library/Generic/Zoning/DirectionalIndicator03Line_02_Regular_BlueGreen_Loop_400x200.webm`
                        }
                    },
                    redyellow: {
                        line200: {
                            '01': `${prefix}/jb2a_patreon/Library/Generic/Zoning/DirectionalIndicator01Line_01_Regular_RedYellow_Loop_200x200.webm`,
                            '02': `${prefix}/jb2a_patreon/Library/Generic/Zoning/DirectionalIndicator02Line_01_Regular_RedYellow_Loop_200x200.webm`,
                            '03': `${prefix}/jb2a_patreon/Library/Generic/Zoning/DirectionalIndicator03Line_01_Regular_RedYellow_Loop_200x200.webm`
                        },
                        line400: {
                            '01': `${prefix}/jb2a_patreon/Library/Generic/Zoning/DirectionalIndicator01Line_02_Regular_RedYellow_Loop_400x200.webm`,
                            '02': `${prefix}/jb2a_patreon/Library/Generic/Zoning/DirectionalIndicator02Line_02_Regular_RedYellow_Loop_400x200.webm`,
                            '03': `${prefix}/jb2a_patreon/Library/Generic/Zoning/DirectionalIndicator03Line_02_Regular_RedYellow_Loop_400x200.webm`
                        }
                    }
                }
            }
        }

}

export { patreonDatabase } 
