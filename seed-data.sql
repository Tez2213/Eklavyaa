-- Seed Data for Eklavyaa Platform
-- Indian-themed educational platform with diverse students

-- First, clean up any existing seed data
DELETE FROM game_clicks WHERE user_id IN (
  SELECT user_id FROM leaderboard WHERE username LIKE 'seed_%'
);

DELETE FROM leaderboard WHERE username LIKE 'seed_%';

-- Temporarily drop foreign key constraint to insert seed data
ALTER TABLE leaderboard DROP CONSTRAINT IF EXISTS leaderboard_user_id_fkey;

-- Insert 50 diverse Indian students into leaderboard
INSERT INTO leaderboard (user_id, username, full_name, avatar_url, points, games_played, class_level, streak, last_game_played_at) VALUES
(gen_random_uuid(), 'seed_aarav_math_genius', 'Aarav Sharma', 'https://avatar.iran.liara.run/public/1', 150, 45, 10, 7, NOW() - INTERVAL '1 hour'),
(gen_random_uuid(), 'seed_ananya_scholar', 'Ananya Patel', 'https://avatar.iran.liara.run/public/2', 145, 42, 11, 6, NOW() - INTERVAL '2 hours'),
(gen_random_uuid(), 'seed_vivaan_einstein', 'Vivaan Kumar', 'https://avatar.iran.liara.run/public/3', 140, 40, 12, 8, NOW() - INTERVAL '3 hours'),
(gen_random_uuid(), 'seed_diya_prodigy', 'Diya Reddy', 'https://avatar.iran.liara.run/public/4', 138, 39, 10, 5, NOW() - INTERVAL '4 hours'),
(gen_random_uuid(), 'seed_arjun_champion', 'Arjun Singh', 'https://avatar.iran.liara.run/public/5', 135, 38, 9, 7, NOW() - INTERVAL '5 hours'),

(gen_random_uuid(), 'seed_saanvi_star', 'Saanvi Gupta', 'https://avatar.iran.liara.run/public/6', 98, 35, 11, 4, NOW() - INTERVAL '6 hours'),
(gen_random_uuid(), 'seed_reyansh_ace', 'Reyansh Mehta', 'https://avatar.iran.liara.run/public/7', 95, 34, 8, 6, NOW() - INTERVAL '7 hours'),
(gen_random_uuid(), 'seed_aanya_bright', 'Aanya Verma', 'https://avatar.iran.liara.run/public/8', 92, 33, 10, 3, NOW() - INTERVAL '8 hours'),
(gen_random_uuid(), 'seed_vihaan_legend', 'Vihaan Joshi', 'https://avatar.iran.liara.run/public/9', 90, 32, 9, 5, NOW() - INTERVAL '9 hours'),
(gen_random_uuid(), 'seed_kiara_wizard', 'Kiara Desai', 'https://avatar.iran.liara.run/public/10', 88, 31, 12, 4, NOW() - INTERVAL '10 hours'),
(gen_random_uuid(), 'seed_aditya_explorer', 'Aditya Iyer', 'https://avatar.iran.liara.run/public/11', 85, 30, 7, 6, NOW() - INTERVAL '11 hours'),
(gen_random_uuid(), 'seed_navya_mastermind', 'Navya Shah', 'https://avatar.iran.liara.run/public/12', 83, 29, 11, 2, NOW() - INTERVAL '12 hours'),
(gen_random_uuid(), 'seed_ishaan_rocket', 'Ishaan Nair', 'https://avatar.iran.liara.run/public/13', 80, 28, 8, 5, NOW() - INTERVAL '13 hours'),

