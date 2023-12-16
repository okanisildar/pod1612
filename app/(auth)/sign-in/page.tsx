import { Button, Flex, Heading, Link, Text } from '@radix-ui/themes';
import { FaSpotify } from 'react-icons/fa';

type Props = {
  searchParams: {
    redirect?: string;
  };
};

export default function Page(props: Props) {
  return (
    <Flex direction="column" gap="4">
      <Heading trim="both">Welcome to beecast</Heading>

      <Text color="gray" size="4" trim="both">
        A more efficient way to listen podcasts.
      </Text>

      <form action="/auth/sign-in" method="POST">
        <input
          name="redirect"
          type="hidden"
          value={props.searchParams.redirect}
        />

        <Flex direction="column">
          <Button highContrast size="3" type="submit">
            <FaSpotify />
            Continue with Spotify
          </Button>
        </Flex>
      </form>

      <Text color="gray" size="1" trim="both">
        By clicking continue, you acknowledge that you have read and understood,
        and agree to our{' '}
        <Link href="/terms-of-service" target="_blank">
          Terms of Service
        </Link>{' '}
        and{' '}
        <Link href="/privacy-policy" target="_blank">
          Privacy Policy
        </Link>
        .
      </Text>
    </Flex>
  );
}
