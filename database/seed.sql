-- Demo data for local development.
-- Safe to run repeatedly: the fixed IDs update these demo rows on re-run.

BEGIN;

INSERT INTO public.users (id, username, email, display_name, bio, avatar_url)
VALUES
  (
    '10000000-0000-4000-8000-000000000001',
    'demo_maya',
    'maya@example.test',
    'Maya Chen',
    'Trad climber, weekend wanderer, always up for one more pitch.',
    NULL
  ),
  (
    '10000000-0000-4000-8000-000000000002',
    'demo_jordan',
    'jordan@example.test',
    'Jordan Rivera',
    'Bouldering after work. Sport climbing whenever I can get outside.',
    NULL
  ),
  (
    '10000000-0000-4000-8000-000000000003',
    'demo_nina',
    'nina@example.test',
    'Nina Park',
    'Learning to lead, collecting good days at the crag.',
    NULL
  )
ON CONFLICT (id) DO UPDATE SET
  username = EXCLUDED.username,
  email = EXCLUDED.email,
  display_name = EXCLUDED.display_name,
  bio = EXCLUDED.bio,
  avatar_url = EXCLUDED.avatar_url,
  updated_at = now();

INSERT INTO public.posts (
  id, author_id, caption, climb_name, grade, climbing_style, location, image_url, created_at
)
VALUES
  (
    '20000000-0000-4000-8000-000000000001',
    '10000000-0000-4000-8000-000000000001',
    'Finally sent this classic today. The views from the top made every hang worth it.',
    'High Exposure',
    '5.6',
    'Trad',
    'The Gunks, New York',
    NULL,
    now() - interval '2 hours'
  ),
  (
    '20000000-0000-4000-8000-000000000002',
    '10000000-0000-4000-8000-000000000002',
    'Friday night project session with the crew. Trust the feet and commit to the move!',
    'Orange Arete',
    'V5',
    'Bouldering',
    'Brooklyn Boulders, New York',
    NULL,
    now() - interval '5 hours'
  ),
  (
    '20000000-0000-4000-8000-000000000003',
    '10000000-0000-4000-8000-000000000003',
    'First lead of the season! Thanks to everyone who gave me a patient belay and plenty of stoke.',
    'Classic Corner',
    '5.8',
    'Sport',
    'Rumney, New Hampshire',
    NULL,
    now() - interval '1 day'
  ),
  (
    '20000000-0000-4000-8000-000000000004',
    '10000000-0000-4000-8000-000000000001',
    'A mellow warm-up, crisp fall air, and a really good crew. More days like this, please.',
    'Easy Rider',
    '5.2',
    'Trad',
    'The Gunks, New York',
    NULL,
    now() - interval '2 days'
  )
ON CONFLICT (id) DO UPDATE SET
  author_id = EXCLUDED.author_id,
  caption = EXCLUDED.caption,
  climb_name = EXCLUDED.climb_name,
  grade = EXCLUDED.grade,
  climbing_style = EXCLUDED.climbing_style,
  location = EXCLUDED.location,
  image_url = EXCLUDED.image_url,
  created_at = EXCLUDED.created_at,
  updated_at = now();

COMMIT;