(gen_random_uuid(), 'seed_myra_curious', 'Myra Pandey', 'https://avatar.iran.liara.run/public/14', 78, 27, 10, 3, NOW() - INTERVAL '14 hours'),
(gen_random_uuid(), 'seed_ayaan_thinker', 'Ayaan Kapoor', 'https://avatar.iran.liara.run/public/15', 75, 26, 6, 4, NOW() - INTERVAL '15 hours'),
(gen_random_uuid(), 'seed_pihu_genius', 'Pihu Bansal', 'https://avatar.iran.liara.run/public/16', 72, 25, 9, 7, NOW() - INTERVAL '16 hours'),
(gen_random_uuid(), 'seed_rudra_swift', 'Rudra Chatterjee', 'https://avatar.iran.liara.run/public/17', 70, 24, 11, 2, NOW() - INTERVAL '17 hours'),
(gen_random_uuid(), 'seed_siya_brilliant', 'Siya Rao', 'https://avatar.iran.liara.run/public/18', 68, 23, 7, 5, NOW() - INTERVAL '18 hours'),
(gen_random_uuid(), 'seed_kabir_sharp', 'Kabir Malhotra', 'https://avatar.iran.liara.run/public/19', 65, 22, 12, 3, NOW() - INTERVAL '19 hours'),
(gen_random_uuid(), 'seed_aadhya_smart', 'Aadhya Agarwal', 'https://avatar.iran.liara.run/public/20', 63, 21, 8, 6, NOW() - INTERVAL '20 hours'),
(gen_random_uuid(), 'seed_dhruv_seeker', 'Dhruv Pillai', 'https://avatar.iran.liara.run/public/21', 60, 20, 10, 1, NOW() - INTERVAL '21 hours'),
(gen_random_uuid(), 'seed_pari_wonder', 'Pari Bose', 'https://avatar.iran.liara.run/public/22', 58, 19, 9, 4, NOW() - INTERVAL '22 hours'),
(gen_random_uuid(), 'seed_atharv_learner', 'Atharv Khanna', 'https://avatar.iran.liara.run/public/23', 55, 18, 6, 2, NOW() - INTERVAL '23 hours'),
(gen_random_uuid(), 'seed_anvi_seeker', 'Anvi Srinivasan', 'https://avatar.iran.liara.run/public/24', 53, 17, 11, 5, NOW() - INTERVAL '1 day'),
(gen_random_uuid(), 'seed_krishna_mind', 'Krishna Menon', 'https://avatar.iran.liara.run/public/25', 50, 16, 7, 3, NOW() - INTERVAL '1 day'),

(gen_random_uuid(), 'seed_avni_rising', 'Avni Ghosh', 'https://avatar.iran.liara.run/public/26', 48, 15, 12, 6, NOW() - INTERVAL '1 day'),
(gen_random_uuid(), 'seed_shivansh_climber', 'Shivansh Mishra', 'https://avatar.iran.liara.run/public/27', 45, 14, 8, 1, NOW() - INTERVAL '1 day'),
(gen_random_uuid(), 'seed_sara_eager', 'Sara Kulkarni', 'https://avatar.iran.liara.run/public/28', 43, 13, 10, 4, NOW() - INTERVAL '1 day'),
(gen_random_uuid(), 'seed_krish_builder', 'Krish Saxena', 'https://avatar.iran.liara.run/public/29', 40, 12, 9, 2, NOW() - INTERVAL '1 day'),
(gen_random_uuid(), 'seed_riya_dreamer', 'Riya Dubey', 'https://avatar.iran.liara.run/public/30', 38, 11, 6, 5, NOW() - INTERVAL '1 day'),
(gen_random_uuid(), 'seed_arnav_voyager', 'Arnav Bhatt', 'https://avatar.iran.liara.run/public/31', 35, 10, 11, 3, NOW() - INTERVAL '2 days'),
(gen_random_uuid(), 'seed_isha_spark', 'Isha Sinha', 'https://avatar.iran.liara.run/public/32', 33, 9, 7, 7, NOW() - INTERVAL '2 days'),
(gen_random_uuid(), 'seed_yash_pioneer', 'Yash Jain', 'https://avatar.iran.liara.run/public/33', 30, 8, 12, 1, NOW() - INTERVAL '2 days'),

