import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { profileService } from "@/services/profile.service"
import { Profile } from "@/types";

export default async function ProfileCard() {
  const profileData = await profileService.getProfile();
  const profile = profileData?.data?.result;
  return (
    <Card className="max-w-md mx-auto mt-8 shadow-lg">
      <CardHeader className="flex flex-col items-center">
        {profile.image ? (
          <img
            src={profile.image}
            alt={profile.name}
            className="w-24 h-24 rounded-full object-cover mb-2"
          />
        ) : (
          <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mb-2">
            <span className="text-xl font-bold">{profile.name[0]}</span>
          </div>
        )}
        <CardTitle className="text-lg">{profile.name}</CardTitle>
        <p className="text-sm text-gray-500">{profile.role}</p>
      </CardHeader>
      <CardContent className="space-y-2">
        <div>
          <span className="font-semibold">Email:</span> {profile.email}{" "}
          {profile.emailVerified && <span className="text-green-600">(Verified)</span>}
        </div>
        {profile.phone && (
          <div>
            <span className="font-semibold">Phone:</span> {profile.phone}
          </div>
        )}
        <div>
          <span className="font-semibold">Status:</span>{" "}
          <span
            className={
              profile.status === "ACTIVE"
                ? "text-green-600 font-semibold"
                : "text-red-600 font-semibold"
            }
          >
            {profile.status}
          </span>
        </div>
        <div>
          <span className="font-semibold">Joined:</span>{" "}
          {new Date(profile.createdAt).toLocaleDateString()}
        </div>
        <div>
          <span className="font-semibold">Last Updated:</span>{" "}
          {new Date(profile.updatedAt).toLocaleDateString()}
        </div>
      </CardContent>
      <CardFooter className="flex justify-center space-x-2">
        {/* Conditional buttons based on role */}
        {profile.role === "TUTOR" && (
          <Button size="sm" variant="outline">
            Edit Profile
          </Button>
        )}
        {profile.role === "ADMIN" && (
          <Button size="sm" variant="destructive">
            Deactivate
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