(gen_random_uuid(), 'seed_tara_newbie', 'Tara Chopra', 'https://avatar.iran.liara.run/public/34', 28, 7, 8, 4, NOW() - INTERVAL '2 days'),
(gen_random_uuid(), 'seed_pranav_starter', 'Pranav Yadav', 'https://avatar.iran.liara.run/public/35', 25, 6, 10, 2, NOW() - INTERVAL '2 days'),
(gen_random_uuid(), 'seed_mishka_beginner', 'Mishka Das', 'https://avatar.iran.liara.run/public/36', 23, 5, 6, 5, NOW() - INTERVAL '3 days'),
(gen_random_uuid(), 'seed_laksh_freshman', 'Laksh Thakur', 'https://avatar.iran.liara.run/public/37', 20, 4, 9, 3, NOW() - INTERVAL '3 days'),
(gen_random_uuid(), 'seed_prisha_novice', 'Prisha Rathi', 'https://avatar.iran.liara.run/public/38', 18, 3, 11, 6, NOW() - INTERVAL '3 days'),
(gen_random_uuid(), 'seed_shaurya_rookie', 'Shaurya Gupta', 'https://avatar.iran.liara.run/public/39', 15, 2, 7, 1, NOW() - INTERVAL '3 days'),

(gen_random_uuid(), 'seed_anika_explorer', 'Anika Sethi', 'https://avatar.iran.liara.run/public/40', 14, 2, 12, 4, NOW() - INTERVAL '4 days'),
(gen_random_uuid(), 'seed_advait_student', 'Advait Bhardwaj', 'https://avatar.iran.liara.run/public/41', 12, 2, 8, 2, NOW() - INTERVAL '4 days'),
(gen_random_uuid(), 'seed_zara_apprentice', 'Zara Khan', 'https://avatar.iran.liara.run/public/42', 10, 1, 6, 5, NOW() - INTERVAL '4 days'),
(gen_random_uuid(), 'seed_rohan_tyro', 'Rohan Singhal', 'https://avatar.iran.liara.run/public/43', 8, 1, 10, 3, NOW() - INTERVAL '5 days'),
(gen_random_uuid(), 'seed_mira_initiate', 'Mira Bajaj', 'https://avatar.iran.liara.run/public/44', 7, 1, 9, 1, NOW() - INTERVAL '5 days'),
(gen_random_uuid(), 'seed_aryan_learner', 'Aryan Goswami', 'https://avatar.iran.liara.run/public/45', 5, 1, 7, 0, NOW() - INTERVAL '5 days'),

(gen_random_uuid(), 'seed_shanaya_fresh', 'Shanaya Pandya', 'https://avatar.iran.liara.run/public/46', 4, 1, 11, 2, NOW() - INTERVAL '6 days'),
(gen_random_uuid(), 'seed_vedant_new', 'Vedant Deshpande', 'https://avatar.iran.liara.run/public/47', 3, 1, 6, 0, NOW() - INTERVAL '6 days'),
(gen_random_uuid(), 'seed_kavya_joiner', 'Kavya Raghavan', 'https://avatar.iran.liara.run/public/48', 2, 1, 12, 1, NOW() - INTERVAL '7 days'),
(gen_random_uuid(), 'seed_aarush_entrant', 'Aarush Khurana', 'https://avatar.iran.liara.run/public/49', 1, 1, 8, 0, NOW() - INTERVAL '7 days'),
(gen_random_uuid(), 'seed_nitya_recruit', 'Nitya Subramanian', 'https://avatar.iran.liara.run/public/50', 1, 1, 10, 0, NOW() - INTERVAL '8 days');

-- Re-add the foreign key constraint (optional - for future real users)
ALTER TABLE leaderboard ADD CONSTRAINT leaderboard_user_id_fkey 
  FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;

-- Verify the seed data
SELECT COUNT(*) as total_seed_users FROM leaderboard WHERE username LIKE 'seed_%';
SELECT class_level, COUNT(*) as students_per_class 
FROM leaderboard 
WHERE username LIKE 'seed_%' 
GROUP BY class_level 
ORDER BY class_level;

-- Show top 10 performers
SELECT username, full_name, points, games_played, streak, class_level 
FROM leaderboard 
WHERE username LIKE 'seed_%' 
ORDER BY points DESC 
LIMIT 10;
